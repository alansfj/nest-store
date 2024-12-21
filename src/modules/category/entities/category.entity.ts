import { Exclude } from 'class-transformer';
import { Store } from 'src/modules/store/entities/store.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Category {
  constructor(partial: Partial<Category>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Store, (store) => store.categories)
  stores: Store[];
}
