import React from 'react';
import { useFormik } from 'formik';
import { JSEncrypt } from 'jsencrypt';

const pub_key = process.env.REACT_APP_PUB_KEY;
const priv_key = process.env.REACT_APP_PRIV_KEY;

const initialValues =  {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = values => {
  console.log('the message before', values);
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(pub_key);
  let encryptedLoginData = encrypt.encrypt(JSON.stringify(values));
  console.log('send to server <3', encryptedLoginData);

  const decrypt = new JSEncrypt();
  decrypt.setPrivateKey(priv_key);
  let serverGetData = decrypt.decrypt(encryptedLoginData);
  console.log('server GetData :o',JSON.parse(serverGetData));
};

const validate =  values => {
  let errors = {}
  if(!values.name) {
    errors.name = 'Required';
  }
  if(!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
       errors.email = 'Invalid email format';
   }
  if(!values.channel) {
    errors.channel = 'Required';
  }
  return errors;
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });


  return (
    <div className="Youtube-main-container">
      <form className="YoutubeForm" onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
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