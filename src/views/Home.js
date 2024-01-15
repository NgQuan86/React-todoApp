import React from "react";

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
export default Home;