import { useState } from 'react'

const Button = (props) => {

		return (
        <div>
        <button onClick = {props.onClick}>{props.text}</button>
        </div>
    )
}

const VotedAnecdote =(props)=>{
    const maxi = Math.max( ...props.arr)
    const indexi = props.arr.indexOf(maxi)
		return (
			<div>
			<h2>Anecdote with most votes</h2>
			<span> {props.arranec[indexi]} has {maxi} votes.</span>
			</div>
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
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const tvotes = [0,0,0,0,0,0,0]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(tvotes)

  const handleVotes = () => {
        const copy = [ ...votes]
	    console.log(copy)

        copy[selected]+=1
	  console.log(copy)
        setVotes(copy)
    }

  return (
    <div>
	  <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
	  <p>has {votes[selected]} votes</p>
      <Button onClick = {()=>setSelected(Math.floor(Math.random()*7))} text = 'next anecdote' />
      <Button onClick = {handleVotes} text = 'vote' />

{/*Conditional rendering of highest votes*/}
      {Math.max( ...votes)>0
      ? <VotedAnecdote arr = {[ ...votes]} arranec = {[ ...anecdotes]} />
      :''
     }

  { console.log(votes)}
      </div>
  )
    
}

export default App
