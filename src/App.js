import React, {useState, useEffect } from 'react';

function  App() {

  const [repos, setRepos] = useState([{}]);

  useEffect (async() => {

    const response = await fetch('https://api.github.com/users/abdulazeem1742/repos')
    const data = await response.json();
    console.log(data);
    setRepos(data)

  }, [])

  return (
   <div>
     <ul>
       {repos.map((repoObj) =>{
         return(<li>{repoObj.name}</li>)
       })} 
     </ul>
   </div>
  );
  }
  export default App;