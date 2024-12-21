import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { CategoryModule } from '../category/category.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Store]), CategoryModule, UserModule],
  controllers: [StoreController],
  providers: [StoreService],
  exports: [TypeOrmModule],
})
export class StoreModule {}
