export class StringUtils {
  /* Regex */
  static regex = {
    number: /^[0-9]+$/,
    letter: /^[a-z A-Z]+$/,
    special: /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/,
    email:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    extImage: /\.(jpeg|jpg|png|gif)$/i,
  }

  /* Nguyễn Duy Bình => nguyen-duy-binh */
  static toSlug(string: string): string {
    if (string === null || string === undefined) return string
    let slug = string.toLowerCase()
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
    slug = slug.replace(/đ/gi, 'd')
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '')
    slug = slug.replace(/ /gi, '-')
    slug = slug.replace(/\-\-\-\-\-/gi, '-')
    slug = slug.replace(/\-\-\-\-/gi, '-')
    slug = slug.replace(/\-\-\-/gi, '-')
    slug = slug.replace(/\-\-/gi, '-')
    slug = '@' + slug + '@'
    slug = slug.replace(/\@\-|\-\@|\@/gi, '')
    return slug
  }

  /* Nguyễn Duy Bình => nguyen duy binh */
  static removeAscent(string: string): string {
    if (string === null || string === undefined) return string
    string = string.toLowerCase()
    string = string.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
    string = string.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
    string = string.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
    string = string.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
    string = string.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
    string = string.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
    string = string.replace(/đ/g, 'd')
    return string
  }
}
