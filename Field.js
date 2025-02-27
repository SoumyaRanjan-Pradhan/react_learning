import React from "react";

const Field = ({ format, label,example,setValue,value }) => {
  return (
    <>
      <div className="input_group">
        <label htmlFor={label}>{label}</label>
        <input className="input_form" type={format} id={label} placeholder={example} value ={value}  onChange={(e)=>{
         console.log(e.target.value); 
         setValue(e.target.value);
        }}/>
      </div>
    </>
  );
};

export default Field;
