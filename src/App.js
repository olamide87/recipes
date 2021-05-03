import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = '0fafdf64';
  const APP_KEY = '6ae93647b5822164e497868ab433b2e7';

  // eslint-disable-next-line no-template-curly-in-string
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const[counter, setCounter] =useState(0);

  useEffect(() =>{
    console.log('Effect has been run');
  });







  return(
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar type=' type='text' />
        <button onClick={() => setCounter(counter + 1)} className='search-button' type='submit'>{counter}</button>
      </form>
    </div>
  );
};

export default App;
