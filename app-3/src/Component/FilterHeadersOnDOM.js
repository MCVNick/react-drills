import React, {Component} from 'react'

import HeaderOnDOM from './HeadersOnDOM'

class FilterHeadersOnDOM extends Component{
    constructor() {
        super()

        this.state = {
            text: ''
        }
    }

    handleTextChange(val){
        this.setState({
            text: val.target.value
        })
    }

    render(){
        return (
            <div>
                <input onChange={(e) => this.handleTextChange(e)}/>
                <HeaderOnDOM filter={this.state.text}/>
            </div>
        )
    }
}

export default FilterHeadersOnDOM