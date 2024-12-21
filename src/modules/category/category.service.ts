import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async validateCategories(categories: number[]): Promise<Category[]> {
    const categoriesFound = await this.categoryRepository.findBy({
      id: In(categories),
    });

    if (!categoriesFound.length)
      throw new BadRequestException('At least one valid category is required');

    if (categoriesFound.length !== categories.length) {
      const invalidCategories = categories.filter(
        (categoryId) =>
          !categoriesFound.some((category) => category.id === categoryId),
      );
      throw new BadRequestException(
        `Invalid categories: ${invalidCategories.join(', ')}`,
      );
    }

    return categoriesFound;
  }
}
