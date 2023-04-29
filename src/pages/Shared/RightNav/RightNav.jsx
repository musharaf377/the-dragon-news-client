import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

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
                    <ListGroup.Item><FaFacebook /> Cras justo odio</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Morbi leo risus</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightNav;