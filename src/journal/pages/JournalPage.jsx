import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../view"
import { NothinSelectedView } from "../view/NothinSelectedView"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  const dispatch = useDispatch()
  const { isSaving, activeNote } = useSelector(state => state.journal)

  const onClickNewNote = () => dispatch(startNewNote())

  return (
    <>
      <JournalLayout >

        { /*eslint-disable-next-line no-extra-boolean-cast*/}
        {(!!activeNote) ? <NoteView /> : <NothinSelectedView />}

        <IconButton
          onClick={onClickNewNote}
          // eslint-disable-next-line no-extra-boolean-cast
          disabled={isSaving}

          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}

        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </JournalLayout>
    </>
  )
}
