import React from 'react';
import CustomerFeedbacks from '../CustomerFeedbacks/CustomerFeedbacks';
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
            <CustomerFeedbacks></CustomerFeedbacks>
            <Footer></Footer>
        </div>
    );
};

export default Home;