import React from 'react';

import strings from '../../utils/string.util';

function FooterComponent() {

    var { footer: { holiday_tour_and_travels, address_and_contact_info, support_and_help, follow_with_us } } = strings;

    return (
        <React.Fragment>
            <section>
                <div className="rows">
                    <div className="footer" style={styles.container}>
                        <div className="container">
                            <div className="foot-sec2">
                                <div>
                                    <div className="row">
                                        <div className="col-sm-3 foot-spec foot-com">
                                            <h4>{holiday_tour_and_travels.name}</h4>
                                            <p>{holiday_tour_and_travels.content}</p>
                                        </div>
                                        <div className="col-sm-3 foot-spec foot-com">
                                            <h4>{address_and_contact_info.name}</h4>
                                            <p>{address_and_contact_info.content}</p>
                                            <p> <span className="strong">Phone: </span> <span className="highlighted">{address_and_contact_info.phone}</span> </p>
                                        </div>
                                        <div className="col-sm-3 col-md-3 foot-spec foot-com">
                                            <h4>{support_and_help.name}</h4>
                                            {(function () {
                                                var { links: { about_us, discount, branding_offers, faq, blog, contact_us } } = support_and_help;
                                                return (
                                                    <ul className="two-columns">
                                                        <li> <a href="#">{about_us}</a> </li>
                                                        <li> <a href="#">{faq}</a> </li>
                                                        <li> <a href="#">{blog} </a> </li>
                                                        <li> <a href="#">{discount}</a> </li>
                                                        <li> <a href="#">{branding_offers} </a> </li>
                                                        <li> <a href="#">{contact_us}</a> </li>
                                                    </ul>
                                                );
                                            })()}
                                        </div>
                                        <div className="col-sm-3 foot-social foot-spec foot-com">
                                            <h4>{follow_with_us.name}</h4>
                                            <p>{follow_with_us.content}</p>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a> </li>
                                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a> </li>
                                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a> </li>
                                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a> </li>
                                                <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="rows copy">
                    <div className="container">
                        <p>{strings.copyright}</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

var styles = {
    container: {
        paddingTop: '5rem'
    }
};

export default FooterComponent;