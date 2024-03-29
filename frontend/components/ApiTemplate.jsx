import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class ApiTemplate extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div style={{margin: '10px auto'}}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              API
            </Typography>
            <div>
              <Typography color="textSecondary">
                {`Name: ${data.Name}`}
              </Typography>
              <Typography color="textSecondary">
                {data.IntroduceTag ? `Introduce: ${data.IntroduceTag['Name']}` : 'No data'}
              </Typography>
              {data.RemoveTag ? 
                <Typography color='error' variant="body2" component="p">
                  {`Remove: ${data.RemoveTag['Name']}`}
                </Typography>
                : null }
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}