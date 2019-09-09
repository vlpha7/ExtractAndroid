import React from 'react';
import commonStyles from '../styles/common';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default class UploadPage extends React.Component {
  constructor(props) {
    super(props);
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(e) {
    console.log(document.getElementById('input').files[0]);
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
          accept="*"
          //className={classes.input}
          style={{display: 'none'}}
          id="outlined-button-file"
          //multiple
          type="file"
        />
        <label htmlFor="outlined-button-file">
          <Button variant="outlined" component="span" style={{margin: 'auto'}}>
            Upload
            <CloudUploadIcon style={{marginLeft: 1}} />
          </Button>
        </label>
      </div>
    )
  }
}

// https://blog.gaya.ninja/articles/uploading-files-superagent-in-browser/


// //example of request
// handleCreateImg(id) {
//         var formData = new FormData();
//         var files = document.getElementById("uploadFile").files;

//         formData.append("image", files[0]);

//         superagent.put('http://ec2-54-155-37-35.eu-west-1.compute.amazonaws.com:8080/carousel/image/' + id)
//           .set("Authorization", window.user.get("AuthToken"))
//           .send(formData)
//           .end(function(err, response) {
//             console.log(err, response);
//         });
//     }
    
// // example of input

// <form className="form-group">
//   <input id="uploadFile" accept="image/*" type="file" enctype="multipart/form-data" className="form-group" />
//   <button onClick={this.handleCreateImg.bind(this, query.id)} className="btn btn-primary">Upload image</button>
// </form>