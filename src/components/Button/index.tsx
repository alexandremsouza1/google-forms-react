import React from "react";


function Button (props: any) {
  return (
    <button onClick={props.e}>
      Click me!
    </button>
  );
}

export default Button;