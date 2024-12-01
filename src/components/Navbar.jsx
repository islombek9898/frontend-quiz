import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// LocalStroge
const toggleMode = () => {
  return localStorage.getItem("darkMode") || "light";
};

function Navbar() {
  const { title } = useParams();
  const [theme, setTheme] = useState(() => toggleMode());
  // theme toggle Fuction
  const handleThemeToggle = () => {
    const newTheme = theme === "dark-mode" ? "light" : "dark-mode";
    setTheme(newTheme);
  };
  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(theme);
    localStorage.setItem("darkMode", theme);
  }, [theme]);
  return (
    <header className="header">
      <div className="header-container container">
        <div>
          {title && (
            <Link to="/" className="header-logo">
              <figure>
                <img
                  src={`../assets/icon-${title.toLowerCase()}.svg`}
                  alt={`${title.icon}`}
                />
              </figure>
              <span>{title}</span>
            </Link>
          )}
        </div>
        <div>
          <label
            htmlFor="dark"
            className="dark-btn"
            onClick={handleThemeToggle}
          >
            <input type="checkbox" checked={theme === "dark-mode"} readOnly />
            <span>
              <span></span>
              <span></span>
            </span>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
