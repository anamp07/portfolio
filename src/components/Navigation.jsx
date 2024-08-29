import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container, Menu, MenuItem } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Link from 'next/link'

const Navigation = () => {
    const theme = useTheme()
    const [anchorElNav, setAnchorElNav] = React.useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ 
            background: '#0C0A15', 
            boxShadow: 'none', 
            color: theme.palette.primary.main }}>
            <Container maxWidth="md">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', justifyContent: 'flex-end', columnGap: '1rem' } }}>
                        <Link
                            href='#about'
                            sx={{ my: 2, color: '#ffffff', display: 'block', textTransform: 'unset' }}
                        >
                            About Me
                        </Link>
                        <Link
                            href='#experience'
                            sx={{ my: 2, color: '#ffffff', display: 'block', textTransform: 'unset' }}
                        >
                            Experience
                        </Link>
                        <Link
                            href='#projects'
                            sx={{ my: 2, color: '#ffffff', display: 'block', textTransform: 'unset' }}
                        >
                            Projects
                        </Link>
                        <Link
                            href='#contact'
                            sx={{ my: 2, color: '#ffffff', display: 'block', textTransform: 'unset' }}
                        >
                            Contact
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none', justifyContent: 'flex-end' } }}>
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
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link href='#about'>
                                    About me
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link href='#experience'>
                                    Experience
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link href='#projects'>
                                    Projects
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link href='/contact'>
                                    Contact
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
  )
}

export default Navigation