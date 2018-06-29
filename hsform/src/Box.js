import React from 'react';


const Box = (props) => {
  return (
    <div className='box'>
    <p>{props.field.name}</p>
    {
      props.field.type === 'entry' ?
      <div className='entryBox'>
        <textarea id={props.field.uuid} />
      </div>
      :
      <div className='checkBox'>
        <textarea id={props.field.uuid} />
      </div>
    }
    </div>
  );
}


export default Box;
