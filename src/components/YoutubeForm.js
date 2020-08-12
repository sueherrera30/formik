import React from 'react';
import { useFormik } from 'formik';
import { JSEncrypt } from 'jsencrypt';

const pub_key='MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCV/2oXFKUOoXqxEGheZrrl+3KmU2zj0oP+rRDE+Cy5JEbMX1BGy3KLOZAgkpXyWlXgVCDEwMlsc1502ipGdWyq1cW4baV+wfxSVhR8jFT4dr+3lyJZgbDJTcFbVY8SwctKns9jtE8xRDWNXjJjY91xDFvpjiL6LkcuI1k5V9s8hQIDAQAB';

const priv_key='MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAJX/ahcUpQ6herEQaF5muuX7cqZTbOPSg/6tEMT4LLkkRsxfUEbLcos5kCCSlfJaVeBUIMTAyWxzXnTaKkZ1bKrVxbhtpX7B/FJWFHyMVPh2v7eXIlmBsMlNwVtVjxLBy0qez2O0TzFENY1eMmNj3XEMW+mOIvouRy4jWTlX2zyFAgMBAAECgYBRMFOrNIh2197CEmB7oF1PeH/BGWzaD6tUYTavdqk2eTU9D+Yyu5I/W6PwjYdOC6lp5/9on/Uml3esBh5Vzt9G8ICFSlZLBEhVqKvW3HvTrkVVFl5yTF81dB3ysr1sV24t5mphG5NIReT/w6LbIdiZ5phj7YM19QbllI0sul2nYQJBAMmaPzzMHDZqKhNCJVmTcuDKVoybUerPyHje5rFj7KmE54fcw+eV45QOLC7yjL2cIcMQjQJtFoJ80niIlRT6qn0CQQC+eIzDgP3WoxhtaybOvb0yiH10pWDl5hPwb23YaObpxgySJJqL1c20ciIc3SL2KTUjefpcyxpsQVRCdmTjEnCpAkEAt8qiaifedJE2yJXd/RraeSqd2tPiy4IgTmlPwVrKsATVG1xdUSyp7Bk7mJVRT68ebHoTQ6n2AoIPUwmZeCXJ9QJAaqKtFCtccdU/sMqjoG1jxi3aJvsLw8pK8XpBAj7AwLKriQpLJ+ycTOD1Ljm0ACLT6De7LkZbVa5BkTAdjW9eeQJAbHFi8WOsZfqvCgMNmQ1jlQgErmpUYoAlc+q4lV7eUIUAvLHOdrWgwK6eqVgozvznOJfZK9iVjtr/tzRrFyi4gw==';

const YoutubeForm = () => {

  const testingTest = "Hola james bond";

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

  // handleLoginClick = () => {
  //   const encrypt = new JSEncrypt()
  //   encrypt.setPublicKey(pub_key)

  //   let params = {
  //     account: this.account.value,
  //     password: this.password.value,
  //     date: new Date(),
  //     random:Math.random(5),
  //   }
  //   console.log(testingTest)
  //   let encryptedLoginData = encrypt.encrypt(JSON.stringify(testingTest))
  //   console.log('sendToServer :D', encryptedLoginData)

  //   // now on Server
  //   const decrypt = new JSEncrypt()
  //   decrypt.setPrivateKey(priv_key)
  //   let serverGetData = decrypt.decrypt(encryptedLoginData)
  //   console.log('serverGetData :o',JSON.parse(serverGetData))
  // }
 
  const encrypt = new JSEncrypt()
  encrypt.setPublicKey(pub_key)
  console.log(testingTest)
  let encryptedLoginData = encrypt.encrypt(JSON.stringify(testingTest))
  console.log('sendToServer :D', encryptedLoginData)

  // now on Server
  const decrypt = new JSEncrypt()
  decrypt.setPrivateKey(priv_key)
  let serverGetData = decrypt.decrypt(encryptedLoginData)
  console.log('serverGetData :o',JSON.parse(serverGetData))

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