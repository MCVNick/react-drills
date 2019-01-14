import React, {Component} from 'react'

class HeaderOnDOM extends Component{
    constructor() {
        super()

        this.state = {
            arr: [0,1,2,3,4,5,6,7]
        }
    }

    render() {
        let h2Arr = this.state.arr.map((element) => <h2>{element}</h2>)

        return(
            <div>
                {h2Arr}
            </div>
        )
    }
}

export default HeaderOnDOM