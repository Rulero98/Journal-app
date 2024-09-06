import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {
  return (
    <Grid2
      container
      sx={{ mb: 1 }}>

      <Grid2 container size={12}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}>


        <Grid2>
          <Typography fontSize={39} fontWeight={'light'}>HOLA POPO </Typography>
        </Grid2>

        <Grid2>
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid2>
      </Grid2>

      <Grid2 container size={12}>

        <TextField
          type="tet"
          variant="filled"
          fullWidth
          label='Title'
          placeholder="Write a title"
          sx={{ mb: 1, border: 'none' }}
        />

        <TextField
          type="tet"
          variant="filled"
          fullWidth
          multiline
          placeholder="what happen today?"
          minRows={5}
        />

      </Grid2>

      <ImageGallery />

    </Grid2>
  )
}
