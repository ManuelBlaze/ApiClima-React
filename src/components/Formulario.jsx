import React, {useState} from 'react'

const Formulario = () => {

    //state form
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

    //state del error
    const [error, setError] = useState(false)

    //Extraer cudad y pais
    const {ciudad, pais} = busqueda;

    //Colocar los elemntos en el state
    const handleChange = e => {
        //actualizar el state
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    //Funcion del submit
    const handleSubmit = e => {
        e.preventDefault();

        //validar
        if (ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        //Pasar al componente principal
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <p className="red darken-4 error">Todos los campos son obligatorios</p> : null}

            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"    
                    id="ciudad" 
                    value={ciudad} 
                    onChange={handleChange}  
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select 
                    name="pais" 
                    id="pais"
                    value={pais}   
                    onChange={handleChange}  
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="CO">Colombia</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>

                </select>
                <label htmlFor="pais">País: </label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12 btn"
                >Buscar Clima</button>
            </div>
        </form>
    );
}

export default Formulario;