import { Request, Response } from "express";
import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants";
import { User } from "./entities/User";
import microConfig from './mikro-orm.config'

const express = require('express');
const app = express();

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    orm.getMigrator().up()
    // const newUser = orm.em.create(User, {firstName:'fareed', lastName: 'ahmad', email: 'fahmad@gmail.com'})
    // await orm.em.persistAndFlush(newUser);
    // const users = await orm.em.find(User, {});
    // console.log(users);
};

main();
