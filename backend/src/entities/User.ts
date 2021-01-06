import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class User {

  @PrimaryKey()
  id!: number;

  @Property({type: 'date'})
  createdAt = new Date();

  @Property({type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({type: 'text'})
  firstName!: string;
    
  @Property({type: 'text'})
  lastName!: string;
     
  @Property({type: 'text'})
  email!: string;
}