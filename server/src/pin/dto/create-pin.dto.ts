import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreatePinDto {
  @ApiProperty()
  @IsString()
  title: string

  @ApiProperty()
  @IsString()
  content: string

  @ApiProperty()
  @IsString()
  image: string

  @ApiProperty()
  @IsNumber()
  authorId: number
}
