import React from 'react';

// let
const SubmitBtn = (props) => {
  return (
    <button type="button" id='btn' onClick={submitForm}>Submit!</button>
  );

  function submitForm() {
    const data = {}
    data.fields = [];
    if (props.fields) {
      for (let i=0; i<props.fields.length; i++) {
        const ele = document.getElementById(props.fields[i].uuid);
        // console.log(ele)
        data.fields.push({
          uuid: props.fields[i].uuid,
          value: ele.value
        })
      }
    }

    fetch(props.url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  }
}


export default SubmitBtn;
