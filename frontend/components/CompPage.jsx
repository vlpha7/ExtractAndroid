import React from 'react';
import commonStyles from '../styles/common';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default class CompPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateImg = this.handleCreateImg.bind(this);
  }

  handleCreateImg() {
    var formData = new FormData();
    var files = document.getElementById("uploadFile").files;
    console.log(files)
    // formData.append("image", files[0]);

    // superagent.put('http://ec2-54-155-37-35.eu-west-1.compute.amazonaws.com:8080/carousel/image/' + id)
    //   .set("Authorization", window.user.get("AuthToken"))
    //   .send(formData)
    //   .end(function(err, response) {
    //     console.log(err, response);
    // });
  }

  render() {
    return (
      <div style={
        Object.assign(
          {},
          commonStyles.center_row_container,
          {height: '100%'}
        )}
      >
        <input 
          id="uploadFile" 
          accept="*" 
          type="file" 
          encType="multipart/form-data" 
          className="form-group" />
        {/* <button 
          className="btn btn-primary">
            Upload image
        </button> */}
        <label htmlFor="outlined-button-file">
          <Button 
            onClick={this.handleCreateImg.bind(this)} 
            variant="outlined" 
            component="span" 
            style={{margin: 'auto'}}>
              Upload
            <CloudUploadIcon style={{marginLeft: 1}} />
          </Button>
        </label>
      </div>
    )
  }
}

// https://blog.gaya.ninja/articles/uploading-files-superagent-in-browser/

