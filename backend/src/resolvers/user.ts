import { User } from "../entities/User";
import { MyContext } from "src/types";
import { Resolver, Query, Ctx, Arg, Int, Mutation, Field, ObjectType } from "type-graphql";
import argon2 from 'argon2'


@ObjectType()
class FieldError{
    @Field()
    field: string;
    
    @Field()
    message: string
}

@ObjectType()
class UserResponse{
    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[]
    
    @Field(()  =>  User, {nullable: true})
    user?: User
}

@Resolver()
export class UserResolver {
    @Query(() => [User])
    users(@Ctx() { em }: MyContext): Promise<User[]> {
        return em.find(User, {})
    }

    @Query(() => User, {nullable: true})
    user(
        @Arg('id', () => Int) id: number,
        @Ctx() { em }: MyContext): Promise<User | null> {
        return em.findOne(User, {id})
    }

    @Mutation(() => UserResponse)
    async registerUser(
        @Arg('first_name', () => String) firstName: string,
        @Arg('last_name', () => String) lastName: string,
        @Arg('email', () => String) email: string,
        @Arg('password', () => String) password: string,
        @Ctx() { em }: MyContext)
        : Promise<UserResponse> {
        if (password.length < 8) {
            return {
                errors: [
                    {
                        field: "password",
                        message:  "Password must be at least 8 characters",
                    }
                ]
            }
        }
        const hashedPassword = await argon2.hash(password)
        const user = em.create(User, {firstName: firstName, lastName: lastName, email:email, password: hashedPassword})
        
        try {
            await em.persistAndFlush(user);
        } catch (err) {
            if (err.code === '23505'){ //|| err.detail.includes("already exists")) {
                // duplicate username error
                return {
                errors: [
                    {
                        field: "username",
                        message:  "Username already taken",
                    }
                ]
            }
            }
            console.log("Register error: ", err.message)
        }
        return {user};
    }

    @Mutation(() => UserResponse) 
    async loginUser(
        @Arg('email', () => String) email: string,
        @Arg('password', () => String) password: string,
        @Ctx() { em }: MyContext)
        : Promise<UserResponse> {
        const user = await em.findOne(User, { email });
        if (!user) {
            return {
                errors: [{
                    field: "username",
                    message: "Username does not exist",
                }]
            }
        }

        const valid = await argon2.verify(user.password, password)
        if (!valid) {
            return {
                errors: [{
                    field: "password",
                    message: "Password is invalid",
                }]
            }
        }

        return {
            user,
        };
    }

    @Mutation(() => User, {nullable: true})
    async updateUser(
        @Arg('id', () => Int) id: number,
        @Arg('first_name', () => String) firstName: string,
        @Arg('last_name', () => String) lastName: string,
        @Arg('email', () => String) email: string,
        @Ctx() { em }: MyContext)
        : Promise<User | null> {
        const user = await em.findOne(User, { id });
        if (!user) {
            return null
        }
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        await em.persistAndFlush(user)
        return user;
    }


    @Mutation(() => Boolean)
    async deleteUser(
        @Arg('id', () => Int) id: number,
        @Ctx() { em }: MyContext)
        : Promise<boolean> {
        
        await em.nativeDelete(User, { id });
        return true;
    }
}