import React from 'react';

import { connect } from 'react-redux';
import { submitPost } from '../actions/post-actions'

class SubmitPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }
    onChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    };
    onPostSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.submitPost(post);
    };
    render() {
        return(
            <div>
                <h2>Add a post</h2>
                <form onSubmit={this.onPostSubmit}>
                    <div>
                        <label>Title:</label><br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}></input>
                    </div>
                    <div>
                        <label>Body</label><br />
                        <textarea type="text" name="body" onChange={this.onChange} value={this.state.body}></textarea>
                    </div>
                    <br />
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default connect(null, {submitPost})(SubmitPost);