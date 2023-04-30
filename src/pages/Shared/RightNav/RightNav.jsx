import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzoon from '../Qzoon/Qzoon';
import banner from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <div>
                <h2>Login With</h2>
                <Button variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            </div>
            <div>
                <h2>Fine us on</h2>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzoon></Qzoon>

            <div>
                <img src={banner} alt="" />
            </div>
            
        </div>
    );
};

export default RightNav;