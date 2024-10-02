import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks"

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'Email must have "@"'],
  password: [(value) => value.length >= 8, 'Password must have at least 8 characters'],
  displayName: [(value) => value.length >= 1, 'Name is required'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmited, setFormSubmited] = useState(false)

  const { status, errorMessage } = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const { displayName, email, password, onInputChange, formState, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations)

  const onSubmit = (e) => {
    e.preventDefault()
    setFormSubmited(true)
    if (!formSubmited) return
    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (
    <AuthLayout title="Register">

      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn'>
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
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
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
              error={!!emailValid && formSubmited}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid2>
        </Grid2>

        <Grid2
          size={{ xs: 12 }}
          display={errorMessage ? '' : 'none'}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Grid2>

        {/* buttonCreateAccount */}
        <Grid2 container spacing={2} sx={{ mt: 2 }}>
          <Grid2 size={{ xs: 12 }} >
            <Button
              disabled={isCheckingAuthentication}
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
