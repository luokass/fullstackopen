import { useState } from 'react'

const Button = (props) => {
	return (
		<div>
		<button onClick = {props.onClick}>{props.text}</button>
		</div>
	)
}

const StatsLine = (props) => {
	return (
		
		<tr>
		<td><div>{props.text}</div></td>
		<td><div>{props.value}</div></td>
		</tr>
		
	)
}

const Statistics = (props) => {
	const all= props.b+props.g+props.n
	if (all===0) {
		return (
			<div>
            <h2>Statistics</h2>
			<p>No feedback given</p>
			</div>
		)
	}

    return (
        <div>
       <h2>Statistics</h2>
        <table>
        <tbody>
 
        <StatsLine text = 'good' value={props.g} /> 
        <StatsLine text = 'bad' value={props.b} />
        <StatsLine text = 'neutral' value={props.n} />
		<StatsLine text = 'all' value={all} />
		<StatsLine text = 'average' value={(props.g-props.b)/all} />
		<StatsLine text = 'positive' value={100*props.g/all} />
        </tbody>
        </table>
        </div>
    )
}

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

    return (
        <div>
        <h2>give feedback</h2>

        <Button onClick= {() => setGood(good+1)} text ='good' />
        <Button onClick= {() => setBad(bad+1)} text = 'bad' />
        <Button onClick= {() => setNeutral(neutral+1)} text = 'neutral' />
		<Statistics g={good} b={bad} n={neutral} />
        </div>

    )
}

export default App
