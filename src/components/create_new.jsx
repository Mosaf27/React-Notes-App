import { useState } from "react";
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {

    const[isExpanded, setExpanded] = useState(false); //manages state and expands textarea if it is clicked
                                                      //through expand function
    function Expand() {
      setExpanded(true);
    }

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
  
    return (
      <div>
        <form className="create-note">

          {isExpanded ? <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />: null}
          
          <textarea
           spellCheck = "false"
            name="content"
            onClick={Expand}
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
             rows={isExpanded ? "3" : "1"}
          />

          <Zoom in ={isExpanded}>
          <Fab variant="contained"  onClick={submitNote}>
            <AddIcon/>
          </Fab>
          </Zoom>
        </form>
      </div>
    );
  }
  
  CreateArea.propTypes = {
    onAdd: PropTypes.string.isRequired, // Add the missing prop type validation
  };


  export default CreateArea;
  