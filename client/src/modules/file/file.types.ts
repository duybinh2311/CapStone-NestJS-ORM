export interface FileUploadDto {
  file: File
}

export interface FileUploadResDto {
  url: string
  path: string
  type: string
  size: number
}
