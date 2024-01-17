import React from "react";
import Color from "./HOC/color";
import logo from '../assets/images/pool-bar.jpg';
import { connect } from "react-redux";

class Home extends React.Component {

    handleDeleteUser = (user) => {
        console.log('check handledelete', user)
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }


    render() {
        console.log('check props redux:', this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello Wolrd
                </div>
                <div>
                    <img alt="night" src={logo} style={{width:'40vmin'}}/>
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) =>{
                            return(
                                <div key={item.id}>
                                    {index + 1} - {item.name} <span onClick={()=>this.handleDeleteUser(item)} >X</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}
const mapStateToProps =(state) =>{ // tao 1 ham ket noi giua redux va react thong qua state cua redux va props cua react(Home.js)

    return{     //return ve objet de khi co nhieu objet co the gop lai
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));