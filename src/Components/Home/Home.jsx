import { useState } from "react";

import logo from "../../assets/images/sail_logo.jpg";

import { MdCancel } from "react-icons/md";
import "./Home.css";

import { BsSearch } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import VoiceSearch from "../VoiceSearch/VoiceSearch";
import { useTheme } from "../../ThemeContext";

const Home = ({ searchsetter }) => {
  const [input, setInput] = useState("");

  const [changeBg, setchangeBg] = useState(false);
  const [VoiceSearch, setVoiceSearch] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9]+[" "].*/.test(input)) {
      searchsetter(input);
    }
  };

  const ClearInput = () => {
    setInput("");
  };

  const VoiceSearchToggler = () => {
    setVoiceSearch((status) => !status);
    Recognition.start();
  };

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container1">
      <div>
        <div className="header">
          <img src={logo} alt="" className="logoIMG" />

          <h3 className="logoName">sail search engines</h3>

          <div className="toggle">
            {theme === "light" ? (
              <FaMoon
                className={theme === "dark" ? "dark" : ""}
                onClick={toggleTheme}
              />
            ) : (
              <FaSun
                className={theme === "light" ? "light" : ""}
                onClick={toggleTheme}
              />
            )}
          </div>
        </div>

        <hr />

        <div className="searchBody">
          <div className="firstBox">
            <button className="microPhoneIcone">
              {" "}
              <BsSearch />
            </button>

            <form onSubmit={SubmitHandler}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="input"
              ></input>
            </form>

            {input ? <MdCancel id="cancel" onClick={ClearInput} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
