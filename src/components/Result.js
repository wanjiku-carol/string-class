import React from 'react';

export default function Result(props) {
  return (
    <div className="textarea-div">
      <div>
        <p><b>Result:</b></p>
      </div>
      <textarea className="text-area" rows="10" value={props.value} />
    </div>
  );
}

