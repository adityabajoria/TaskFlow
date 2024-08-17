import { useState } from "react";

const CreateText = ({ AddNote }) => {
  const [text, setText] = useState("");
  const charLimit = 200;

  const handleText = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setText(e.target.value);
    }
  };

  const saveBtn = () => {
    if (text.trim().length > 0) {
      AddNote(text);
      setText("");
    }
  };
  return (
    <div className="note create">
      <textarea
        rows="10"
        cols="10"
        value={text}
        placeholder="Add a Note...."
        onChange={handleText}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - text.length} remaining</small>
        <button className="save" onClick={saveBtn}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateText;
