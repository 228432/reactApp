

const domeReducer=(prevState={ num:1 },action:any)=>{
            const state={...prevState}
            
        switch(action.type){
            case '1':
                state.num=action.data
               return state
            case '2' :
                state.num=action.data
                return state
            default :
                return state 
        }
}

export default domeReducer