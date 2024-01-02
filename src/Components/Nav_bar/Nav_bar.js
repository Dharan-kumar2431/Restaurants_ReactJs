import React from 'react'
import {AppBar, Toolbar, Typography, Button} from '@mui/material';
import {MenuBook, AccountCircle} from '@mui/icons-material'
import styles from './Nav_bar.module.css'

const Nav_bar = () => {
  return (
    <div>
      <AppBar position='relative' color='transparent'>
        <Toolbar className='navbar'>
            <MenuBook fontSize='large' className={styles['navmenuicon']} />
            <Typography variant='h5' color='secondary.main' sx={{ml: 1 ,flexGrow: 1}}>Menu Card</Typography>
            <Button variant='contained' sx={{mr: 5}} startIcon={<AccountCircle fontSize='large'/>}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav_bar;