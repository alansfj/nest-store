import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInitialCategories1734676412169
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO category (name) VALUES
        ('Electronics'),
        ('Clothing & Apparel'),
        ('Home & Living'),
        ('Sports & Outdoors'),
        ('Health & Beauty'),
        ('Food & Beverages'),
        ('Books & Stationery'),
        ('Toys & Games'),
        ('Automotive'),
        ('Jewelry & Accessories'),
        ('Pets & Supplies'),
        ('Furniture'),
        ('Gifts & Crafts'),
        ('Art & Collectibles'),
        ('Music & Entertainment');
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM category WHERE name IN (
          'Electronics',
          'Clothing & Apparel',
          'Home & Living',
          'Sports & Outdoors',
          'Health & Beauty',
          'Food & Beverages',
          'Books & Stationery',
          'Toys & Games',
          'Automotive',
          'Jewelry & Accessories',
          'Pets & Supplies',
          'Furniture',
          'Gifts & Crafts',
          'Art & Collectibles',
          'Music & Entertainment'
        );
      `);
  }
}
