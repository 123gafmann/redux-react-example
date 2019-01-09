import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchPosts } from '../actions/post-actions'

class Posts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.post) {
            this.props.posts.unshift(nextProps.post);
        }
    }

    render() {
        console.log(this.props);
        const postItemCollection = this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <h4>{post.title}</h4>
                    <p>
                        {post.body}
                    </p>
                </div>
            );
        });
        return(
            <div>
                {postItemCollection}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
        posts: state.postReducer.postItems,
        post: state.postReducer.post
    }
);

export default connect(mapStateToProps, {fetchPosts})(Posts);