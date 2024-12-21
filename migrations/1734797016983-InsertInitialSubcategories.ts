import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInitialSubcategories1734797016983
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO subcategory (name, "categoryId") VALUES
        -- Electronics
        ('Mobile Phones', (SELECT id FROM category WHERE name = 'Electronics')),
        ('Laptops', (SELECT id FROM category WHERE name = 'Electronics')),
        ('TVs & Monitors', (SELECT id FROM category WHERE name = 'Electronics')),
        ('Cameras', (SELECT id FROM category WHERE name = 'Electronics')),
  
        -- Clothing & Apparel
        ('Men''s Clothing', (SELECT id FROM category WHERE name = 'Clothing & Apparel')),
        ('Women''s Clothing', (SELECT id FROM category WHERE name = 'Clothing & Apparel')),
        ('Shoes', (SELECT id FROM category WHERE name = 'Clothing & Apparel')),
        ('Accessories', (SELECT id FROM category WHERE name = 'Clothing & Apparel')),
  
        -- Home & Living
        ('Kitchen Appliances', (SELECT id FROM category WHERE name = 'Home & Living')),
        ('Bedding', (SELECT id FROM category WHERE name = 'Home & Living')),
        ('Home Decor', (SELECT id FROM category WHERE name = 'Home & Living')),
  
        -- Sports & Outdoors
        ('Fitness Equipment', (SELECT id FROM category WHERE name = 'Sports & Outdoors')),
        ('Camping & Hiking', (SELECT id FROM category WHERE name = 'Sports & Outdoors')),
        ('Team Sports', (SELECT id FROM category WHERE name = 'Sports & Outdoors')),
  
        -- Health & Beauty
        ('Skincare', (SELECT id FROM category WHERE name = 'Health & Beauty')),
        ('Makeup', (SELECT id FROM category WHERE name = 'Health & Beauty')),
        ('Supplements', (SELECT id FROM category WHERE name = 'Health & Beauty')),
  
        -- Food & Beverages
        ('Snacks', (SELECT id FROM category WHERE name = 'Food & Beverages')),
        ('Beverages', (SELECT id FROM category WHERE name = 'Food & Beverages')),
        ('Packaged Foods', (SELECT id FROM category WHERE name = 'Food & Beverages')),
  
        -- Books & Stationery
        ('Fiction', (SELECT id FROM category WHERE name = 'Books & Stationery')),
        ('Non-Fiction', (SELECT id FROM category WHERE name = 'Books & Stationery')),
        ('Office Supplies', (SELECT id FROM category WHERE name = 'Books & Stationery')),
  
        -- Toys & Games
        ('Action Figures', (SELECT id FROM category WHERE name = 'Toys & Games')),
        ('Board Games', (SELECT id FROM category WHERE name = 'Toys & Games')),
        ('Puzzles', (SELECT id FROM category WHERE name = 'Toys & Games')),
  
        -- Automotive
        ('Car Accessories', (SELECT id FROM category WHERE name = 'Automotive')),
        ('Motorcycle Parts', (SELECT id FROM category WHERE name = 'Automotive')),
        ('Tires', (SELECT id FROM category WHERE name = 'Automotive')),
  
        -- Jewelry & Accessories
        ('Rings', (SELECT id FROM category WHERE name = 'Jewelry & Accessories')),
        ('Necklaces', (SELECT id FROM category WHERE name = 'Jewelry & Accessories')),
        ('Earrings', (SELECT id FROM category WHERE name = 'Jewelry & Accessories')),
  
        -- Pets & Supplies
        ('Pet Food', (SELECT id FROM category WHERE name = 'Pets & Supplies')),
        ('Pet Toys', (SELECT id FROM category WHERE name = 'Pets & Supplies')),
        ('Pet Care', (SELECT id FROM category WHERE name = 'Pets & Supplies')),
  
        -- Furniture
        ('Living Room Furniture', (SELECT id FROM category WHERE name = 'Furniture')),
        ('Bedroom Furniture', (SELECT id FROM category WHERE name = 'Furniture')),
        ('Outdoor Furniture', (SELECT id FROM category WHERE name = 'Furniture')),
  
        -- Gifts & Crafts
        ('Gift Baskets', (SELECT id FROM category WHERE name = 'Gifts & Crafts')),
        ('Handmade Crafts', (SELECT id FROM category WHERE name = 'Gifts & Crafts')),
        ('Seasonal Gifts', (SELECT id FROM category WHERE name = 'Gifts & Crafts')),
  
        -- Art & Collectibles
        ('Paintings', (SELECT id FROM category WHERE name = 'Art & Collectibles')),
        ('Sculptures', (SELECT id FROM category WHERE name = 'Art & Collectibles')),
        ('Antiques', (SELECT id FROM category WHERE name = 'Art & Collectibles')),
  
        -- Music & Entertainment
        ('Musical Instruments', (SELECT id FROM category WHERE name = 'Music & Entertainment')),
        ('Vinyl Records', (SELECT id FROM category WHERE name = 'Music & Entertainment')),
        ('Movies', (SELECT id FROM category WHERE name = 'Music & Entertainment'));
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM subcategory WHERE "categoryId" IN (
          SELECT id FROM category WHERE name IN (
            'Electronics', 'Clothing & Apparel', 'Home & Living',
            'Sports & Outdoors', 'Health & Beauty', 'Food & Beverages',
            'Books & Stationery', 'Toys & Games', 'Automotive',
            'Jewelry & Accessories', 'Pets & Supplies', 'Furniture',
            'Gifts & Crafts', 'Art & Collectibles', 'Music & Entertainment'
          )
        );
      `);
  }
}
