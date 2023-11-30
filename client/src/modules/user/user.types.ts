export interface ProfileUserDto {
  email?: string
  fullName?: string
  age?: number
  avatar?: string
}

export interface ProfileUserResDto extends ProfileUserDto {
  id: number
}
