import React from "react";
import Color from "./HOC/color";

class Home extends React.Component {
    render(){
        console.log('check props', this.props)
        return(
            <div>
                Hello Wolrd 
            </div>
        )
    }
}
export default Color(Home);