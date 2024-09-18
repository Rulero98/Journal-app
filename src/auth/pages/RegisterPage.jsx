import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"

const formData = {
  email: 'roavila18_98@outlook.com',
  password: '123456',
  displayName: 'Raul Ortega'
}



export const RegisterPage = () => {

  const { displayName, email, password, onInputChange, formState } = useForm(formData)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid2 container>

          {/* Full name */}
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Full name'
              type="text"
              placeholder="Your name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </Grid2>

          {/* email */}
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type="email"
              placeholder="email@example.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid2>

          {/* password */}
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type="password"
              placeholder="*******"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid2>
        </Grid2>

        {/* buttonCreateAccount */}
        <Grid2 container spacing={2} sx={{ mt: 2 }}>
          <Grid2 size={{ xs: 12 }} >
            <Button
              type="submit"
              variant="contained"
              fullWidth>Create account</Button>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }} >
          </Grid2>
          <Grid2 container direction={'row'} sx={{ mr: 0, ml: 'auto' }} >
            <Typography sx={{ mr: -1 }}>Already have an account?</Typography>
            <Link color="inherit" to='/auth/login' component={RouterLink}>
              Click here
            </Link>
          </Grid2>
        </Grid2>

      </form>
    </AuthLayout >
  )
}
