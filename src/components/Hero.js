import React from "react";

export default function Hero({ children, hero }) {
  // here we use children so that whatever we place in this component, it will get render
  return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
  hero: "defaultHero",
};
