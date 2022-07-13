import React from "react";

export default function Banner({ children, title, subtitle }) {
  // here we use children so that whatever we place in this or within component, it will get render e,g; are in home page, room page, and error page
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
