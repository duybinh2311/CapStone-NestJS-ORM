export interface UpdateUserDto {
  email?: string
  fullName?: string
  age?: number
  avatar?: string
}

export interface ProfileUserResDto extends UpdateUserDto {
  id: number
}
