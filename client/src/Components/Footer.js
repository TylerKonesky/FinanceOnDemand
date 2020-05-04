import React, {Component} from 'react';
import {Link } from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <footer className="page-footer  blue-grey">
                <div className="container">
                    <div className="row">

                        <div className="col 16 s12">
                            {/* <h5 className="white-text">Footer Content</h5> */}
                            <p className="grey-text text-lighten-4">The information from this website is not official guidance and we are not liable for any financial reprecussions</p>

                        </div>

                        <div className="col 14 offset-12 s12">
                            <ul>
                                <li><Link className="grey-text text-lighten-3" to="/">Home</Link></li>
                                <li><Link className="grey-text text-lighten-3" to="/contact">Contact Us</Link></li>
                                <li><Link className="grey-text text-lighten-3" to="/privacy">Privacy</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="footer-copyright">
                    <div className="container">
                        &copy; 2020 Copyright
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer