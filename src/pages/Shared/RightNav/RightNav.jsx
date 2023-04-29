import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightNav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <Button variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
        </div>
    );
};

export default RightNav;