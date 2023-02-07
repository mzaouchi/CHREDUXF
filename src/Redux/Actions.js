import { HANDLEADD, HANDLEDELETE, HANDLEDONE } from "./ActionTypes"

export const handleAdd=(payload)=>{
    return(
        {
            type : HANDLEADD,
            payload
        }
    )
}

export const handleDelete=(payload)=>{
    return(
        {
            type : HANDLEDELETE,
            payload
        }
    )
}

export const handleDone=(payload)=>{
    return(
        {
            type : HANDLEDONE,
            payload
        }
    )
}