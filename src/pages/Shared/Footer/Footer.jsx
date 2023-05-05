import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer border border-black pt-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5>Navigation</h5>
            <ul className="links">
              <li><a href="/">Home</a></li>
              <li><Link to="/chef/1">Recipes</Link></li>
              <li><a href="#">Videos</a></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#"><FaFacebookSquare></FaFacebookSquare> Facebook</a></li>
              <li><a href="#"><FaTwitter></FaTwitter> Twitter</a></li>
              <li><a href="#"><FaInstagram></FaInstagram> Instagram</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Leave a Message</h5>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Enter your message" aria-label="Email Address" aria-describedby="submit-button" />
                <button className="btn btn-outline-primary" type="button" id="submit-button">Comment</button>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">&copy; {new Date().getFullYear()} Chinese Cuisine. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
