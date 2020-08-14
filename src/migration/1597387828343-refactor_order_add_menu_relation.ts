import {MigrationInterface, QueryRunner} from "typeorm";

export class refactorOrderAddMenuRelation1597387828343 implements MigrationInterface {
    name = 'refactorOrderAddMenuRelation1597387828343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_c93f22720c77241d2476c07cabf"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "restaurantId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "restaurantName"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "dishName"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "dishName" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD "restaurantName" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD "restaurantId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_c93f22720c77241d2476c07cabf" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_c93f22720c77241d2476c07cabf"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "restaurantId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "restaurantName"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "dishName"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "dishName" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD "restaurantName" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD "restaurantId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_c93f22720c77241d2476c07cabf" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
