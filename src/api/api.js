import {
  request
} from '../util/request'

export function getList(bbb) {
  return request({
    method: 'post',
    url: '/v1/dict/getDicts.do',
    params: bbb

  })
}
// export default {
//   setLocalStorage(name, content) {
//     if (!name) return;
//     if (typeof content !== 'string') {
//       content = JSON.stringify(content)
//     }
//     window.localStorage.setItem(name, content)

//   }
// }