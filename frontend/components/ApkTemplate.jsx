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
  name:"Facebook", 
  SHA256:"3d690add7242d62ad559d3aefc8613015a8f6ed4aa8bc5e2962b857ab21834e1", 
  size:31489381, 
  minSDKVersion:"14", 
  certificate_fingerprint:"E3:F9:E1:E0:CF:99:D0:E5:6A:05:5B:A6:5E:24:1B:33:99:F7:CE:A5:24:32:6B:0C:DD:6E:C1:32:7E:D0:FD:C1", 
  certificate_owner:"Common Name: Facebook Corporation, Organizational Unit: Facebook, Organization: Facebook Mobile, Locality: Palo Alto, State/Province: CA, Country: US", 
  permission:['android.permission.WRITE_SYNC_SETTINGS', 'com.facebook.home.permission.WRITE_BADGES', 'android.permission.CALL_PHONE', 'com.facebook.katana.permission.RECEIVE_ADM_MESSAGE', 'android.permission.ACCESS_NETWORK_STATE', 'com.google.android.c2dm.permission.RECEIVE', 'com.facebook.katana.permission.C2D_MESSAGE', 'android.permission.DOWNLOAD_WITHOUT_NOTIFICATION', 'com.sec.android.provider.badge.permission.READ', 'android.permission.READ_SMS', 'android.permission.READ_EXTERNAL_STORAGE', 'android.permission.ACCESS_WIFI_STATE', 'android.permission.MANAGE_ACCOUNTS', 'android.permission.RECEIVE_BOOT_COMPLETED', 'android.permission.WRITE_CALENDAR', 'android.permission.ACCESS_FINE_LOCATION', 'android.permission.GET_ACCOUNTS', 'android.permission.READ_SYNC_SETTINGS', 'android.permission.READ_PHONE_STATE', 'android.permission.SYSTEM_ALERT_WINDOW', 'android.permission.BATTERY_STATS', 'android.permission.EXPAND_STATUS_BAR', 'com.android.launcher.permission.INSTALL_SHORTCUT', 'android.permission.CAMERA', 'android.permission.READ_CONTACTS', 'com.htc.launcher.permission.UPDATE_SHORTCUT', 'android.permission.REORDER_TASKS', 'android.permission.INTERNET', 'android.permission.BROADCAST_STICKY', 'com.htc.launcher.permission.READ_SETTINGS', 'android.permission.SET_WALLPAPER', 'android.permission.SET_WALLPAPER_HINTS', 'android.permission.READ_CALENDAR', 'com.google.android.providers.gsf.permission.READ_GSERVICES', 'com.facebook.orca.provider.ACCESS', 'android.permission.CHANGE_NETWORK_STATE', 'android.permission.WRITE_EXTERNAL_STORAGE', 'com.nokia.pushnotifications.permission.RECEIVE', 'com.amazon.device.messaging.permission.RECEIVE', 'com.sec.android.provider.badge.permission.WRITE', 'android.permission.WAKE_LOCK', 'android.permission.ACCESS_COARSE_LOCATION', 'com.facebook.pages.app.provider.ACCESS', 'android.permission.READ_PROFILE', 'android.permission.VIBRATE', 'android.permission.CHANGE_WIFI_STATE', 'android.permission.RECORD_AUDIO', 'com.facebook.katana.permission.CROSS_PROCESS_BROADCAST_MANAGER', 'com.google.android.launcher.permission.READ_SETTINGS', 'android.permission.AUTHENTICATE_ACCOUNTS', 'com.facebook.permission.prod.FB_APP_COMMUNICATION', 'com.facebook.receiver.permission.ACCESS', 'com.facebook.permission.prod.SYSTEM_COMMUNICATION', 'android.permission.GET_TASKS', 'android.permission.MODIFY_AUDIO_SETTINGS', 'com.sonyericsson.home.permission.BROADCAST_BADGE', 'android.permission.WRITE_CONTACTS', 'com.facebook.katana.provider.ACCESS']
}

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

    return (
      <div style={{width: '100%', margin: '10px auto'}}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {mockData.name}
            </Typography>
            <Typography color="textSecondary">
              {`SHA256: ${mockData.SHA256}`}
            </Typography>
            <Typography variant="body2" component="p">
              {`Size \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0: \xa0${mockData.size}`}
              <br />
              {`SDK Version : ${mockData.minSDKVersion}`}
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
                {mockData.permission.map(p => (
                  <Typography paragraph key={p}>
                    {p}
                  </Typography>
                ))}
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
}
