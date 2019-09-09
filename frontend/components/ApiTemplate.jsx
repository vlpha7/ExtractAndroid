import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardActions, Collapse } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const mockData = {
  introduce: "android-2.2.1_r2", 
  name: "getData",
  remove: "android-4.2.1_r2"
}

export default class ApiTemplate extends React.Component {
  render() {
    console.log(this.props.data)
    const {data, type} = this.props.data;
    return (
      <div style={{margin: '10px auto'}}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {type}
            </Typography>
            {type === "API" ?
              <div>
                <Typography color="textSecondary">
                  {`Introduce: ${data.introduce}`}
                </Typography>
                <Typography color='error' variant="body2" component="p">
                  {`Remove: ${data.remove}`}
                </Typography>
              </div>
            : null
            }
          </CardContent>
        </Card>
      </div>
    )
  }
}