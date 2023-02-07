import { HANDLEADD, HANDLEDELETE, HANDLEDONE } from "./ActionTypes"

const initialState={
    tasks : [
        {title : "Mamino",isDone:false,id : Math.random()},
        {title : "Raslen",isDone:false,id : Math.random()},
        {title : "Aziz",isDone:false,id : Math.random()}
    ]
}

const Reducer=(state=initialState,action)=>{
    switch (action.type) {
        case HANDLEDONE : return {...state,tasks : state.tasks.map(el=> el.id == action.payload ? {...el,isDone : !el.isDone} : el)}
        case HANDLEADD : return {...state,tasks : [...state.tasks,action.payload]}
        case HANDLEDELETE : return {...state,tasks : state.tasks.filter(el=>el.id != action.payload)}
        default: return state
    }
}

export default Reducer