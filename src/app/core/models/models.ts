interface Token {
  accessToken: string,
  refreshToken: string,
  userLoggedIn: string,
  user: any
}

interface Role {
  roleid: string | number,
  created: string,
  role_name: string,
  appid: string
}

export interface ResponseModel<T> {
  appVersionCode: string,
  responseCode: "00",
  responseData: T[],
  responseMsg: string
}

export interface TokenModel extends ResponseModel<Token>{}
export interface RoleModel extends ResponseModel<Role>{}
