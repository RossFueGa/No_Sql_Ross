import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';


//Importar Componentes
import MyComponent from './Components/MyComponent';





function Helloword(name , age){
  var presentation = <div>
   <h2>Salut! Je m'appelle  {name}</h2>
    <h3>J'ai {age} ans</h3>
  </div>
  
  
  return presentation ;
}




function App() {
 var name = "Ross García";



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Bonjour à tous :)
        </p>
     {Helloword(name ,21)}

       
      </header>
      <section  className="components">

      <MyComponent/>
      <MyComponent/>


      </section>
    </div>
  );
}

export default App;
