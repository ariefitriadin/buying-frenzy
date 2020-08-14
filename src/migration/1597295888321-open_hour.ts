import {MigrationInterface, QueryRunner} from "typeorm";

export class openHour1597295888321 implements MigrationInterface {
    name = 'openHour1597295888321'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "openinghour" ("id" SERIAL NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "createdBy" character varying(150) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedBy" character varying(300) NOT NULL, "restaurantId" integer NOT NULL, "openingHour" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_a027a74b00f9bffb9fcc0a405c3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "openinghour" ADD CONSTRAINT "FK_86a3f1f0fc2ff7be49418368d13" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "openinghour" DROP CONSTRAINT "FK_86a3f1f0fc2ff7be49418368d13"`);
        await queryRunner.query(`DROP TABLE "openinghour"`);
    }

}
