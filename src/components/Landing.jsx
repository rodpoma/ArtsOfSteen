import React from "react";
import mainLogo from "../Assets/Artboard 10.png";
import {Link as ScrollLink} from "react-scroll";

const Landing = () => {
  return (
    <div className="homepage">
      <section className="landing1">
        <p className="landingTitle">
          Welcome To <br /> My World! <br />
          <ScrollLink
            to="landing2"
            smooth={true}
            style={{color: "#61f2ff", fontSize: "2vw"}}
          >
            <b>Check Out Featured Items!</b>
          </ScrollLink>
        </p>

        <img
          src={mainLogo}
          alt="mainLogo"
          style={{
            height: "50vh",
            width: "auto",
          }}
        />
      </section>
      <section className="landing2">
        <div className="mt-5">
          <h1 className="displayTitle">Featured Work</h1>
          <div className="workDisplay">
            <img src={mainLogo} alt="mainLogo" className="work" />
            <img src={mainLogo} alt="mainLogo" className="work" />
            <img src={mainLogo} alt="mainLogo" className="work" />
            <img src={mainLogo} alt="mainLogo" className="work" />
          </div>
          <h1 className="displayTitle">Featured Inventory</h1>
          <div className="workDisplay">
            <img src={mainLogo} alt="mainLogo" className="work" />
            <img src={mainLogo} alt="mainLogo" className="work" />
            <img src={mainLogo} alt="mainLogo" className="work" />
            <img src={mainLogo} alt="mainLogo" className="work" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
