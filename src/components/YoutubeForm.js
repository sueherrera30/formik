import React from 'react';
import { useFormik } from 'formik';
import { JSEncrypt } from 'jsencrypt';


const YoutubeForm = () => {
  const message = 'Hello jaimito';
  const uri = process.env.PUBLIC_KEY;

//   const messageJson = JSON.stringify({
//     Message: message,
// });
// const encrypt = new jsencrypt.JSEncrypt();
const encrypt = new JSEncrypt();
encrypt.setPublicKey(uri);
// const  encryptedMessageJson = encrypt.encrypt(messageJson);
const  encryptedMessageJson = encrypt.encrypt(message);
const wrapperJson = JSON.stringify({ encryptedMessageJson });

console.log('encriptado', wrapperJson);

// nos regresa un objeto que vamos a almacenar en una constante llamadda formik
// Este contiene las propiedades para manejar el estado de nuesstro form
 //1. pasa props inicial values
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },
    onSubmit: values => {
      console.log('form data:', values);
    },
  })
  // 2. debemos cambiar el valor de la propiedaad incial de canda uno de los campos
  // value nos dará acceso al form data.
  // console.log('form values:', formik.values);

  // manejo de submit,son 2 pasos:
  //esspecificar evento de submit, que ya nos ayudará a manejarlo formik
  //2. teenemos que revisar el objeto que estamos pasando,agregamos a formik variable, propiedaad onsubmit
  // la cual recibirá automaticamente el stado del formulario automaticamente, el cuall recibe a values como aargumento,
  //usando una arrow fuction.
  return (
    <div className="Youtube-main-container">
      <form className="YoutubeForm" onSubmit={formik.handleSubmit}>
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