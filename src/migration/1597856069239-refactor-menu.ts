import {MigrationInterface, QueryRunner} from "typeorm";

export class refactorMenu1597856069239 implements MigrationInterface {
    name = 'refactorMenu1597856069239'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_b8976e4e256f617803e08f7a306"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_c93f22720c77241d2476c07cabf"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "restaurantId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "UQ_b8976e4e256f617803e08f7a306"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "dishNameId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "dishName"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "restaurantName"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "dishName" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD "restaurantName" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD "menuId" integer`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "UQ_4f59acacbd2a6e861012a54c0ff" UNIQUE ("menuId")`);
        await queryRunner.query(`ALTER TABLE "order" ADD "restaurantId" integer`);
        await queryRunner.query(`ALTER TABLE "menu" ADD "orderId" integer`);
        await queryRunner.query(`ALTER TABLE "menu" ADD CONSTRAINT "UQ_225217b933e244ba3afebfeb029" UNIQUE ("orderId")`);
        await queryRunner.query(`ALTER TABLE "openinghour" DROP CONSTRAINT "FK_86a3f1f0fc2ff7be49418368d13"`);
        await queryRunner.query(`ALTER TABLE "openinghour" ALTER COLUMN "restaurantId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "menu" DROP CONSTRAINT "FK_085156de3c3a44eba017a6a0846"`);
        await queryRunner.query(`ALTER TABLE "menu" ALTER COLUMN "restaurantId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "openinghour" ADD CONSTRAINT "FK_86a3f1f0fc2ff7be49418368d13" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "menu" ADD CONSTRAINT "FK_085156de3c3a44eba017a6a0846" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_4f59acacbd2a6e861012a54c0ff" FOREIGN KEY ("menuId") REFERENCES "menu"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_c93f22720c77241d2476c07cabf" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "menu" ADD CONSTRAINT "FK_225217b933e244ba3afebfeb029" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "menu" DROP CONSTRAINT "FK_225217b933e244ba3afebfeb029"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_c93f22720c77241d2476c07cabf"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_4f59acacbd2a6e861012a54c0ff"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`ALTER TABLE "menu" DROP CONSTRAINT "FK_085156de3c3a44eba017a6a0846"`);
        await queryRunner.query(`ALTER TABLE "openinghour" DROP CONSTRAINT "FK_86a3f1f0fc2ff7be49418368d13"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "menu" ALTER COLUMN "restaurantId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "menu" ADD CONSTRAINT "FK_085156de3c3a44eba017a6a0846" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "openinghour" ALTER COLUMN "restaurantId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "openinghour" ADD CONSTRAINT "FK_86a3f1f0fc2ff7be49418368d13" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "menu" DROP CONSTRAINT "UQ_225217b933e244ba3afebfeb029"`);
        await queryRunner.query(`ALTER TABLE "menu" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "restaurantId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "UQ_4f59acacbd2a6e861012a54c0ff"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "menuId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "restaurantName"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "dishName"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "restaurantName" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD "dishName" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD "dishNameId" integer`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "UQ_b8976e4e256f617803e08f7a306" UNIQUE ("dishNameId")`);
        await queryRunner.query(`ALTER TABLE "order" ADD "restaurantId" integer`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_c93f22720c77241d2476c07cabf" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_b8976e4e256f617803e08f7a306" FOREIGN KEY ("dishNameId") REFERENCES "menu"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
