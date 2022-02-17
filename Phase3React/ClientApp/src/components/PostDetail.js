import React from 'react'

const PostDetail = (props) => {
    console.log('props:', props);
    function handleEdit(e) {
        props.parentEditCallback(props.post);
        e.preventDefault();
    }

    function handleDelete(e) {
        props.parentDeleteCallbak(props.post.id);
        e.preventDefault();
    }

    return (
        <div className="card bg-light mb-3">
            <h5 className="card-header">{props.post.title}</h5>
            <div className="card-body">
                <p className="card-text">{props.post.body}</p>
                <p className="card-text">{props.post.author}</p>
                <p className="card-text">{props.post.category}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-sm btn-outline-primary" type="button" onClick={handleEdit} >Edit</button>&nbsp;&nbsp;
                <button className="btn btn-sm btn-outline-danger" type="button" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default PostDetail;