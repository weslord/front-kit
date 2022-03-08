export type STATUS = Result<any>['status']

export type Result<T> =
    | {
          status: 'LOADING'
      }
    | {
          status: 'ERROR'
          error?: Error
      }
    | {
          status: 'READY'
          response: T
      }

export interface UserDetails {
    id: number
    email: string
}
