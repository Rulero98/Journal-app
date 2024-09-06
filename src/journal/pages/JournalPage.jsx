import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../view"
import { NothinSelectedView } from "../view/NothinSelectedView"

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/* {<Typography >JournalPage</Typography>} */}
        {/* {<NothinSelectedView />} */}
        <NoteView />
      </JournalLayout>
    </>
  )
}
