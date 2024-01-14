import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {

    //--STATE--
    state = {
        title: ''
    }

    //--FUNCTION--
    handleOnchange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        if(!this.state.title){
            toast.error('Missing info');
            return;
        }
        let todo = {
            id: Math.floor(Math.random() *1000),
            title: this.state.title
        }

        this.props.AddTodo(todo) // goi nguoc len parent ListTodo thong qua props truyen xuong

        this.setState({
            title: ''
        })
    }

    //-- RENDER --
    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input value={title} type="text"
                    onChange={(event) => this.handleOnchange(event)}
                />
                <button className="add" type="button"
                    onClick={() => this.handleAddTodo()}>
                    Add
                </button>
            </div>
        )
    }

}

export default AddTodo;