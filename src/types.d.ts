export interface RoleType {
  id: string
  name: string
}

export interface CustomerType {
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