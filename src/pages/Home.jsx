import React, { useState } from "react";
import Accounts from "../components/Accounts";
// import NavBar from "../components/NavBar";
function Home() {
  const [isCheckboxListVisible, setIsCheckboxListVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const toggleCheckboxListVisibility = () => {
    setIsCheckboxListVisible(!isCheckboxListVisible);
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-4">
      <button onClick={toggleCheckboxListVisibility} className="btn-primary">
        {isCheckboxListVisible ? "Hide Account List" : "Show Account List"}
      </button>
      {isCheckboxListVisible && <Accounts />}
      <input placeholder="Stock" />
      <input placeholder="Amount" type="number" />
      <div className=" flex items-center gap-8">
      <div className=" flex items-center gap-1">
        <input
          type="radio"
          value="Sell"
          checked={selectedOption === "Sell"}
          onChange={handleOptionChange}
        />
        <label>Sell</label>
      </div>
      <div className=" flex items-center gap-1">
        <input
          type="radio"
          value="Buy"
          checked={selectedOption === "Buy"}
          onChange={handleOptionChange}
        />
        <label>Buy</label>
      </div>
      </div>
      {/* <input placeholder={selectedOption?selectedOption:"Select buy or sell "} type="number" /> */}
      <button className="btn-primary">Start Process</button>
    </div>
  );
}

export default Home;
