import { Migration } from '@mikro-orm/migrations';

export class Migration20210106155440 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "first_name" text not null, "last_name" text not null, "email" text not null);');
  }

}
