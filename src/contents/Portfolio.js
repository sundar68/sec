import React, { Component } from 'react';
import project1 from '../img/certificate.jpg';
import project2 from '../img/git.gif';
import project3 from '../img/code.png';
import project4 from '../img/logo.jpg';
import Navitem from "../components/Navitem";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }
  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };

  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Work</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div class="port_out port1">
          <div class="port_in">
              <Navitem
                  item="Certifications"
                  tolink="/certificate"
                  activec={this.activeitem} >
                  <img src={project1} alt="certificates" className="po2"></img>
              </Navitem>   
          </div>
        </div>
        <div class="port_out port2">
          <div class="port_in">
          <a href="https://github.com/sundar68?tab=repositories" target="_blank" rel="noreferrer"><img src={project2} alt="github"
                className="po1"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port3">
          <div class="port_in">
          <a href="https://codeforces.com/profile/sundar248" target="_blank" rel="noreferrer"><img src={project3} alt="codeforces" className="po1"></img></a>
          </div>
        </div>
        <div class="port_out port4">
          <div class="port_in">
          <a href="https://github.com/enviro-promise/enviropromise" target="_blank" rel="noreferrer"><img src={project4}alt="enviropromise" className="po1"></img></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;