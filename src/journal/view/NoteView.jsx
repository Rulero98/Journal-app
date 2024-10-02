import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote } from "../../store/journal/thunks"

export const NoteView = () => {

  const dispatch = useDispatch()

  const { activeNote } = useSelector(state => state.journal)

  const { body, title, date, onInputChange, formState } = useForm(activeNote)

  const dateString = useMemo(() => {
    const newDate = new Date(date).toUTCString()
    return newDate
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  return (
    <Grid2
      container
      className='animate__animated animate__fadeIn'
      sx={{ mb: 1 }}>

      <Grid2 container size={12}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}>


        <Grid2>
          <Typography fontSize={39} fontWeight={'light'}>{dateString} </Typography>
        </Grid2>

        <Grid2>
          <Button
            onClick={onSaveNote}
            color="primary"
            sx={{ padding: 2 }}
          >
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid2>
      </Grid2>

      <Grid2 container size={12}>

        <TextField
          type="text"
          variant="filled"
          fullWidth
          label='Title'
          placeholder="Write a title"
          sx={{ mb: 1, border: 'none' }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="tet"
          variant="filled"
          fullWidth
          multiline
          placeholder="what happen today?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />

      </Grid2>

      <ImageGallery />

    </Grid2>
  )
}
