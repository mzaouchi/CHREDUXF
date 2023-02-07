import { useState } from "react"
import { useDispatch } from "react-redux"
import { handleAdd } from "../Redux/Actions"

const AddTask=()=>{
    const [textP,setTextP] = useState('')
    const dispatch = useDispatch()
    return(
        <div>
            <input type='text' onChange={(e)=>setTextP(e.target.value)}/>
            <button onClick={()=>dispatch(handleAdd({title : textP,isDone:false,id:Math.random()}))}>Add</button>
        </div>
    )
}

export default AddTask