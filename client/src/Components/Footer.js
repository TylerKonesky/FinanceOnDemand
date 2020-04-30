import React, {Component} from 'react';
import {Link } from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <footer className="page-footer  blue-grey">
                <div className="container">
                    <div className="row">

                        <div className="col 16 s12">
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">More information that we will fill in later... Hooray... Yay for footers</p>

                        </div>

                        <div className="col 14 offset-12 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><Link className="grey-text text-lighten-3" to="/">Home</Link></li>
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