
import Actividad3 from './Actividad3';
import './App.css';
import Actividad4 from './Actividad4';


function App() {



  const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12
    }
  ]
  return (
    <>
      <h1> Actividad 3:

      </h1>
      
      <Actividad3 reyes={reyes}/>
      <br/>
      <h1>Actividad 4</h1>

      <>
        <Actividad4 reyes={reyes}/>
        
    
      </>
   
      
     
     
    </>
     
  );
}

export default App;
