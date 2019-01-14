import React, {Component} from 'react'

class HeaderOnDOM extends Component{
    constructor() {
        super()

        this.state = {
            arr: ['apple','banana','carrot','deviled eggs','eggs','flan']
        }
    }

    render() {
        let h2Arr = this.state.arr.filter((element) => element.includes(this.props.filter)).map((element, index) => <h2 key={index+element}>{element}</h2>)

        return(
            <div>
                {h2Arr}
            </div>
        )
    }
}

export default HeaderOnDOM