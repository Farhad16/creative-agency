import React from 'react';
import ClientFeedbacks from '../ClientFeedbacks/ClientFeedbacks';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Logos from '../Logos/Logos';
import OurWork from '../OurWork/OurWork';
import Services from '../Services/Services';


const Home = () => {


    return (
        <div>
            <Header></Header>
            <Logos></Logos>
            <Services></Services>
            <OurWork></OurWork>
            <ClientFeedbacks></ClientFeedbacks>
            <Footer></Footer>
        </div>
    );
};

export default Home;