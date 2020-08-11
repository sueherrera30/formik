import React from 'react';

const YoutubeForm = () => {
  return (
    <div className="Youtube-main-container">
      <form className="YoutubeForm">
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' />

        <label htmlFor='name'>Email</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='name'>Channel</label>
        <input type='text' id='channel' name='channel' />
        
        <button className="submitButton">Submit</button>
      </form>
    </div>
  )
};

export default YoutubeForm;