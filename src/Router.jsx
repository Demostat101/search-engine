import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./Components/Home/Home";

import { useState } from "react";

import { SearchData } from "./Api/WordSearch";
import VoiceSearch from "./Components/VoiceSearch/VoiceSearch";
import SearchDisplay from "./Components/Display/Display";
import { ThemeProvider } from "./ThemeContext";

const Router = () => {
  const [search, setSearch] = useState("");
  const [googledData, setGoogledData] = useState({});

  const navigate = useNavigate();

  const searchsetter = async (word) => {
    setSearch(word);

    const Searchdata = await SearchData(word);
    setGoogledData(Searchdata);

    navigate("/search");
    // console.log(googledData);
  };

  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home searchsetter={searchsetter} />} />
          {search !== "" ? (
            <Route
              path="/search"
              element={
                <SearchDisplay
                  search={search}
                  googledData={googledData}
                  searchsetter={searchsetter}
                />
              }
            />
          ) : null}

          {/* <Redirect to="/"/> */}
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default Router;
