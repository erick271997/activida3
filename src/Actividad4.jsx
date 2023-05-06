import React from "react";

function Actividad4({ reyes }) {
  

  function sumar(e){
    ++e.target.innerHTML;
  }
    
  
 const resultado=reyes.filter(e => e.reinado>10 &&
  e.vacasComidas>10).map(e=> <div key={e.nombre}>{e.nombre}
  <div className="numero" onClick={sumar}> 0 </div>
  </div>)
  // el codigo para que filter los rey que tenga reiando mas 10 y haya comido mas 10 vacas

   const resultado2=reyes.filter(e => e.reinado<10 &&
    e.vacasComidas<10).map(e=> <div key={e.nombre}>{e.nombre}
    <div className="numero" onClick={sumar}> 0 </div>
    </div>)
//  este codio hace lo contrario del arriba
  return (
  <>
{resultado }
<>
<h2>otro ejemplo</h2>
 {  resultado2}
</>



     </>
  );
}

export default Actividad4;
