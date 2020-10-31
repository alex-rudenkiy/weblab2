import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoBg from "reactjs-videobg";
//import ogg from "./videos/Neon.ogg";
import webm from "./background/video.webm";
import mp4 from "./background/video.mp4";
// import poster from "./img/poster.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { Row, Container, Col } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Image from "react-bootstrap/Image";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


function App() {
  return (
    <div className="App">
       <header >

        </header> 


      <body>

     <AppBar style={{    }} position="static">
  <Toolbar style={{
    marginTop: "0.5em",
    marginBottom: "0.5em"
    }}>
  <Typography variant="h6">
      News
    </Typography>

    <div style={{    marginLeft: "auto"}}><Typography variant="h6" >
      News
    </Typography>
    
    </div>
    

    {/* <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Button color="inherit">Login</Button>
     */}


  </Toolbar>
</AppBar>




<Container fluid className='mt-3' style={{paddingLeft:"2em", paddingRight:"2em"}}>
  <Row>
    <Col xs={5} sm={5} md={5} lg={5} xl={3} >
    <Card className="pb-4">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Авторизация
          </Typography>

          <div style={{paddingLeft:"1em", paddingRight:"1em"}}>
            <TextField id="outlined-basic" label="Логин"  style={{width: "100%", marginTop:"1em"}}/>
            <TextField id="outlined-basic" label="Пароль"  style={{width: "100%", marginTop:"1em"}}/>
          </div>

        </CardContent>
        <CardActions className="float-left ml-4 mt-3 ">
          <Button variant="contained" color="primary" size="medium">Войти</Button>
        </CardActions>
      </Card>

    </Col>
    <Col>
      <Card elevation={0}>
        <CardContent >
          <Typography color="textSecondary" gutterBottom>
            Мы сохраним все ваши файлы!
          </Typography>
            <div style={{textAlign: "center",
                width: "57%",
                margin: "auto",
                minWidth: "300px",
                maxWidth: "1000px"
            }}>
                <img src={`${process.env.PUBLIC_URL}/images/2020-10-18_01-00-40.svg`} className="img-fluid" alt="Responsive image"/>
            </div>

        </CardContent>
      </Card>
    </Col>
  </Row>
</Container>
          

      </body>

    </div>
  );
}

export default App;
