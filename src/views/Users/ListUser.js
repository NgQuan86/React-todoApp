import axios from "axios";
import React from "react";
import './listUsers.scss';

class ListUser extends React.Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=1')
        // .then(response => {
        //     console.log('check response:', response.data.data);
        // }) khong can async-await

        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : [] // xet condition neu ton tai res.data.data thi set vao khong thi rong 
        })

    }

    render() {
        let { listUsers } = this.state
        return (
            <div className="list-user-container">
                <div className="title" >Fetch all list users</div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                        return (
                            <div className="child" key={item.id}>
                                {index+1} - {item.first_name} - {item.last_name}
                            </div>
                        )
                    })
                    }
                </div>

            </div>
        )
    }
}
export default ListUser;