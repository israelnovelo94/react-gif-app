import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  const [InputValue, setInputValue] = useState(''); //Enviamos string vacio para evitar el undefined y un error
  const handleInput = (e) => {
    setInputValue(e.target.value); //Actualizamos el valor del input
  }
  
  const handleSubmit = (e) => {
    e.preventDefault(); //prevenimos el refresh en la pagina
    if (InputValue.trim().length > 2) {
      setCategories(cats => [ InputValue, ...cats, ]);//Utilizamos la propiedad setCategories y añadimos el valor del input a la lista
      setInputValue('');
      
    }
  }
  return (
    <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={InputValue}
          onChange={handleInput}
        />
    </form>
  )
}
//Hacemos que la propiedad setCategorie sea obligatoria
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
