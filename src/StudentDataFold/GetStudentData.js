import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
function GetStudentData() {
  const [stdData, setStdData] = useState([]);
  useEffect(() => {
    axios("http://localhost:3002/student").then((res) => setStdData(res.data));
  },[]);
 console.log(stdData);
  return (
    <div>
      <h3> Titles</h3>
      {stdData.map((ele) => {
        return (
          <p>
            {ele.std_id}) {ele.name_} {ele.job} {ele.place} {ele.salary}
          </p>
        );
      })}
    </div>
  );
}

export default GetStudentData;
