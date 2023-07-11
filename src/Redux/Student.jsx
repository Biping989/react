import React,{useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux'

const Student = () => {
    const dispatch=useDispatch()
    const name=useSelector(store=>store.student)
    const[stdname,setName]=useState('')

    const submit=()=>(
        dispatch({type:'change_name',payload:stdname})
    )
  return (
    <>
    <p className='h2 text-success text-center '>
        The name of the student is{name.studentName}
    </p>
    <div className='offset-md-3 col-md-4 my-3'>
     <input type="text" name='std' id='std' className='form control' onChange={(e)=>setName(e.target.value)}
     />
     <input type="submit" value="Send" className='btn btn-primary' onClick={submit} />

    </div>
    </>
  )
}
export default Student 