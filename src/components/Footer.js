import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from "react";


function Footer() {
    var [top, settop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                settop(true);
            } else {
                settop(false);
            }
        });
    }, []);

    function gotop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <Container fluid>
            <div className="copyright">&copy; 2022 Corporate. All Right Reserved.</div>
            <div className="socials">
                <ul>
                    <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            {
                top && (
                    <div className="go-top" onClick={gotop}></div>
                )
            }
        </Container>
    )
}

export default Footer;