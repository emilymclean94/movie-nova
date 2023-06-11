import React from "react";
import blue from "../Assets/blue.gif";

const commonStyles = {
  padding: "1rem",
  width: "100%",
};

const HeroLeft = () => {

  const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
    height: 80vh;

    @media (max-width: 767px) {
      height: 50vh;
      margin-bottom: 3.5rem;
    }
  `;

  const IMG = styled.img`
    max-height: 100%;
    max-width: 100%;
  `;

  return (
    <ImageContainer sx={commonStyles}>
      <IMG src={blue} className="blue" alt="cool" />
    </ImageContainer>
  );
};

const HeroRight = () => {

  const TextContainer = styled(Box)`
    display: flex;
    justify-content: flex-start;
    height: 80vh;

    @media (max-width: 767px) {
      margin-top: 3.0rem;
      height: 20vh;
    }
  `;

  const SubTitle = styled.h3`
    text-align: left;
    color: #808080;
    margin-top: 0.5rem;
    margin: 0;
    font-size: 2rem;

    @media (max-width: 767px) {
      margin-top: 0.4rem;
      font-size: 1rem;
    }
  `;

  const Title = styled.h3`
    text-align: left;
    color: white;
    margin: 0;
    font-size: 6rem;

    @media (max-width: 767px) {
      font-size: 1.5rem;
    }
  `;

  return (
    <TextContainer sx={commonStyles}>
      <Stack>
        <SubTitle>
          INTO THE
        </SubTitle>
        <Title>
          STREAMVERSE
        </Title>
      </Stack>
    </TextContainer>
  );
};

const Hero = () => {
  const AppContainer = styled(Box)`
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    background-color: black;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  `;

  const LeftContainer = styled(Box)`
    background-color: black;
    width: 100%;

    @media (min-width: 768px) {
      width: 50%;
    }
  `;

  const RightContainer = styled(Box)`
    background-color: black;
    width: 100%;

    @media (min-width: 768px) {
      width: 50%;
    }
  `;

  return (
    <AppContainer>
      <LeftContainer>
        <HeroLeft />
      </LeftContainer>
      <RightContainer>
        <HeroRight />
      </RightContainer>
    </AppContainer>
  );
};

export default Hero;