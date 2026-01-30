import React from "react";

function Testimonial() {
  return (
    <div className="testimonial-container" >
      <img className="image-testimonial"
        src={"src/img/4Geeks-logo.jpg"} alt="Foto 4GeeksAcademy" />

      <div className="container-text">
        <p className="name-text1">4Geeks Academy</p>
        <p className="name-text2">El bootcamp Full Stack Software Developer de 4Geeks Academy,
          esta catalogado como uno de los 10 mejores bootcamps del año 2025</p>
      </div>
    </div>
  )
}

export default Testimonial;

