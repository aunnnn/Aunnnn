import React, { Component } from 'react';
import moment from 'moment';
import TinyMCE from 'react-tinymce-input';

class PostEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postContent: props.postContent || '',
      postTitle: props.postTitle || '',
      postSlug: props.postSlug || '',
      postCreatedAt: (props.postCreatedAt && moment(props.postCreatedAt).format('DD-MM-YYYY HH:mm')) || moment().format('DD-MM-YYYY HH:mm'),
    };
  }

  // post content
  handleEditorChange = (value) => {
    this.setState({
      postContent: value,
    });
  }

  // post title/slug/created at
  handlePostInfoFormChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handlePostSubmit = (e) => {
    e.preventDefault();
    this.props.handlePostSubmit(this.state);
  }

  render() {
    const { postTitle, postContent, postSlug, postCreatedAt } = this.state;
    return (
      <div>
        <div>
          <TinyMCE
            value={postContent}
            tinymceConfig={{
              plugins: 'autolink link image lists code hr preview',
              toolbar: 'undo redo | bold italic | fontselect fontsizeselect | alignleft aligncenter alignright | bullist numlist blockquote  code hr | preview',
              font_formats: "Helvetica Neue='Helvetica Neue';Arial=arial,helvetica,sans-serif",
              fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 1em',
              content_style: '.mce-content-body {font-size:16pt;font-family:"Helvetica Neue";}',
            }}
            onChange={this.handleEditorChange}
          />
        </div>
        <br />
        <form onSubmit={this.handlePostSubmit}>
          <div className="row">
            <label className="two columns" htmlFor="postTitle">Title</label>
            <input
              className="ten columns"
              type="string"
              id="postTitle"
              value={this.state.postTitle}
              onChange={this.handlePostInfoFormChange}
            />
          </div>
          <div className="row">
            <label className="two columns" htmlFor="postSlug">Slug</label>
            <input
              className="ten columns"
              type="string"
              id="postSlug"
              value={this.state.postSlug}
              onChange={this.handlePostInfoFormChange}
            />
          </div>
          <div className="row">
            <label className="two columns" htmlFor="postCreatedAt">Created date</label>
            <input
              className="ten columns"
              type="string"
              id="postCreatedAt"
              value={this.state.postCreatedAt}
              onChange={this.handlePostInfoFormChange}
            />
          </div>
          <br />

          <input
            value={this.props.formButtonTitle}
            type="submit"
            disabled={postTitle === '' || postContent === '' || postSlug === '' || postCreatedAt === ''}
            className="button-primary"
          />
        </form>
      </div>
    );
  }
}

PostEditor.propsType = {
  postContent: React.PropTypes.string,
  postTitle: React.PropTypes.string,
  postSlug: React.PropTypes.string,
  postCreatedAt: React.PropTypes.instanceOf(Date),
  handlePostSubmit: React.PropTypes.func.isRequired,
  formButtonTitle: React.PropTypes.string.isRequired,
};

export default PostEditor;
