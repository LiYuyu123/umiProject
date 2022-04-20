export const getCookie = (name) => {
    let cname = name + '='
    let arr = document.cookie.split(';')
    for( let i = 0; i< arr.length ;i++) {
      let cookie = arr[i].trim()
      if( cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length)
      }
    }
    return ''
}
