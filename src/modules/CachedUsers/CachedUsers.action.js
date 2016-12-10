export const OPEN_USER_LIST = 'OPEN_USER_LIST'
export const CLOSE_USER_LIST = 'CLOSE_USER_LIST'
export const SELECT_USER_LOGIN = 'SELECT_USER_LOGIN'

export function selectUserToLogin (id) {
  return {
    type: SELECT_USER_LOGIN,
    id
  }
}

export function openUserList () {
  return {
    type: OPEN_USER_LIST
  }
}

export function closeUserList () {
  return {
    type: CLOSE_USER_LIST
  }
}
