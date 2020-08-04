import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Data from './Data';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
  <h1 className="hstyle">Welcome To My Image Gallary</h1>
  {Data.map(function ncard (val){
    return(
      <App 
        iname={val.iname}
        imgs={val.imgs}
        title={val.title}
        link={val.link}

    />
    );

  })}
   
  </>
  ,
  document.getElementById('root')
);


