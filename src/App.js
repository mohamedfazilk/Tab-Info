import React, {useState, useEffect} from "react";
import {FaAngleDoubleRight} from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const[loading, setLoading] = useState(true)
  const [myInfo, setMyInfo] = useState([])
  const [value, setValue] = useState(0)

  const fetchInfo = async ()=>{
    const response = await fetch(url);
    const myInfo = await response.json();
    setMyInfo(myInfo);
    setLoading(false)
    console.log(myInfo);

  }

  useEffect(()=>{
    fetchInfo();
   
  },[])

  if(loading){
    return <section className='section loading'>
      <h1>Loading...</h1></section>
  }


const {order,title,dates,duties,company} = myInfo[value]


  return <section>
    <div className="title">
      <h2>Experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      {/* btn-container
      job-info */}
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-date'>{dates}</p>
        {duties.map((duty,index)=>{
          return( <div key={index} className="job-desc">
           <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>

           <p>{duty}</p>
          </div>
          )
        })}
      </article>
    </div>
  </section>
}

export default App;
