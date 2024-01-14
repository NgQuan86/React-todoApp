import React from "react";
import './listTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';


class ListTodo extends React.Component {

    // ******* STATE **********
    state = {
        listTodos: [
            { id: 'todo1', title: 'doing homework' },
            { id: 'todo2', title: 'making video' },
            { id: 'todo3', title: 'fixing bugs' }
        ],

        editTodo: {}
    }

    // ********* FUNCTION ************
    // -- ADD --
    AddTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success('Success!!!')
    }

    //  --- EDIT & SAVE ---
    handleEdit = (todo) => { // add item duoi dang edit tu handleEdit vao state.editTodo
        let { editTodo,listTodos } = this.state;
        
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodoCopy = [...listTodos] // copy array listTodo vao listTodoCopy

            let ObjIndex = listTodoCopy.findIndex((item => item.id === todo.id)); // create let objIndex chua edit.id vua truyen vao

            listTodoCopy[ObjIndex].title = editTodo.title;

            this.setState({
                listTodos : listTodoCopy,
                editTodo: {} // sau khi save set gia tri rong vao editTodo de tro ve button Edit thay vi Save
            })
            return

        }

         //edit
            this.setState({
                editTodo: todo
            })
        
            
    }
    handleOnChangeEditTodo = (event) => { // khong dc trc tiep modify state.editTodo
        let editTodoCopy = { ...this.state.editTodo }; // create 1 var moi chua copy cua state.editTodo
        editTodoCopy.title = event.target.value; // dung var moi de chua value vua edit tu function handleChangeEditTodo thong qua event ligne 83
        this.setState({
            editTodo: editTodoCopy // gan editTodoCopy vao state.ediTodo
        })
    }
    // --DELETE--
    handleDelete = (delet) => {
        // console.log('check delete ', todo);
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== delet.id)
        this.setState({
            listTodos: currentTodo
        })
        toast.dark('Deleted')
    }


    //************ RENDER ***********    
    render() {
        let { listTodos, editTodo } = this.state; // de co the goi var ma khong can thong qua this.state.(...) 
        let isEmptyObj = Object.keys(editTodo).length === 0; // tao let isEmptyObj = true or false khi object editTodo rong hoac co phan tu
        console.log('check isEmptyObj', isEmptyObj);
        
        return (
            <div className="list-todo-container">

                <AddTodo
                    AddTodo={this.AddTodo}
                />

                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 && listTodos.map((item, index) => { // map ra 1 array title hien thi ra man hinh 
                        return (

                            <div className="todo-child" key={item.id} > {/* luon tao ra 1 key=id */}


                                {/***** EDIT & SAVE *****/}
                                {isEmptyObj === true ?
                                    <span > {index + 1} - {item.title} </span>
                                    :
                                    <>
                                        {editTodo.id === item.id ? //la cau dieu kien de chi lay dung id da chon
                                            <span >
                                                {index + 1} - <input value={editTodo.title}
                                                    onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                            </span>
                                            :
                                            <span > {index + 1} - {item.title} </span> // neu khong phai id duoc chon thi hien lai cac phan tu khac
                                        }
                                    </>
                                }

                                <button className="edit"
                                    onClick={() => this.handleEdit(item)}> {/* click edit gui data item -> function handleEdit ligne 30*/}
                                    {isEmptyObj === false && editTodo.id === item.id ?'Save' : 'Edit'}
                                    {/* {isEmptyObj || editTodo.id !== item.id ? 'Edit':'Save' } */}
                                    
                                </button>


                                {/***** EDIT & SAVE *****/}
                                <button className="delete"
                                    onClick={() => this.handleDelete(item)}>
                                    delete
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ListTodo;