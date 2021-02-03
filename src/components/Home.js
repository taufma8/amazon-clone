import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return(
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="">
            </img>
            <div className="home__row">
                <Product 
                    id={1}
                    title={"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"}
                    rating={5}
                    price={11.98}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg"
                />
                <Product 
                    id={12345}
                    title={"Instant Vortex Plus Air Fryer Oven 7 in 1 with Rotisserie, 10 Qt, EvenCrisp Technology"}
                    rating={4}
                    price={99.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81jwHvNBTmL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id={12345}
                    title={'Acer Chromebook Spin 311 Convertible Laptop, Intel Celeron N4020, 11.6" HD Touch, 4GB LPDDR4, 32GB eMMC, Gigabit Wi-Fi 5, Bluetooth 5.0, Google Chrome, CP311-2H-C679'}
                    rating={5}
                    price={289.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/71c5W9NxN5L._AC_SL1500_.jpg"
                />
                <Product 
                    id={12345}
                    title={"QIXING Women's Casual Open Front Cardigans Long Sleeve Chunky Knit Sweater Coat with Pockets"}
                    rating={3}
                    price={24.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81e80BoyQwL._AC_UY550_.jpg"
                />
                <Product 
                    id={12345}
                    title={"Echo Show 5 -- Smart display with Alexa – stay connected with video calling - Charcoal"}
                    rating={4}
                    price={44.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/61G86qzw%2BwL._AC_SL1000_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id={12345}
                    title={"Logitech C920x Pro HD Webcam"}
                    rating={2}
                    price={84.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home