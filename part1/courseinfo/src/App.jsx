const Header = (props) => {
  return(
    <div>
      <h1> {props.title} </h1>
    </div>
  )
}

const Part = ({name,number}) => {
  console.log(name,number)
  return(
  <div>
    <p> {name} {number} </p>
  </div>
  )
}

const Content = (props) => {
 console.log(props)
  return(
    <div>
      
        <Part name={props.name1} number={props.number1}/>
      
      
        <Part name={props.name2} number={props.number2}/>
      
      
        <Part name={props.name3} number={props.number3}/>
      
    </div>
  )
}

const Total = (props) =>{
  console.log(props)
  return(
    <div>
      <p>Number of exercises {props.total} </p>
    </div>
  )
}

const App = () => {
  const course = {
  name :"Half Stack application development",
  parts : [
  {
    name: "Fundamentals of React",
    exercises:10
  },
  {
    name: "Using props to pass data",
    exercises:7
  },
  {
    name: "State of ca component",
    exercises:14
  }
  ]
}
  return (
    <div>
      <Header title={course.name}/>

      <Content name1={course.parts[0].name} number1={course.parts[0].exercises} 
            name2={course.parts[1].name} number2={course.parts[1].exercises} 
            name3={course.parts[2].name} number3={course.parts[2].exercises}/>
     
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>     
    </div>
  )
}

class Person {
  constructor(name,age){
    this.name=name
    this.age=age
  }
  greet(){
    console.log("Hello, my name is " + this.name)
  }
}

const adam = new Person ("Adam Ondra",29)
adam.greet()

const janja = new Person("Jajna Garnbret",23)
janja.greet()

export default App