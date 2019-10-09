import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class PermissionTemplate extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div style={{margin: '10px auto'}}>
        {data ? 
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Permission
              </Typography>
              <div>
                <Typography color="textSecondary">
                  {`Name: ${data.Name}`}
                </Typography>
                <Typography color="textSecondary">
                  {`Generic Name: ${data['Generic Name']}`}
                </Typography>
              </div>
            </CardContent>
          </Card>
        : null }
      </div>
    )
  }
}