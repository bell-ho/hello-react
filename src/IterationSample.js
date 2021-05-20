import React, { useState } from 'react';

const IterationSample = () => {

   const [names, setNames] = useState([
      { id: 1, text: 'snowman' },
      { id: 2, text: 'ice' },
      { id: 3, text: 'snow' },
      { id: 4, text: 'wind' }
   ]);

   const [inputText, setInputText] = useState('');
   const [nextId, setNextId] = useState(5);

   const onChange = e => setInputText(e.target.value);

   const onClick = () => {
      const nextNames = names.concat({
         id  : nextId, //nextId' value define id
         text: inputText
      });

      setNextId(nextId + 1);  //nextId 값에 1을 더함
      setNames(nextNames); //names값을 업데이트
      setInputText(''); //inputText를 비움
   };

   const onRemove = id => {
      const nextNames = names.filter(name => name.id != id);
      console.log(nextNames);
      setNames(nextNames);
   };

   const namesList = names.map(name => (
      <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
         {name.text}
      </li>));

   return (
      <>
         <input value={inputText} onChange={onChange} />
         <button onClick={onClick}>plus</button>
         <ul>
            {namesList}
         </ul>
      </>
   );
};

export default IterationSample;