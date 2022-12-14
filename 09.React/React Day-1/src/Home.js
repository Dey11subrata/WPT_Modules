import { Component } from "react";
export class Home extends Component{

    render(){
        return (
            <div>
                <h1>{this.props.name} Mumbai me aapka swagat hai</h1>
                <p>Aaoo kabhi heveli pe{this.props.number}...</p>
            </div>
            // <div>
            //     <h1>Mumbai me aapka swagat hai</h1>
            //     <p>Aaoo kabhi heveli pe...</p>
            // </div>
        );
    }
}
