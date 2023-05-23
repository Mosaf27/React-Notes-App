import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete'; // importing delete icon from material ui


function Note(props) {
    function handleClick() {
      props.onDelete(props.id);
    }
  
    return (
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
        <DeleteIcon />
        </button>
        
      </div>
    );
  }

  Note.propTypes = {
    onDelete: PropTypes.string.isRequired, // Add the missing prop type validation
    id:PropTypes.string.isRequired,       //removes prop type error
    title: PropTypes.string,
    content: PropTypes.string
  };

export default Note;