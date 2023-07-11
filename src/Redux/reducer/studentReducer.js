const initialData={
    studentName:'Biplav'
}

const studentReducer=(state=initialData,action)=>{
    switch(action.type){
        case 'change_name':
            return{
                ...state,
                studentName:action.payload
            }
        default:
            return state
    }

}

export default studentReducer