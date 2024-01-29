import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import HeroImg from '../../images/IMG_5725.jpg';
import HeroBgAnimation from '../HeroBgAnimation';
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Image,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from './HeroStyle';

const Hero = () => {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id='Left'>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{ strings: Bio.roles, autoStart: true, loop: true }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='_blank'>
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer id='Right'>
            <Image src={HeroImg} alt='Hero' />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
