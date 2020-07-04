import React, {Fragment, useState, useEffect} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";


function App() {

  //state form
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, setConsultar] = useState(false);

  //Extraer cudad y pais
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {

      if (consultar) {
        
        const appId = '0376be35c4bd386bd74a16219e1f3d43';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
  
        console.log(resultado);
      }
    }

    consultarAPI();
  }, [ciudad, consultar, pais])

  return (
    <Fragment>
      <Header 
        titulo='Clima React App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
