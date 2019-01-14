import React, {Component} from 'react'

class PageNotFound extends Component{
    render() {
        return (
            <div>
                <img src={this.props.image} alt={this.props.imageName} />
            </div>
        )
    }
}

export default PageNotFound