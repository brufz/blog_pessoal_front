import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { Box } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/TokensReducer'
import { addToken } from '../../../store/tokens/Actions'
import {toast} from 'react-toastify'

function Navbar() {
  const token = useSelector<TokenState, TokenState['tokens']>(
    state => state.tokens
  )
  let navigate = useNavigate()
  const dispatch = useDispatch()

  function goLogout() {
    dispatch(addToken(''))
    toast.info('Usuário deslogado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
      progress: "undefined"
    });
    navigate('/login')
  }

  var navbarComponent
  if (token !== '') {
    navbarComponent = (
      <AppBar position="static">
        <Toolbar variant="dense" className="navbar">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Link to="/home" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
            </Link>

            <Link to="/posts" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
            </Link>

            <Link to="/tema" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
            </Link>
            <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Cadastrar tema
                </Typography>
              </Box>
            </Link>

            <Link to="/login" className="text-decorator-none">
              <Box mx={1} className="cursor" onClick={goLogout}>
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    )
  }
  return <>{navbarComponent}</>
}
export default Navbar
