import { SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid2, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startingUploadFiles, startSaveNote } from "../../store/journal/thunks"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

  const dispatch = useDispatch()

  const { activeNote, savedMessage, isSaving } = useSelector(state => state.journal)

  const { body, title, date, onInputChange, formState } = useForm(activeNote)

  const fileInputRef = useRef()

  const dateString = useMemo(() => {
    const newDate = new Date(date).toUTCString()
    return newDate
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {
    if (savedMessage.length > 0) {
      Swal.fire('Updated succesfully', savedMessage, 'success')
    }
  }, [savedMessage])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return

    dispatch(startingUploadFiles(target.files))
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

          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={onFileInputChange}
            style={{ display: 'none' }}
          />

          <IconButton
            color={"primary"}
            disabled={isSaving}
            onClick={() => fileInputRef.current.click()}
          >
            <UploadOutlined />
          </IconButton>

          <Button
            disabled={isSaving}
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

      <ImageGallery images={activeNote.imageUrls} />

    </Grid2>
  )
}
