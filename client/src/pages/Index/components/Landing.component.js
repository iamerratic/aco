import React from 'react';

import strings from '../../../utils/string.util';
import images from '../../../utils/image.util';

var { baseUrl, index_page: { landing: { main } } } = images;

function LandingComponent() {

    var { index_page: { heading, sub_heading, search: { main_search, sub_search, button }, cities } } = strings;

    var { index_page: { landing } } = images;

    return (
        <section>
            <div className="tourz-search" style={styles.landing_container}>
                <div className="container">
                    <div className="row">
                        <div className="tourz-search-1">
                            <h1>{heading}</h1>
                            <p>{sub_heading}</p>
                            <form className="tourz-search-form">
                                <div className="input-field">
                                    <input type="text" id="select-city" className="autocomplete" />
                                    <label for="select-city">{main_search}</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" id="select-search" className="autocomplete" />
                                    <label for="select-search" className="search-hotel-type">{sub_search}</label>
                                </div>
                                <div className="input-field">
                                    <input type="submit" value={button} className="waves-effect waves-light" id="tourz-sear-btn" /> </div>
                            </form>
                            <div className="tourz-hom-ser">
                                <ul>
                                    <li>
                                        <a href="booking-tour-package.html" className="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp" data-wow-duration="0.5s"><img src={baseUrl + landing.cities.bengaluru} alt="" /> {cities.bengaluru}</a>
                                    </li>
                                    <li>
                                        <a href="booking-flight.html" className="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp" data-wow-duration="1s"><img src={baseUrl + landing.cities.dehradun} alt="" /> {cities.dehradun}</a>
                                    </li>
                                    <li>
                                        <a href="booking-car-rentals.html" className="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp" data-wow-duration="1.5s"><img src={baseUrl + landing.cities.delhi} alt="" /> {cities.delhi}</a>
                                    </li>
                                    <li>
                                        <a href="booking-hotel.html" className="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp" data-wow-duration="2s"><img src={baseUrl + landing.cities.hyderabad} alt="" /> {cities.hyderabad}</a>
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
    landing_container: {
        background: `url(${baseUrl + main}) no-repeat`
    }
};

export default LandingComponent;