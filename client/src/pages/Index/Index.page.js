import React from 'react';

import HeaderComponent from '../../components/Header';
import MobileViewHeaderComponent from '../../components/MobileViewHeader';
import LandingComponent from './components/Landing.component';
import PopularCitiesComponent from './components/PopularCities.component';
import OffersComponent from './components/Offer.component';
import FooterComponent from '../../components/Footer';

function IndexPage() {

    return (
        <React.Fragment>
            <MobileViewHeaderComponent />
            <HeaderComponent />
            <LandingComponent />
            <PopularCitiesComponent />
            <OffersComponent />
            <FooterComponent />
        </React.Fragment>
    );
}


export default IndexPage;