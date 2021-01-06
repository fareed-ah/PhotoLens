import 'reflect-metadata';
import { Request, Response } from "express";
import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants";
import { User } from "./entities/User";
import microConfig from './mikro-orm.config'
import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { UserResolver } from "./resolvers/user";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    orm.getMigrator().up();

    const app = express();
 
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, UserResolver],
            validate: false
        }),
        context: () => ({em: orm.em})
    })

    apolloServer.applyMiddleware({ app });

    app.listen(3000, () => {
        console.log('Server started on  localhost:3000');
    })
};

main();
