import React, { Component } from 'react'
import "./Post.css"
export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <p><strong>{this.props.userId}</strong>: {this.props.message}</p>
                <p>Comments:</p>
                    <p>{this.props.children}</p>
                
            </div>
        )
    }
}
