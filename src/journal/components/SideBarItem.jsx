import { TurnedInNot } from "@mui/icons-material"
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import PropTypes from 'prop-types'
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal"

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {

  const dispatch = useDispatch()

  const newTitle = useMemo(() => {
    return title.length > 20 ? title.substring(0, 20) + '...' : title
  }, [title])

  const newBody = useMemo(() => {
    return title.length > 25 ? title.substring(0, 25) + '...' : title
  }, [title])

  const onActiveNote = () => dispatch(setActiveNote({ title, body, id, date, imageUrls }))

  

  return (
    <ListItem >
      <ListItemButton onClick={onActiveNote}>
        <ListItemIcon>
          <TurnedInNot sx={{ mt: 'auto', mb: 'auto', mr: 2, ml: -2 }} />
          <Grid2 container >
            <ListItemText primary={newTitle} secondary={newBody} />
          </Grid2>
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  )
}

SideBarItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.number,
  imageUrls: PropTypes.array,
}