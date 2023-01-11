import React from 'react'

export const PostFuntion = (props) => {
    return (
        <div>
            <p> 
                <b>Text:</b> <ii>{props.content}</ii>
            </p>
             <p> 
                <b>Post by:</b> <ii>{props.name}</ii>
            </p>
        </div>
    );
};
