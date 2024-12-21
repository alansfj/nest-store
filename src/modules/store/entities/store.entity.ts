import { Exclude } from 'class-transformer';
import { Category } from 'src/modules/category/entities/category.entity';
import { User } from 'src/modules/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Store {
  constructor(partial: Partial<Store>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToMany(() => Category, (category) => category.stores, { eager: true })
  @JoinTable({ name: 'store_category' })
  categories: Category[];
}
