import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contacto() {

  const {register, handleSubmit} = useForm();

  const enviar = (data) => {
    console.log(data);
    
  }

  return (
    <div className='container'>
      <h1 className='main-title'>Contacto</h1>
      <form className='formulario' onSubmit={handleSubmit(enviar)}>
        <input type='text' placeholder='Ingresa tu nombre'  {...register("nombre")} />
        <input type='email' placeholder='Ingresa tu e-mail' {...register("email")} />
        <input type='phone' placeholder='Ingresa tu telefono'{...register("telefono")} />
        <button className='enviar' type='submit'>Enviar</button>
      </form>
    </div>
  )
}
