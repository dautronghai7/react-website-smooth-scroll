import React from "react";
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import {
    ServicesContainer, 
    ServicesH1,
    ServiceWrapper,
    ServicesCard, 
    ServicesIcon,    
    ServicesH2,
    ServicesP,
} from './ServiceElements';
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServiceWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>
                        We help reduce your sess and increase your overall revenues.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>
                        You can access our platform online anywhere in the world. 
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>
                        Unlock our special membership card that returns 5% cash back.
                    </ServicesP>
                </ServicesCard>
                
            </ServiceWrapper>
        </ServicesContainer>
    );
};

export default Services;
