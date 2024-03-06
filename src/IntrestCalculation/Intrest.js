import React from "react";

const Intrest = () => {
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label htmlFor="intrestType">Intrest Type :</label>
          <select name="intrestType" id="intrestType">
            <option value="simpleintrest">Simple Intrest</option>
            <option value="compound">Compund Intrest</option>
          </select>
        </div>
        <div className="inputDiv">
          <label htmlFor="principle">Principle Amount(Rs.)</label>
          <input type="number" id="principle" />
        </div>
        <div className="inputDiv">
          <label htmlFor="intrest"> Annual Rate of Intrest :</label>
          <input type="number" id="intrest" />
        </div>
        <div className="inputDiv">
          <label htmlFor="Period">Period Unit :</label>
          <select name="Period" id="Period">
            <option value="days">Days</option>
            <option value="Weeks">Weeks</option>
            <option value="months">Months</option>
            <option value="quaters">Quaters</option>
            <option value="years">Years</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Intrest;
