import React, {Component} from 'react'

class ToDo extends Component{
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
        let myList = this.state.arr.map((element, index) => <h2 key={index+element}>{element}</h2>)
        return(
            <div>
                <h1>
                    My to-do list:
                </h1>

                <input onChange={(e) => this.handleOnChange(e)} onKeyPress={(e) => this.handleEnterKey(e)} value={this.state.text}/>

                <button onClick={() => this.handleOnClick()}>
                    Add
                </button>

                {myList}
            </div>
        )
    }
}

export default ToDo