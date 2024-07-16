import React, { useState, useCallback, useMemo } from "react";


const TextArea = React.memo(({ value, handleChange, maxLength }) => {
    return (
      <textarea value={value} onChange={handleChange} maxLength={maxLength} />
    );
  });


const CharacterCount = React.memo(({ maxLength, commentLength }) => {
    const charactersLeft = useMemo(() => maxLength - commentLength, [maxLength, commentLength]);
    return <p>{charactersLeft} characters left</p>;
  });

function CommentBox() {
  const [comment, setComment] = useState("");
  const maxLength = 200;

  const handleChange = useCallback((event) => {
    setComment(event.target.value);
  },[]);

  return (
    <div>
      <TextArea value={comment} handleChange={handleChange} maxLength={maxLength} />
      <CharacterCount maxLength={maxLength} commentLength={comment.length} />
    </div>
  );
}

export default CommentBox;
