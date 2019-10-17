import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardActions, Collapse } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
  avatar: {
    backgroundColor: red[500],
  },
}));

export default class ApkTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    const newState = !this.state.expanded;
    this.setState({expanded: newState});
  }

  render() {
    const classes = {
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: "transform 1s",
      },
      expandOpen: {
        transform: 'rotate(180deg)',
        marginLeft: 'auto',
        transition: "transform 1s",
      },
    };
    const { expanded } = this.state;
    const { data } = this.props;

    return (
      <div style={{width: '100%', margin: '10px auto'}}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {data.Name}
            </Typography>
            <Typography color="textSecondary">
              {`SHA256: ${data.SHA256}`}
            </Typography>
            <Typography color="textSecondary">
              {`Certificate: ${data["Certificate(Fingerprint)"]["Name"]}`}
            </Typography>
            <Typography variant="body2" component="p">
              {`Size: ${data.Size}`}
              <br />
              {data["Minimum SDK"] ? `SDK Version: ${data["Minimum SDK"]["Api Level"]}` : null}
              <br />
              {`Number of permission: ${data.Permissions.length}`}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              style={expanded ? classes.expandOpen : classes.expand}
              className="NoOutline"
              onClick={this.handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Permissions:</Typography>
                {data.Permissions.map(p => (
                  <Typography paragraph key={p.Name}>
                    {p.Name}
                  </Typography>
                ))}
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
}
