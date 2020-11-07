import React from 'react';

import images from '../../utils/image.util';

function MobileViewHeaderComponent() {

    var { baseUrl, logo } = images;

    return (
        <section>
            <div className="ed-mob-menu">
                <div className="ed-mob-menu-con">
                    <div className="ed-mm-left">
                        <div className="wed-logo">
                            <a href="main.html"><img src={baseUrl + logo} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="ed-mm-right">
                        <div className="ed-mm-menu">
                            <a href="#!" className="ed-micon"><i className="fa fa-bars"></i></a>
                            <div className="ed-mm-inn">
                                <a href="#!" className="ed-mi-close"><i className="fa fa-times"></i></a>
                                <h4>Home pages</h4>
                                <ul>
                                    <li><a href="booking-all.html">Home page 1</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default MobileViewHeaderComponent;