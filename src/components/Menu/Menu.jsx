import React from "react";

//import styles from './styles.scss';

export default function Header() {
  return (
    <header className="menuBg">
      <div className="menu">
        <div className="menuLogo">
          <a href="/">iES2</a>
        </div>
        <nav className="menuNav">
          <ul>
            <li>
              <a href="https://github.com/tiagoalmeida93">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tiago-almeida-fullstack-developer">
                Linkedin
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
