import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen mb-auto bg-gradient-to-b from-gray-500 to-blue-950 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl justify-center text-justify">
        As a dedicated student of software development, 
        I approache every learning opportunity with enthusiasm and commitment. With a Bachelor's Degree from Norton University, 
        I have cultivated a strong foundation in software engineering principles and programming languages. However, 
        what truly sets me apart is my insatiable appetite for knowledge. He embraces challenges as opportunities for growth, 
        constantly seeking out new technologies, techniques, and best practices to enhance his skills. 
        Sok Rithy's commitment to learning not only drives his personal and professional development 
        but also fuels his passion for innovation in the dynamic field of software development.
        </p>

      </div>
    </div>
  );
};

export default About;