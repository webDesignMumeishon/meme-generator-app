export interface ServiceInit{
    status: "init"
}

export interface ServiceLoading{
    status: "loading"
}

export interface ServiceLoaded<T>{
    status: "loaded"
    payload: T
}

export interface ServiceError{
    status: "error"
    error: Error;
}


//this is a union type
export type Service<T> = 
| ServiceInit
| ServiceLoading
| ServiceLoaded<T>
| ServiceError

