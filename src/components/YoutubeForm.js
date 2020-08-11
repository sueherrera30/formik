import React from 'react';
import { useFormik } from 'formik';

const YoutubeForm = () => {
// nos regresa un objeto que vamos a almacenar en una constante llamadda formik
// Este contiene las propiedades para manejar el estado de nuesstro form
 //1. pasa props inicial values
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    }
  })
  // 2. debemos cambiar el valor de la propiedaad incial de canda uno de los campos

  console.log('form values:', formik.values);
  return (
    <div className="Youtube-main-container">
      <form className="YoutubeForm">
        <label htmlFor='name'>Name</label>
        {/* usamos la propiedad handleChange que viene de los istanciado en formik */}
        {/* formik traera automaticamente los valores por nosotros. */}
        {/* el value del input debe corresponder la misma propuedad name del input */}
        <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

        <label htmlFor='name'>Email</label>
        <input type='email' id='email' name='email'onChange={formik.handleChange} value={formik.values.email} />

        <label htmlFor='name'>Channel</label>
        <input type='text' id='channel' name='channel'onChange={formik.handleChange} value={formik.values.channel}/>   
        <button className="submitButton">Submit</button>
      </form>
    </div>
  )
};

export default YoutubeForm;