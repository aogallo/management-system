export interface RoleType {
  id: string
  name: string
}

export interface CustomerType {
  id: string
  name: string
  age: number
  email: string
  phone: string
}

export interface UserType {
  id: string
  username: string
  name: string
  password: string
  email: string
  roles: RoleType[]
}

export interface ErrorType {
  code: string
  expected: string
  received: string
  path: Array<string>
  message: string
}

export interface ApiResponseType {
  success: boolean
  data?: Array<UserType>
  error?: string | Array<ErrorType>
}

export interface ActionsType {
  actionName: string
  onClick: () => void
  style: string
  icon: JSX.Element | null
}

export interface ResponseAPI {
  success: boolean
  data?: CustomerType | CustomerType[] | UserType | UserType[] | UserLoggedType
  error?: ErrorType[] | string
}

export interface LoginType {
  username: string
  password: string
}

export interface UserLoggedType {
  token: string
  username: string
  name: string
}

// CONTEXT
type AppContextType = {
  user: UserLoggedType
  isLogged: boolean
}
type GlobalContextType = {
  user: UserLoggedType
  isLogged: boolean
  addAuth: (user: AppContextType) => void
  logOut: () => void
}
