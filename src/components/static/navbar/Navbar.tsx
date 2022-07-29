import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className="navbar">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} className = "cursor">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
            <Box mx={1} className = "cursor">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            <Box mx={1} className = "cursor">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            <Box mx={1} className = "cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar tema
              </Typography>
            </Box>
            <Link to='/login' className = "text-decorator-none">
            <Box mx={1} style={{ cursor: 'pointer', color: 'white' }}>
              <Typography variant="h6" color="inherit">
                Logout
              </Typography>
              </Box>
            </Link>
            
            
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
export default Navbar
