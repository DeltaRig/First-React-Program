import React from 'react'

const PostDetail = (props) => {
    console.log('props:', props);
    return (
        <div className="card bg-light mb-3">
            <h5 className="card-header">{props.post.title}</h5>
            <div className="card-body">
                <p className="card-text">{props.post.body}</p>
                <p className="card-text">{props.post.author}</p>
                <p className="card-text">{props.post.category}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-sm btn-outline-danger" type="button">Delete</button>
            </div>
        </div>
    );
}

export default PostDetail;