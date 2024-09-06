import { StartOutlined } from "@mui/icons-material"
import { Grid2, Typography } from "@mui/material"

export const NothinSelectedView = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        padding: 4,
        borderRadius: 3
      }}
    >

      <Grid2
        size={12}
      >
        <StartOutlined sx={{ fontSize: 100, color: 'white' }} />
      </Grid2>

      <Grid2
        size={12}
      >
        <Typography variant="h5" color="white">Select a note</Typography>
      </Grid2>
    </Grid2>
  )
}
