import React from 'react'
import { Component, useEffect, useState } from 'react'
import ColorChange from '../ColorChange'


// class Quiz extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       vikas: 'Vikas',
//       rahul: 'Rahul'
//     }
//     console.log('I am constructor')
//   }
//   componentDidMount() {
//     console.log("component mounted")
//   }
//   componentDidUpdate(){
//     console.log("component Updated")
//   }
//   componentWillUnmount(){
//     console.log("component unmounting")
//   }
//   render() {
//     console.log("I am render")
//     return (
//       <div>
//         <button onClick={() => this.setState({ vikas: "Shivam" })}>CLICK </button>
//         {this.state.vikas}
//         <ColorChange />
//       </div>
//     )
//   }
// }



const Quiz = () => {
  const [state, setState] = useState("vikas");
  console.log("hii I am iside function")
  useEffect(() => {
    console.log("hii I am inside useEffect")
  }, [state])
  return (

    <div>
      {state}
      <button onClick={() => setState("Rahul")}>CLICK</button>
      <ColorChange />
    </div>
  )
}

export default Quiz







