import React from "react";
import face from "../Assets/Artboard 1check2.png";

const About = () => {
  return (
    <div className="page">
      <div className="about">
        <div>
          <h1 className="title">About</h1>
          <p className="paragraph">
            ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
            ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
            ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
            ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
            ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
            ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
            ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
            ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
            ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
            ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
          </p>
        </div>

        <img
          src={face}
          alt="face"
          style={{
            height: "80vh",
            width: "auto",
            marginTop: "5vh",
            marginRight: "-15vh",
          }}
        />
      </div>
    </div>
  );
};

export default About;
