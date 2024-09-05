import { Google } from "@mui/icons-material"
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid2 container>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type="email"
              placeholder="mail@gmail.com"
              fullWidth />
          </Grid2>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type="password"
              placeholder="Password"
              fullWidth />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2} sx={{ mt: 2 }}>
          <Grid2 size={{ xs: 12, md: 6 }} >
            <Button
              variant="contained"
              fullWidth>Login</Button>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} >
            <Button
              variant="contained"
              fullWidth>
              <Google /> <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid2>
          <Grid2 container direction={'row'} sx={{ mr: 0, ml: 'auto' }} >
            <Link color="inherit" to='/auth/register' component={RouterLink}>
              Create an account
            </Link>
          </Grid2>
        </Grid2>

      </form>
    </AuthLayout>
  )
}
