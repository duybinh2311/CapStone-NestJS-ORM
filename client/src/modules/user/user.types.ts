export interface UpdateUserDto {
  email?: string
  fullName?: string
  age?: number
  avatar?: string
  userName?: string
  about?: string
}

export interface ProfileUserResDto extends UpdateUserDto {
  id: number
}
