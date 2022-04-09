import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

function UiniqStudentData() {
  const [myId, setMyId] = useState(0)
  const [stdId,setStdId] =useState(0)
  const [inqData, setInqData] = useState({})
  useEffect(() => {
    axios(`http://localhost:3002/student/${stdId}`).then(
      res=>setInqData(res.data)
    )
    },[stdId])
    function handleCahnge(e){
    setStdId(e.target.value)
    }
  //   function handleClick(){
  //  var inpval=document.getElementById("inputVal")
  //  setStdId(inpval.value)
  //   }
  return (
    <div>
      <h2>student id: {stdId}</h2>
     <p>Data : {inqData.title}</p>
     <p>     {inqData.std_id}) {inqData.name_} {inqData.job} {inqData.place} {inqData.salary}</p>
    <form>
      <input type='text' id='inputVal' onChange={handleCahnge} value={stdId}/>
    </form>
     {/* <button onClick={handleClick}>click!!</button> */}
    </div>
  )
}

export default UiniqStudentData