const UserGreeting = (props) => {
        return (
            props.isLoggedIn ?
            <h2 className="welcome-msg">Hello {props.userName}</h2> :
            <h2 className="login-prompt">Please, loggin to continue</h2>
        )
}
export default UserGreeting