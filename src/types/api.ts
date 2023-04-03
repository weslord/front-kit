export type STATUS = Result<any>['status']

export type Result<T> =
    | {
          status: 'LOADING'
      }
    | {
          status: 'ERROR'
          error?: Error | Response
      }
    | {
          status: 'READY'
          response: T
      }

export type PaginatedContext<T> = {
    total: number
    remaining: number
    next: string
    results: T[]
}

export type PaginatedResult<T> =
    | Result<T[]>
    | {
          status: 'PARTIAL'
          response: PaginatedContext<T>
      }
