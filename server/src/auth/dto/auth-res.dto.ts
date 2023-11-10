import { ApiProperty } from '@nestjs/swagger'

export class SignInResDto {
  @ApiProperty()
  accessToken: string
}

export class SignUpResDto {
  @ApiProperty()
  email: string

  @ApiProperty()
  fullName: string

  @ApiProperty()
  age: number
}
