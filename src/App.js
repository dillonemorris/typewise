import React, { useState } from "react";
import classNames from "classnames";
import allFonts, { TYPES } from "./data/fonts";
import FontCard from "./FontCard";

const App = () => {
  const [filter, setFilter] = useState(TYPES.SANS);
  const fonts = allFonts.filter((font) => font.type === filter);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Typewise</h1>
        <p className="App-subheader">
          A curated assortment of the best Google Fonts.
        </p>

        <div className="navbar">
          <FilterTabs filter={filter} onFilterClick={setFilter} />
        </div>
      </header>

      <div className="card-container">
        {fonts.map((font) => {
          return <FontCard font={font} />;
        })}
      </div>
    </div>
  );
};

const FilterTabs = ({ filter, onFilterClick }) => {
  return Object.values(TYPES).map((type) => (
    <span
      key={type}
      className={classNames("navbar-item", {
        "navbar-item--active": filter === type,
      })}
      onClick={() => onFilterClick(type)}
    >
      {type}
    </span>
  ));
};

export default App;
