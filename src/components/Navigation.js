import * as React from 'react';
// REDUX --------
import { useDispatch, useSelector } from 'react-redux';
import { set_user } from '../__actions/loginActions';
// ----------------
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../useAuth'

const pages = ['Home', 'Games', 'Facts', 'Parlays'];
const settings = ['Profile', 'Friends', 'History', 'Logout'];

export default function Navigation(props){
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const loginStatus = useSelector(state=>state.loggedInStatus);
  const loginData = useSelector(state=>state.userInfo);

  const customStyles = {
    'buttonTitleStyle': {
      fontFamily: "'Fredericka the Great', cursive",
      color: 'black',
      textDecoration: 'none',
      fontSize: '20px',
      fontWeight: '600'
    },
    'capCoinsStyle' : {
      fontFamily: "'Anton', sans-serif" ,
      color: '#1E5631',
      textShadow: '0 0 8px #619A46',
      textDecoration: 'none',
      fontSize: '20px',
      fontWeight: '600',
      backgroundColor: 'white',
      width: '100%',
      padding: '5px',
    }
  }

  const handleOpenNavMenu = (event) => {
    let currentDate = new Date();
    if((currentDate.getTime()-loginData.lastLogin) > 900000){ // CHECKS IF CLIENT HAS BEEN IDLE FOR 15 MIN
      handleLogout(); //LOGOUT
    }
    else{ 
      let stager = loginData;
      stager.lastLogin = currentDate.getTime(); // RESETS LAST TOUCH
      dispatch(set_user(stager)); // RESETS REDUX
      setAnchorElNav(event.currentTarget);
    }
  };
  const handleOpenUserMenu = (event) => {
    let currentDate = new Date();
    if((currentDate.getTime()-loginData.lastLogin) > 900000){ // CHECKS IF CLIENT HAS BEEN IDLE FOR 15 MIN
      handleLogout();
    }
    else{
      let stager = loginData;
      stager.lastLogin = currentDate.getTime(); // RESETS LAST TOUCH
      dispatch(set_user(stager)); // RESETS REDUX
      setAnchorElUser(event.currentTarget);
    }
  };
  const handleCloseNavMenu = () => {
    let currentDate = new Date();
    if((currentDate.getTime()-loginData.lastLogin) > 900000){ // CHECKS IF CLIENT HAS BEEN IDLE FOR 15 MIN
      handleLogout();
    }
    else{
      let stager = loginData;
      stager.lastLogin = currentDate.getTime(); // RESETS LAST TOUCH
      dispatch(set_user(stager)); // RESETS REDUX
      setAnchorElNav(null);
    }
  };
  const handleCloseUserMenu = () => {
    let currentDate = new Date();
    if((currentDate.getTime()-loginData.lastLogin) > 900000){ // CHECKS IF CLIENT HAS BEEN IDLE FOR 15 MIN
      handleLogout();
    }
    else{
      let stager = loginData;
      stager.lastLogin = currentDate.getTime(); // RESETS LAST TOUCH
      dispatch(set_user(stager)); // RESETS REDUX
      setAnchorElUser(null);
    }
  };

  function handleLogout(){
    handleCloseUserMenu();
    logout().then(navigate('/Home'));
  }

  //ADDS COMMAS
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <AppBar position="fixed" sx={{ borderTop: '1px solid #619A46', borderBottom: '1px solid #619A46', backgroundColor: '#1E5631' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page}`} style={customStyles.buttonTitleStyle}>
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, textShadow: '1px 1px #619A46', display: { xs: 'flex', md: 'none' } }}
          >
            <p style={{ fontSize: '20px', fontFamily: "'Fredoka One', cursive" }}>
                FACT
            </p>
            <p style={{ fontSize: '20px' }}>
                OR
            </p>
            <p style={{ fontSize: '20px', fontFamily: "'Anton', sans-serif" }}>
                CAP
            </p>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {loginStatus && loginData ? 
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={loginData.username} src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            :
              <button onClick={()=>navigate('/Login')}>sign in</button>
            }
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    {setting == 'Logout' ? 
                      <div onClick={()=>handleLogout()} style={customStyles.buttonTitleStyle}>
                        {setting}
                      </div>
                    :
                      <Link to={`/${setting}`} style={customStyles.buttonTitleStyle}>
                        {setting}
                      </Link>
                    }
                </MenuItem>
              ))}
                <MenuItem key={"capCoins"} onClick={handleCloseNavMenu}>
                    <Link to={`/Home`} style={customStyles.capCoinsStyle}>
                    {loginData.capCoins ? numberWithCommas(loginData.capCoins): null}&#162;
                  </Link>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
