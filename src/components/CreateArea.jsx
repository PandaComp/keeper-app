import React, { useState } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom'



function CreateArea(props) {
  const [isClicked, setIsClicked] = useState(false)
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function showInput(e) {
    console.log('douche bag')
    setIsClicked(true)
  }

  return (
    <div>
      <form className="create-note">
        {isClicked ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
         // style={{display : isClicked ? 'block' : 'none'}} // this totally worked. conditional <input> render instead
        /> : null}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
          onClick={showInput}
        />
        <Zoom in={isClicked}
          appear={true} ><Fab onClick={submitNote}><AddBoxIcon />
          </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
