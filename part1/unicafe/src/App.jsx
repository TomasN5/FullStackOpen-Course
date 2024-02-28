import { useState } from "react"


const Statistics = (props) =>{
  if (props.all == 0){
    return(
    <div>
      No feedback given
    </div>
   )
  }
  const positive= (props.good*100)/props.all;
  return (
  
    
    <table>
      <StatisticsLine text="good:" value={props.good} />
      <StatisticsLine text="neutral:" value={props.neutral} />
      <StatisticsLine text="bad:" value={props.bad} />
      <StatisticsLine text="all:" value={props.all} />
      <StatisticsLine text="average:" value={props.average} />
      <StatisticsLine text="positive:" value={positive} />
    </table>
    
   
  )
  
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td> 
    </tr>
      
    
  )
}

const Button=({handleCLick,text} )=>(
  <button onClick={handleCLick}>
    {text}
  </button>
)

const App = () => {

  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)
  

  const handleGoodClick=()=>{ 
    const updatedGood = good+1
    setGood(updatedGood)
    
  }

  const handleNeutralClick=()=>{ 
      const updatedNeutral = neutral+1
      setNeutral(updatedNeutral)

    }

    const handleBadClick=()=>{
      const updatedBad = bad+1
      setBad(updatedBad)
    }

    const all = good + neutral + bad
    const average= (good+neutral*0+bad*-1)/all
  
  return(
    <div>
      <h1>Give feedback</h1>

      <Button handleCLick={handleGoodClick} text="good"/> 
      <Button handleCLick={handleNeutralClick} text="neutral"/>
      <Button handleCLick={handleBadClick} text="bad"/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average}  />          
      
    </div>
  )
}

export default App