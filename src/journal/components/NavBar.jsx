import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material"
import PropTypes from 'prop-types'

export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}` }
      }}
    >
      <Toolbar>

        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />

        </IconButton>

        <Grid2
          container
          columns={2}
          size={'grow'}
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}>

          <Typography variant="h6" noWrap component={'div'}>JournalApp</Typography>

          <IconButton color="error">

            <LogoutOutlined />

          </IconButton>

        </Grid2>

      </Toolbar>
    </AppBar >
  )
}

NavBar.propTypes = {
  drawerWidth: PropTypes.number
}