import { Body, Controller, Post, Req } from '@nestjs/common';
import { CreateStoreDto } from './dtos/create-store.dto';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  createStore(@Body() createStoreDto: CreateStoreDto, @Req() req) {
    return this.storeService.createStore(createStoreDto, req.user);
  }
}
