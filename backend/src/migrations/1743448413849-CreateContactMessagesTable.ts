import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateContactMessagesTable1743448413849 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "contact_messages" (
              "id" SERIAL NOT NULL,
              "name" VARCHAR NOT NULL,
              "email" VARCHAR NOT NULL,
              "message" TEXT,
              "created_at" TIMESTAMP NOT NULL DEFAULT now(),
              CONSTRAINT "PK_contact_messages_id" PRIMARY KEY ("id")
            )
          `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "contact_messages"`);
    }

}
