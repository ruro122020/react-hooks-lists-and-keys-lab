import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let keyCounter = 0;
  return (
  <nav>
    {/* display an <a> tag for each link here */}
    {links.map(link => <a key={keyCounter++} href={`#${link}`}>{link}</a>)}
  </nav>
  )
}

export default NavBar;
