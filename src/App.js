import React from 'react';
const App=(props)=>{

  return(
      <>
        <div className="div1">
          <div className="div2">
          <img src={props.imgs} alt=" " className="c1"></img>
          <div className="div3">
            <span className="c2">{props.title}</span>
            
            <h3 className="c3">{props.name}</h3>
            <a href={props.link} target="_blank">
            <button className="bu">Click</button>
            </a>
          </div>
          
          </div>
        </div>
      </>

  );

}

export default App;