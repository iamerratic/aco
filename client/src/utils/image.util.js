var imagePath = {
    baseUrl: process.env.PUBLIC_URL + '/static/images/',
    logo: 'logo.png',
    index_page: {
        landing: {
            main: 'landing.jpeg',
            cities: {
                dehradun: '',
                delhi: '',
                bengaluru: '',
                hyderabad: ''
            }
        },
        popular_cities: {
            dehradun: 'popular/dehradun.jpg',
            patna: 'popular/patna.jpg',
            pune: 'popular/pune.jpg',
            kota: 'popular/kota.jpg',
            bhopal: 'popular/bhopal.jpg',
        },
        offers: {
            facilities: {
                wifi_img: 'facilities/wifi.png',
                breakfast_img: 'facilities/breakfast.png',
                television_img: 'facilities/television.png',
                gym_img: 'facilities/gym.png',
            }
        }
    }
};


export default imagePath; 