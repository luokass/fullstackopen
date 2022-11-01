const Header = (props) => {
    console.log(props)
    console.log("Header")
    return (
    <div>
      <h1>{props.course}</h1>
    </div>
    )
}

const Parts = (props) => {
    console.log(props)
    console.log("Parts")
    return (
        <div>
      <p>
        {props.part_name} {props.exercises_num}
      </p>
 
        </div>
    )
}
const Content = (props) => {
    console.log(props)
    console.log("Content")
    return (
    <div>
      <Parts part_name = {props.parts[0].name} exercises_num = {props.parts[0].exercises} />
      <Parts part_name = {props.parts[1].name} exercises_num = {props.parts[1].exercises} />
      <Parts part_name = {props.parts[2].name} exercises_num = {props.parts[2].exercises} />
 
    </div> 
    )
}

const Total =(props) => {
    console.log(props)
    console.log("Total")

    return (
    <div>

    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
    )
}


const App = () => {

const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
    return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
    )
}

export default App
