const UserGreeting = (props) => {
        return (
            props.isLoggedIn ?
            <h2>Hello {props.userName}</h2> :
            <h2>Please, loggin to continue</h2>
        )
}
export default UserGreeting