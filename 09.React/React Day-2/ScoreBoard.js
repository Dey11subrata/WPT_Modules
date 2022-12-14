import { useState } from "react";

export function ScoreBoard(){
    // using state in functions through hooks concept
    const [score,setScore]=useState(0);
    const increaseScore=()=>{
        setScore(score+1);
    }

    const decreaseScore=()=>{
        setScore(score-1);
    }

    return(
        <div>
            <h2>{score}</h2>
            <input type='button' value='+' onClick={increaseScore}></input>
            <input type='button' value='-' onClick={decreaseScore}></input>
       
    </div>
    )
}




// import { Component } from "react";

// export class ScoreBoard extends Component{
//     // constructor to use state feature

//     constructor(){
//         super(); // in java this call is made implecitely due to presence of compiler but in js this need to be done explicitely by programmer.

//         this.state={score:0}
//     }

//     increaseScore=()=>{
//         // inc value of score
//         // use setState method - predefined method
//         this.setState({score:this.state.score+1});
//     }

//     decereseScore=()=>{
//         this.setState({score:this.state.score-1});
//     }

//     render(){
//         return (
//     <div>
//         <h2>{this.state.score}</h2>
//         <input type='button' value='+' onClick={this.increaseScore}></input>
//         <input type='button' value='-' onClick={this.decereseScore}></input>
//         {/* in react whenever a function reference is provided inside tags react will call it automatically no need to give it a call */}
//     </div>

//         );
//     }
// }