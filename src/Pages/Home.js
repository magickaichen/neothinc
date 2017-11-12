import React, { Component } from "react";
import { Container, Button } from 'semantic-ui-react';
import Particles from 'react-particles-js';
import Typist from 'react-typist';
import Logo from './Components/Logo.js';
import './Components/parts.css';
import { Card, Divider } from 'semantic-ui-react';

import ServiceCard from './ServiceCard';
import OurPartners from './OurPartners';
import Footer from './Components/Footer';

class Home extends React.Component {
    state = {
      typing: true,
    }
    done = () => {
      this.setState({ typing: false }, () => {
        this.setState({ typing: true })
      });
    }
    render() {
        return(
            <div>
                <div className="homeContainer">
                    <Container textAlign='center'>
                    <Logo />
                    <h1 className="Thinc-Header">THiNC TECHNOLOGY</h1>
                    <span className="Type-Header">
                    {this.state.typing
                      ? <Typist onTypingDone={this.done}>
                      <span className="Typed-Word">WEB</span>
                      <Typist.Backspace count={3} delay={1000} />
                      <span className="Typed-Word">MOBILE</span>
                      <Typist.Backspace count={6} delay={1500} />
                      <span className="Typed-Word">SOFTWARE</span>
                      <Typist.Backspace count={8} delay={2000} />
                    </Typist> : '' }
                    </span>
                    <Button className="getStartedButton">
                        Get Started
                    </Button>
                    </Container>
                    <div className="particles">
                        <Particles
                            params={
                                {
                                    "particles": {
                                    "number": {
                                        "value": 85,
                                        "density": {
                                        "enable": true,
                                        "value_area": 3500
                                        }
                                    },
                                    "color": {
                                        "value": "#ffffff"
                                    },
                                    "shape": {
                                        "type": "circle",
                                        "stroke": {
                                        "width": 0,
                                        "color": "#000000"
                                        },
                                        "polygon": {
                                        "nb_sides": 5
                                        },
                                        "image": {
                                        "src": "img/github.svg",
                                        "width": 100,
                                        "height": 100
                                        }
                                    },
                                    "opacity": {
                                        "value": 0.5,
                                        "random": false,
                                        "anim": {
                                        "enable": false,
                                        "speed": 1,
                                        "opacity_min": 0.1,
                                        "sync": false
                                        }
                                    },
                                    "size": {
                                        "value": 3,
                                        "random": true,
                                        "anim": {
                                        "enable": false,
                                        "speed": 40,
                                        "size_min": 0.1,
                                        "sync": false
                                        }
                                    },
                                    "line_linked": {
                                        "enable": true,
                                        "distance": 150,
                                        "color": "#ffffff",
                                        "opacity": 0.4,
                                        "width": 1
                                    },
                                    "move": {
                                        "enable": true,
                                        "speed": 6,
                                        "direction": "none",
                                        "random": false,
                                        "straight": false,
                                        "out_mode": "out",
                                        "bounce": false,
                                        "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                        }
                                    }
                                    },
                                    "interactivity": {
                                    "detect_on": "canvas",
                                    "events": {
                                        "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                        },
                                        "onclick": {
                                        "enable": true,
                                        "mode": "push"
                                        },
                                        "resize": true
                                    },
                                    "modes": {
                                        "grab": {
                                        "distance": 400,
                                        "line_linked": {
                                            "opacity": 1
                                        }
                                        },
                                        "bubble": {
                                        "distance": 400,
                                        "size": 40,
                                        "duration": 2,
                                        "opacity": 8,
                                        "speed": 3
                                        },
                                        "repulse": {
                                        "distance": 200,
                                        "duration": 0.4
                                        },
                                        "push": {
                                        "particles_nb": 4
                                        },
                                        "remove": {
                                        "particles_nb": 2
                                        }
                                    }
                                    },
                                    "retina_detect": true
                                }
                            }
                        />
                    </div>
                </div>
                {/* <div className="blogBox">
                    Insert Blog Information Component here
                    <Button className="blogBoxBtn">
                        Blog Updates
                    </Button>
                </div> */}
            <div className="homeContainerTwo">
                <div className="leftServiceContainer">
                    <div className = "homeTwoTitle">
                        <h1>OUR</h1>
                        <h2>SERVICES</h2>
                        <div className = "servicesDesc">
                            <p>WE HAVE THE BEST SHIT HERE </p>
                        </div>
                        <Button className = "servicesBtn">
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="rightServiceContainer">
                    {/* TODO: Cards go here */}
                    <ServiceCard />
                </div>
            </div>
                <div className="homeContainerThree">
                    <div className="partnerTitle">
                        <h1>OUR CLIENTS</h1>
                    </div>
                    <OurPartners />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home
