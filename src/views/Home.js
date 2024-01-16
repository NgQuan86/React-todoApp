import React from "react";
import Color from "./HOC/color";
import logo from '../assets/images/pool-bar.jpg';

class Home extends React.Component {
    render() {
        console.log('check props', this.props)
        return (
            <>
                <div>
                    Hello Wolrd
                </div>
                <div>
                    <img src={logo} style={{width:'40vmin'}}/>
                </div>
            </>
        )
    }
}
export default Color(Home);