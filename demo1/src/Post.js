import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
         <div>
            <p> 
                <b>Text:</b> <ii>{this.props.content}</ii>
            </p>
             <p> 
                <b>Post by:</b> <ii>{this.props.name}</ii>
            </p>
        </div>
        );
    }
}
