import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-content">
      <div className="about-item">
        <h1>What is Chef Hub?</h1>
        <p className="about-description">
          Chef Hub is a web application created by Jordan Kam. It solves the
          problem of not knowing what to cook when you have a few ingredients
          laying around.
        </p>
      </div>
      <div className="about-item">
        <h1>Why use Chef Hub?</h1>
        <p className="about-description">
          By using Chef Hub, it will save chefs at home time and energy when
          thinking about their next meal!
        </p>
      </div>

      <div className="about-item">
        <h1>Who is it for?</h1>
        <p className="about-description">
          Home chefs, husbands, wives, professional chefs, your dog, your kids,
          everyone!
        </p>
      </div>
    </div>
  );
};

export default About;
