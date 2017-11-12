import React, { Component } from "react";
import { Container, Button } from 'semantic-ui-react';
import Particles from 'react-particles-js';

class Home extends React.Component {
    render() {
        return(
            <div>
                <div className="homeContainer">
                    <Container textAlign='center'>
                    <h1>THiNC TECHNOLOGY</h1>
                    <h2>WEB MOBILE SOFTWARE</h2>
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
                <div className="blogBox">
                    Insert Blog Information Component here
                    <Button className="blogBoxBtn">
                        Blog Updates
                    </Button>
                </div>
                <div className="homeContainerTwo">
                    <Container className="homeTwoTitle">
                        <h1>OUR</h1>
                        <h2>SERVICES</h2>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home
