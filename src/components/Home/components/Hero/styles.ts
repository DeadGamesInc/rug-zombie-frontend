import styled from 'styled-components'
import { PrimaryButton, SecondaryButton, SecondaryButtonText } from 'components/Buttons'
import HeroImage from 'images/backgrounds/home-section-1-background.svg'

export const HeroContainer = styled.section`
  min-height: 100vh;
  max-width: 1920px;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #000000;
  display: flex;
  flex-wrap: wrap;
`

export const HeroContent = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 16vw;
  padding-top: 8vw;
  flex-wrap: wrap;
  max-width: 55vw;
  @media (max-width: 795px) {
    max-width: 90vw;
  }
  @media (max-width: 387px) {
    max-width: 95vw;
  }
`

export const TitleTextBox = styled.h1`
  padding: 2vh 0 1vh 0;
  text-align: left;
  font: normal normal 600 60px/72px Poppins, SemiBold;
  letter-spacing: 0px;
  color: #ffffff;
  @media (max-width: 420px) {
    font: normal normal 600 50px/72px Poppins, SemiBold;
  }
`

export const SubTextBox = styled.div`
  text-align: left;
  font: normal normal 300 20px/36px Poppins;
  letter-spacing: 0px;
  color: #6b7682;
  margin: 1vw 0 1vw 0;
`

export const TvlText = styled.p`
  text-align: left;
  font: normal normal 300 20px/36px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  margin: 1vw 0 1vw 0;
`

export const TvlNumber = styled.p`
  text-align: left;
  font: normal normal 300 36px/36px Poppins;
  letter-spacing: 0px;
  color: #30c00d;
  margin: 1vw 0 0 0;
`

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const PrimaryLinkButton = styled(PrimaryButton)`
  margin: 0.5vw 0.5vw 0.5vw 0.5vw;

  &:hover {
    cursor: pointer;
  }
`

export const StakeNowButton = styled(SecondaryButton)`
  margin: 0.5vw 0.5vw 0.5vw 0.5vw;

  &:hover {
    cursor: pointer;
  }
`

export const StakeNowButtonText = styled(SecondaryButtonText)`
  &:hover {
    text-shadow: 0 0 5px white;
  }
`

export const AnnouncementTitle = styled(TitleTextBox)`
  font-size: 36px;
`

export const LaunchText = styled(SubTextBox)`
  color: #AE32AA;
  text-align: center;
  font-weight: bold;
`

export const WhatsNewText = styled(LaunchText)`
  color: white;
  font: normal normal 300 20px/36px Poppins;
  margin: 0;
`

export const TimerText = styled(SubTextBox)`
  color: #AE32AA;
  text-align: center;
  font-weight: bold;
`

export const Separator = styled.div`
  height: 0px;
  border: 1px dashed #6b7682;
  margin: 25px 0 0 0;
`