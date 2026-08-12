import {
  FaTrophy,
  FaFacebook,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="sports-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <FaTrophy /> SportsLeague
            </h4>

            <p>
              A complete platform for managing sports leagues,
              teams, players and matches.
            </p>
          </div>

          <div className="col-md-6 footer-social">
            <h5>Follow Us</h5>

            <div>
              <a href="#facebook" aria-label="Facebook">
                <FaFacebook />
              </a>

              <a href="#instagram" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#twitter" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          © 2026 SportsLeague. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;