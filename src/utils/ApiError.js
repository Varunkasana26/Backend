class ApiError extends Error {
    constructor(
        statuscode,
        message = "Something went wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statuscode
        this.data = null
        this.message = message
        this.success = false
        this.error = error

        if(statch){
            this.stach = statck
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}