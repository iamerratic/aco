import React from 'react';

import strings from '../../../utils/string.util';
import images from '../../../utils/image.util';

function OffersComponent() {

    var { index_page: { offers: { heading, price, facilities: { free_wifi, free_electricity, free_laundry, free_covid_Kit } } } } = strings;
    var { baseUrl, index_page: { offers: { facilities: { wifi_img, breakfast_img, television_img, gym_img } } } } = images;

    return (
        <section>
            <div className="offer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="offer-l"> <span className="ol-1"></span> <span className="ol-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span> <span className="ol-4">{heading}</span>                            <span className="ol-3"></span> <span className="ol-5">{price}</span>
                                <ul>
                                    <li className="wow fadeInUp" data-wow-duration="0.5s">
                                        <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img src={baseUrl + wifi_img} alt="" />
                                        </a><span>{free_wifi}</span>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-duration="0.7s">
                                        <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img src={baseUrl + breakfast_img} alt="" /> </a><span>{free_electricity}</span>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-duration="1.1s">
                                        <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img src={baseUrl + television_img} alt="" /> </a><span>{free_laundry}</span>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-duration="1.3s">
                                        <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img src={baseUrl + gym_img} alt="" /> </a><span>{free_covid_Kit}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="offer-r">
                                <div className="or-1"> <span className="or-11">go</span> <span className="or-12">Stays</span> </div>
                                <div className="or-2"> <span className="or-21">Get</span> <span className="or-22">70%</span> <span className="or-23">Off</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default OffersComponent;