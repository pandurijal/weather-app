import React, { Component } from "react";

const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input name="cityName" placeholder="Input City" />
      {/* <input name="countryName" placeholder="Input Country" /> */}
      <button>Get Weather!</button>
    </form>
  );
};

export default Form;
