import keyieRequest from '..'

export function postHomeLogin() {
  return keyieRequest.postRequest('/login', {
    data: [{ username: 'yzz', password: '123456' }]
  })
}
