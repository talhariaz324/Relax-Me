import React from "react";
import Title from "./Title.js";

export default function Services({ serviceState }) {
  // we can also define this receiving obj in this same file with same procedure as in app.js
  return (
    <section className="services">
      <Title title="Services" serviceState={serviceState} />
      <div className="services-center">
        {serviceState.map((item, index) => {
          return (
            <article key={index} className="service">
              {/* article is used to independent the contect from each other */}
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
