import React from "react";

function Form (props: any) {
  return (
    <form {...props} onSubmit={handleSubmit}>
      {props.children}
    </form>
  );
}


const handleSubmit = (e: any) => {
  e.preventDefault();
  let data = [...e.currentTarget.elements]
      .filter((ele) => ele.type !== "submit")
      .map((ele) => {
          return {
              ["value"]: ele.type === "file" ? ele.files : ele.value,
          };
      });
  console.log(data);
}




export default Form;