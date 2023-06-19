import React from "react";

const Section = (props) => {
  return (
    <section className={`app-section app-section${props.modifier}`}>
      {props.children}
    </section>
  );
};

export default Section;
