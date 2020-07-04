import React from 'react';
import PropTypes from 'prop-types';
import { primerMayuscula } from "../helpers";

const Clima = ({resultado}) => {

    //extraer los valores
    const {name, main, weather} = resultado;

    if (!name) return null;

    // Grados kelvin
    const kelvin = 273.15;
    const urlImg = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    
    return (  
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>{name}</h2>
                <div className="row center-align weather">
                    <div className="col s6">
                        <img src={urlImg} alt="Weather"/>
                    </div>
                    <div className="col s6 info-clima">
                        <h5>{weather[0].main}</h5>
                        <h5>{primerMayuscula(weather[0].description)}</h5>
                    </div>
                </div>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
                </p>
                <div className="row center-align">
                    <div className="col s6">
                        <p>Máxima: <br/>
                            {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
                        </p>
                    </div>
                    <div className="col s6">
                        <p>Mínima: <br/>
                            {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;