import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import video from '../../videos/dataComplicated.mp4'
import { Button } from '../ButtonElements'


const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
    <HeroContainer id="home">
      <HeroBg>
          <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
          <HeroH1>The New NFT is Here</HeroH1>
          <HeroP>
              Sign up for a new account today and start your day.
          </HeroP>
          <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
                Get started {hover ? <ArrowForward/> : <ArrowRight/>}  
                </Button>
          </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
