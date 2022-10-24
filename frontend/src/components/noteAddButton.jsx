import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
const NoteAddButton = (props) => {
  return (
    <>
      <Zoom in={true}>
        <Fab onClick={props.onClick} type='submit'><NoteAddIcon /></Fab>
      </Zoom>
    </>
  )
}

export default NoteAddButton

