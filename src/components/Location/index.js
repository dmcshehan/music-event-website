import React from "react";

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        title='Location map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19417.931226219964!2d13.343144477761907!3d52.52906635949488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851da5ed87d97%3A0xc85b1ffb144309e5!2sKonzerthaus+Berlin!5e0!3m2!1sen!2slk!4v1560588124700!5m2!1sen!2slk'
        width='100%'
        height='500px'
        frameBorder='0'
        style={{ border: 0 }}
        allowFullScreen
      />
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
