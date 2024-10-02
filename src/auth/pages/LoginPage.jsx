import { Google } from "@mui/icons-material"
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth"
import { useMemo } from "react"

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth)

  const { email, password, onInputChange } = useForm(formData)

  const isAuthenticated = useMemo(() => status === 'checking', [status])

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(startLoginWithEmailPassword({ email, password }))
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn'>
        <Grid2 container>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type="email"
              placeholder="mail@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid2>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2} sx={{ mt: 2 }}>
          {/* eslint-disable-next-line no-extra-boolean-cast*/}
          <Grid2 size={{ xs: 12 }} display={!!errorMessage ? '' : 'none'}>
            <Alert severity="error">{errorMessage} </Alert>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} >
            <Button
              disabled={isAuthenticated}
              variant="contained"
              fullWidth
              type="submit"
            >
              Login
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} >
            <Button
              disabled={isAuthenticated}
              variant="contained"
              fullWidth
              onClick={onGoogleSignIn}
            >
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
