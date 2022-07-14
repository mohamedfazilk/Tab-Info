import React, {useState, useEffect} from "react";

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


  return <h2>my</h2>
}

export default App;
