import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit data = () => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nome", { required: "Nome é obrigatório" })} />
      {errors.nome && <p>{errors.nome.message}</p>}
      
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
