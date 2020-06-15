import {createMuiTheme} from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette:
      {primary: {main: 'rgb(0,38,58)'}, secondary: {main: 'rgb(255,255,255)'}},
  overrides: {
    MuiInputBase: {
      root: {borderRadius: 5},
      colorSecondary: {
        backgroundColor: 'rgb(0,38,58)',
        color: 'white',
        padding: '5px 10px 5px 10px'
      }
    }
  }
});
export default Theme;
