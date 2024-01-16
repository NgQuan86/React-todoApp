import React from "react";
import withRouter from "../HOC/withRouter";

//need router react version 5 to activer withRouter


class DetailUser extends React.Component {
    state = {
       
    }
    
    render() {
          
        return (
            <div>
                Detail User with id : {[this.props.params.id]}
                
            </div>
        )
    }
}
export default withRouter(DetailUser);