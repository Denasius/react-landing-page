import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.603310860523!2d27.590843515286924!3d53.92102473921141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfa4045bc38f%3A0x3c3d0871c4e257b5!2z0L_RgNC-0YHQv9C10LrRgiDQndC10LfQsNCy0LjRgdC40LzQvtGB0YLQuCA2NSwg0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1554032242902!5m2!1sru!2sby" 
        width="100%" 
        height="500px" 
        frameBorder="0"
        allowFullScreen
        title="qnique_location_property"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;