import { Exclude } from 'class-transformer';
import { Category } from 'src/modules/category/entities/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Subcategory {
  constructor(partial: Partial<Subcategory>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Category)
  category: Category;
}
