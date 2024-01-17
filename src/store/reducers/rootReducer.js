
const initState = {
    users: [
        {id: 1, name: 'Quan'},
        {id: 2, name: 'Nguyen'}
    ]
}
const rootReducer = (state = initState, action) => { //state va action la cua Redux khong phai react

    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };

        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random - ${id}` }

            return {
                ...state, users: [...state.users, user]
            }

        default:
            return state;
    }

   //tao ra 1 thang reducer de nhan, xu ly, va tra state ra
    


}
export default rootReducer;