import React, {Component} from 'react'

import List from './List'

class NewTask extends Component{
    constructor() {
        super()

        this.state ={
            arr: [],
            text: ''
        }
    }

    handleOnChange(val) {
        this.setState({
            text: val.target.value
        })
    }

    handleOnClick() {
        let newArr = this.state.arr
        newArr.push(this.state.text)
        this.setState({
            arr: newArr,
            text: ''
        })
    }

    handleEnterKey(val) {
        if(val.key === 'Enter') {
            this.handleOnClick()
        }
    }

    render() {
        return(
            <div>
                <h1>
                    My to-do list:
                </h1>

                <input onChange={(e) => this.handleOnChange(e)} onKeyPress={(e) => this.handleEnterKey(e)} value={this.state.text}/>

                <button onClick={() => this.handleOnClick()}>
                    Add
                </button>

                <List array={this.state.arr}/>
            </div>
        )
    }
}

export default NewTask