import React, { useState } from 'react';
import { useInput } from "react-hookedup"

const MyName = () => {
  const { value, onChange } = useInput("")

  return (
    <div>
      <h1>My name is: {value}</h1>
      <input type="text" value={value} onChange={onChange}/>
    </div>
  );
};

export default MyName;