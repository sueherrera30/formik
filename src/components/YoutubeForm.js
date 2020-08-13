import React from 'react';
import { useFormik } from 'formik';
import { JSEncrypt } from 'jsencrypt';
import * as Yup from 'yup'

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

// const validate =  values => {
//   let errors = {}
//   if(!values.name) {
//     errors.name = 'Required';
//   }
//   if(!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//        errors.email = 'Invalid email format';
//    }
//   if(!values.channel) {
//     errors.channel = 'Required';
//   }
//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  channel: Yup.string().required('Required')
});

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate
    validationSchema,
  });

  // formik corre el objeto de validación
  console.log('values in form', formik.values );
  console.log('errors', formik.errors );
  console.log('visited fields', formik.touched );

  return (
    <div className="Youtube-main-container">
      <form className="YoutubeForm" onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null
          }
        </div>
        <div className="form-control">
          <label htmlFor='name'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.email &&formik.errors.email ? <div className="error">{formik.errors.email}</div> : null
          }
        </div>
        <div className="form-control">
          <label htmlFor='name'>Channel</label>
          <input
            type='text'
            id='channel'
            name='channel'
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.channel && formik.errors.channel ? <div  className="error">{formik.errors.channel}</div> : null
          } 
        </div>
        <button className="submitButton">Submit</button>
      </form>
    </div>
  )
};

export default YoutubeForm;
