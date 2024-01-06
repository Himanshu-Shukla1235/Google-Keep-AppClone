import React from "react";
import { useState } from "react";
import "./addnote.css";
import { Input, Button } from "@mui/material";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddIcon from "@mui/icons-material/Add";
const AddNote = () => {
  const [note, setnote] = useState({
    Title: "",
    Note: "",
  });

  const write = (event) => {
    const { name, value } = event.target;

    setnote((preValue) => {
      if (name === "title") {
        return {
          Title: value,
          Note: preValue.Note,
        };
      } else if (name === "note") {
        return {
          Title: preValue.Title,
          Note: value,
        };
      }
    });

   
    
  };
  
  return (
    
    <>
      <div className="addnote">
        <Input placeholder="Title">
          <input type="text" name="title" value={note.Title} onChange={write} />{" "}
        </Input>{" "}
        <textarea placeholder="Note:" name="note" value={note.Note} onChange={write}> </textarea>
        <Button>
          <AddIcon></AddIcon>
        </Button>
      </div>
    </>
  );
};

export default AddNote;
