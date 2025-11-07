import React from 'react'
import Brokerage from './Brokerage';
import Hero from './Hero';
import OpenAccount from "../OpenAccount";

function PricingPage() {
    return (  
        <div>
            <Hero></Hero>
            <OpenAccount/>
            <Brokerage></Brokerage>
        </div>
        
    );
}

export default PricingPage;