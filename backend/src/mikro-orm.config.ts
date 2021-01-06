import { __prod__ } from "./constants";
import { User } from "./entities/User";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

export default {
    migrations: {
        path: path.join(__dirname,'./migrations'), // absolute path
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for js/ts files
    },
    entities: [User],
    dbName: 'photolens',
    user:'fareedahmad',
    type: 'postgresql',
    debug: true,
} as Parameters<typeof MikroORM.init>[0];