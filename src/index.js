// REACT 18
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import GifExpertApp from './Componentes/GifExpertApp';
// import './index.css';


// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(
//     <GifExpertApp />
//   );


import React from 'react';
import { render } from 'react-dom';
import GifExpertApp from './Componentes/GifExpertApp';
import './index.css';


const container = document.getElementById('root');
render(<GifExpertApp />, container);

