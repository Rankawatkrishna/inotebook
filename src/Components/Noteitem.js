import React,{useContext} from "react";
import NoteContext from "../Context/notes/NoteContext";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const {deleteNote} = context; 
  const { note, updateNote} = props;
  return (
    <>
      <div className="col-md-6">
        <div className="card my-3">
          <div className="card-body">
            <div className="position-absolute end-0 mx-2"> 
                <i className="fa-solid fa-trash fa-lg mx-2" onClick={()=>{deleteNote(note._id);props.showAlert("Deleted successfully","success");}}></i>
                <i className="fa-regular fa-pen-to-square fa-lg mx-2" onClick={()=>{updateNote(note)}}></i>
            </div>
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text"> {note.description}</p>
          </div>
        </div>
       </div>
    </>
  );
};

export default Noteitem;
