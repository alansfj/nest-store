import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { IsNotBlank } from 'src/common/decorators/is-not-blank.decorator.class-validator';

export class CreateStoreDto {
  @IsString()
  @IsNotEmpty()
  @IsNotBlank()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsNotBlank()
  description: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  categories: number[];
}
