import React, {Component} from 'react'

class Login extends Component{
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleOnChange(e, change) {
        this.setState({
            [change]: e.target.value,
        })
    }

    handleOnClick(){
        alert(`Username: ${this.state.username}\rPassword: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.handleOnChange(e,'username')}/>
                <input onChange={(e) => this.handleOnChange(e,'password')}/>
                <button onClick={() => this.handleOnClick()}>
                    Login
                </button>
            </div>
        )
    }
}

export default Login