import React, { Component } from "react";
import "./DarkMode.css";

class DarkMode extends Component {
  state = {
    isDarkMode: false,
  };

  onClickButton = () => {
    this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }));
  };

  componentDidUpdate() {
    const { isDarkMode } = this.state;

    // Apply dark or light mode styles to the root element based on isDarkMode state
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    document.documentElement.classList.toggle("light-mode", !isDarkMode);
  }

  render() {
    const { isDarkMode } = this.state;
    const modeClassName = isDarkMode ? "dark-mode" : "light-mode";
    const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";

    return (
      <div className={`container ${modeClassName}`}>
        <button type="button" onClick={this.onClickButton} className="button">
          {buttonText}
        </button>
      </div>
    );
  }
}

export default DarkMode;
