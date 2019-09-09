const Colors = {
  White: '#FFF',
  Sleek_Modern: {
    Blue_Black: '#2F2E33',
    Cool_Gray: '#D5D6D2',
    Cobalt: '#3A5199'
  },
  White_Smoke: '#F5F5F5'
};

const commonStyles = {
  fullheight_container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Sleek_Modern.Blue_Black
  },

  border_container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '5px solid',
    borderColor: Colors.White,
    borderRadius: 5,
    padding: '10px 50px 3px 50px'
  },

  center_column_container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  center_row_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  left_row_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'center'
  },
  right_row_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
};

export default commonStyles;
