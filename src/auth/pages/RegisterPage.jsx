import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid2 container>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Full name'
              type="text"
              placeholder="Your name"
              fullWidth />
          </Grid2>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type="email"
              placeholder="email@example.com"
              fullWidth />
          </Grid2>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type="password"
              placeholder="*******"
              fullWidth />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2} sx={{ mt: 2 }}>
          <Grid2 size={{ xs: 12 }} >
            <Button
              variant="contained"
              fullWidth>Create account</Button>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} >
          </Grid2>
          <Grid2 container direction={'row'} sx={{ mr: 0, ml: 'auto' }} >
          <Typography sx={{mr: -1}}>Already have an account?</Typography>
            <Link color="inherit" to='/auth/login' component={RouterLink}>
              Click here
            </Link>
          </Grid2>
        </Grid2>

      </form>
    </AuthLayout >
  )
}
