import { useState } from 'react'

const Button = ({handleClick,text})=>{
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote , setVote]= useState(Array(8).fill(0))

  const handleButtonClick =()=>{
    const random = Math.floor(Math.random()*8);
    setSelected(random)   
  }
  const handleVoteClick =()=>{
    const copy = [...vote]
     copy[selected]+=1
     setVote(copy)
  }

  const major = Math.max(...vote)
  const index = vote.indexOf(major)


  return (
    <div>
      <h1>
        Anectodes of the day
      </h1>
    
      {anecdotes[selected]}
      <br/>
      has: {vote[selected]} votes
      <br/>
      <Button handleClick={handleVoteClick} text="vote"/>
      <Button handleClick={handleButtonClick} text="generate random anecdote"/>
      <h1>Anectodes with most votes</h1>
      {anecdotes[index]}
      <br/>
      has: {vote[index]} votes

    </div>
  )
}

export default App