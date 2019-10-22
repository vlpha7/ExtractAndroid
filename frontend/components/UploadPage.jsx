import React from 'react';
import commonStyles from '../styles/common';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { uploadApkJson } from '../apis';
import ApkTemplate from './ApkTemplate.jsx';

export default class UploadPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      data: null
    }
    this.handleCreateImg = this.handleCreateImg.bind(this);
  }

  handleCreateImg() {
    this.setState({ isUploading: true });
    var formData = new FormData();
    var files = document.getElementById("uploadFile").files;
    if (files.length == 0) return;
    formData.append("file", files[0]);
    uploadApkJson(formData).then(res => {
      this.setState({ data: res.body, isUploading: false });
    });
  }

  render() {
    const { data, isUploading } = this.state;
    return (
      <div style={{height: '100%'}}>
        <div style={
          Object.assign(
            {},
            commonStyles.center_row_container,
            {height: data ? '10%' : '100%', transition: 'height 0.5s ease 0s', padding: '0px 30px'}
          )}
        >
          <input 
            id="uploadFile" 
            accept="*" 
            type="file"/>
          <label htmlFor="outlined-button-file">
            <Button 
              onClick={this.handleCreateImg.bind(this)} 
              variant="outlined" 
              component="span" 
              style={{margin: 'auto'}}>
                {!isUploading ? 'Upload' : 'Uploading' }
              <CloudUploadIcon style={{marginLeft: 1}} />
            </Button>
          </label>
        </div>
        { data ?
          <div>
            <div>Successfull Uploaded</div>
            <ApkTemplate data={data}/>
          </div>
        : null
        }
      </div>
      )
  }
}

// https://blog.gaya.ninja/articles/uploading-files-superagent-in-browser/

