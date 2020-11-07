import React from 'react';

import images from '../../../utils/image.util';
import strings from '../../../utils/string.util';

function PopularCitiesComponent() {

    var { baseUrl, index_page: { popular_cities: { dehradun, patna, pune, kota, bhopal } } } = images;
    var { index_page: { popular_cities: { heading, sub_heading, span_content, cities } } } = strings;

    return (
        <section style={styles.container}>
            <div className="rows tb-space pad-top-o pad-bot-redu">
                <div className="container">
                    <div className="spe-title">
                        <h2>{heading} <span>{span_content}</span> </h2>
                        <div className="title-line">
                            <div className="tl-1"></div>
                            <div className="tl-2"></div>
                            <div className="tl-3"></div>
                        </div>
                        <p>{sub_heading}</p>
                    </div>
                    <div className="col-md-6">
                        <a href="tour-details.html">
                            <div className="tour-mig-like-com">
                                <div className="tour-mig-lc-img"> <img src={baseUrl + dehradun} alt="" /> </div>
                                <div className="tour-mig-lc-con">
                                    <h5>{cities.dehradun}</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="tour-details.html">
                            <div className="tour-mig-like-com">
                                <div className="tour-mig-lc-img"> <img src={baseUrl + bhopal} alt="" /> </div>
                                <div className="tour-mig-lc-con tour-mig-lc-con2">
                                    <h5>{cities.bhopal}</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="tour-details.html">
                            <div className="tour-mig-like-com">
                                <div className="tour-mig-lc-img"> <img src={baseUrl + patna} alt="" /> </div>
                                <div className="tour-mig-lc-con tour-mig-lc-con2">
                                    <h5>{cities.patna}</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="tour-details.html">
                            <div className="tour-mig-like-com">
                                <div className="tour-mig-lc-img"> <img src={baseUrl + kota} alt="" /> </div>
                                <div className="tour-mig-lc-con tour-mig-lc-con2">
                                    <h5>{cities.kota}</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="tour-details.html">
                            <div className="tour-mig-like-com">
                                <div className="tour-mig-lc-img"> <img src={baseUrl + pune} alt="" /> </div>
                                <div className="tour-mig-lc-con tour-mig-lc-con2">
                                    <h5>{cities.pune}</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

var styles = {
    container: {
        marginTop: '5rem'
    }
};

export default PopularCitiesComponent;