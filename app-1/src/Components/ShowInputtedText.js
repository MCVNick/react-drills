import React, {Component} from 'react'

class ShowInputtedText extends Component{
    constructor() {
        super()

        this.state = {
            text: ''
        }
    }

    handleOnChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    render(){
        return (
            <div>
                <input onChange={(e) => this.handleOnChange(e)}/>
                <h1>
                    {this.state.text}
                </h1>
            </div>
        )
    }
}

export default ShowInputtedText