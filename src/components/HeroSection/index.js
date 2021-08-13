import React, {useState} from 'react'
import VideoHeroBg from '../../videos/HeroBg-2.mp4'
import { Button } from '../../components/ButtonElement'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight

} from './HeroElements'
const Hero = () => {

    const [hover, setHover] = useState(false);
    const onHover = ()=>{
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={VideoHeroBg} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking Make Easy
                </HeroH1>
                <HeroP>
                    Sing up for a new accoun today and receive $250 in credit towards your next payment
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        primary="true"
                        dark="true"
                        to="/signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
