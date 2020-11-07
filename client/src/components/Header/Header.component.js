import React from 'react';


import images from '../../utils/image.util';
import icons from '../../utils/icons.util';
import strings from '../../utils/string.util';

function HeaderComponent() {

    var { baseUrl, logo } = images;
    var { class: { facebook, google, twitter } } = icons;
    var { header: { address, phone, sign_up, sign_in, nav_links: { home, packages, profile, contact_us, about_us } } } = strings;

    return (
        <section style={styles.container}>
            <div className="ed-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ed-com-t1-left">
                                <ul>
                                    <li><a href="#">Contact: {address}</a>
                                    </li>
                                    <li><a href="#">Phone: {phone}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="ed-com-t1-right">
                                <ul>
                                    <li><a href="login.html">{sign_in}</a>
                                    </li>
                                    <li><a href="register.html">{sign_up}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="ed-com-t1-social">
                                <ul>
                                    <li><a href="#"><i className={facebook} aria-hidden="true"></i></a>
                                    </li>
                                    <li><a href="#"><i className={google} aria-hidden="true"></i></a>
                                    </li>
                                    <li><a href="#"><i className={twitter} aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-logo" data-spy="affix" data-offset-top="250">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="wed-logo">
                                <a href="main.html"><img src={baseUrl + logo} alt="" />
                                </a>
                            </div>
                            <div className="main-menu">
                                <ul>
                                    <li><a href="main.html">{home}</a>
                                    </li>
                                    <li className="about-menu">
                                        <a href="family-package.html" className="mm-arr">{packages}</a>
                                    </li>
                                    <li><a href="dashboard.html">{profile}</a>
                                    </li>
                                    <li><a href="contact.html">{about_us}</a>
                                    </li>
                                    <li><a href="contact.html">{contact_us}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


var styles = {
    container: {
        background: 'black'
    }
};


export default HeaderComponent;