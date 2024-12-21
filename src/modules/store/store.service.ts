import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dtos/create-store.dto';
import { User } from '../user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { Repository } from 'typeorm';
import { CategoryService } from '../category/category.service';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store) private storeRepository: Repository<Store>,
    private categoryService: CategoryService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createStore(createStoreDto: CreateStoreDto, user: Partial<User>) {
    const { name, description, categories } = createStoreDto;

    const validCategories =
      await this.categoryService.validateCategories(categories);

    const aUser = this.userRepository.create(user);

    const store = this.storeRepository.create({
      name,
      description,
      user: aUser,
      categories: validCategories,
    });

    return await this.storeRepository.save(store);
  }
}
