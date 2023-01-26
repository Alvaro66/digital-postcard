import logo from './logo.svg';
import './App.css';
import Simbolo from './images/Logo5.png';

function App() {
  return (



    
    <div className="App">
      <header className="App-header">
        
      <div className="pepito" style={{"color":"black","max-width":"400px","background":"white","margin-left":"auto","margin-right":"auto","border-width":"1px","border-style":"solid","border-color":"lightgray"}}>
        {/* 1er bloque */}
        <div>
          <div style={{"float":"left","padding":"10px"}}>
            <h1>My Postcard</h1>
          </div>
          <div style={{"float":"right"}}>
            <img src={Simbolo} alt="Girl in a jacket" style={{"max-width":"80px","margin-top":"30px"}} /> 
          </div>
          <div style={{"clear":"both"}} />	
        </div>
        {/* 2o bloque va a contener 2 columnas */}
        <div>
          {/* la columna del texto */}
          <div style={{"float":"left","width":"calc( 50% - 20px )","padding":"10px"}}>
            Look how awesome! This is a postcard 
            that i created using html5 and css3 
            during my 4Geeks Academy Course !<br />
            <br />
            This is so cool, can't wait to start 
            doing more stuff!
          </div>	
          {/* la columna de los input text */}
          <div style={{"float":"left","width":"calc( 50% - 20px )","padding":"10px"}}>
            <input id="name" name="name" type="text" placeholder="Some Name" /><br />
            <input id="email" name="email" type="text" placeholder="Some Email" /><br />
            <input id="comment" name="comment" type="text" placeholder="Some Comment" />
          </div>	
          <div style={{"clear":"both"}} />	
        </div>
        {/* 3er bloque para el botón */}
        <div style={{"-webkit-text-align":"center","text-align":"center","padding":"10px"}}>
          <button type="button">Send My Postcard</button>
        </div>
      </div>

      </header>
    </div>
  );
}

export default App;
