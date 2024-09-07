import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../view"
import { NothinSelectedView } from "../view/NothinSelectedView"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/* {<Typography >JournalPage</Typography>} */}
        {<NothinSelectedView />}
        {/* <NoteView /> */}
        <IconButton
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
