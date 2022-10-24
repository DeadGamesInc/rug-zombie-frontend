import React, { useEffect, useState } from 'react'
import { PrimaryButtonText } from 'components/Buttons'
import numeral from 'numeral'
import { getZombieAddress } from 'utils/addressHelpers'
import { useInView } from "react-intersection-observer";
import '../Components.Styles.css'

import styled from "styled-components";
import { LinkExternal } from "@rug-zombie-libs/uikit";
import {
  ButtonsDiv,
  HeroContainer,
  HeroContent,
  PrimaryLinkButton,
  StakeNowButton,
  StakeNowButtonText,
  SubTextBox,
  TitleTextBox,
  TvlNumber,
  TvlText,
  AnnouncementTitle,
  LaunchText,
  WhatsNewText,
  TimerText,
  Separator
} from './styles'
import { BASE_EXCHANGE_URL } from '../../../../config'
import { formatDuration, now } from "../../../../utils/timerHelpers";
import { CLASS_USER_ACTION_NEEDED, getTier } from "../../../CardItem/NftTimerCardItem";

const AnnouncementCard = styled.div`
  background: rgba(0, 0, 0, 0.9);
  max-width: 520px;
  border-radius: 10px;
  border: 2px solid #AE32AA;
  padding: 10px;
  margin: 50px auto auto auto;
  @media (max-width: 1175px) {
    margin: 50px auto auto auto;
  }
  @media (max-width: 500px) {
    margin: 50px 10px auto 10px;
  }
`

interface HeroProps {
  tvl: any
  history: any
}

const Hero: React.FC<HeroProps> = ({ tvl, history }) => {
  const { ref, inView, entry } = useInView();
  const launch = 1666393199
  const [remaining, setRemaining] = useState(0);

  const updateTimer = () => {
    setRemaining(launch - now())
  }

  useEffect(() => {
    if(remaining === 0) setInterval(updateTimer, 1000)
  }, [])

  return (
    <HeroContainer>
      <div>
        <HeroContent ref={ref}
                     className={entry?.boundingClientRect?.top > 100 || !entry?.boundingClientRect?.top ? `fade-in-section ${inView ? 'is-visible' : ''}` : ''}>
          <TitleTextBox>Resurrect Your Dead Tokens</TitleTextBox>
          <SubTextBox>
            Turn your worthless tokens into assets. RugZombie is introducing the next generation of NFT utility, with
            GameFi, E-Commerce and metaverse features.
          </SubTextBox>
          <TvlText>Total value locked:</TvlText>
          <TvlNumber>&nbsp;{`$${numeral(tvl).format('(0.00 a)')}`}</TvlNumber>
          <ButtonsDiv>
            <PrimaryLinkButton
              onClick={() => {
                window.location.href = `${BASE_EXCHANGE_URL}/swap?outputCurrency=${getZombieAddress()}`
              }}
            >
              <PrimaryButtonText>Buy $ZMBE</PrimaryButtonText>
            </PrimaryLinkButton>
            <PrimaryLinkButton
              onClick={() => {
                history.push('/graveyard')
              }}
            >
              <PrimaryButtonText>View NFTs</PrimaryButtonText>
            </PrimaryLinkButton>
            <StakeNowButton
              onClick={() => {
                history.push('/graves')
              }}
            >
              <StakeNowButtonText>Stake Now</StakeNowButtonText>
            </StakeNowButton>
          </ButtonsDiv>
        </HeroContent>
      </div>
      <AnnouncementCard
        className={entry?.boundingClientRect?.top > 100 || !entry?.boundingClientRect?.top ? `fade-in-section ${inView ? 'is-visible' : ''}` : ''}>
        <AnnouncementTitle>Bear Market Dev Notes</AnnouncementTitle>
        <SubTextBox style={{ fontSize: "18px" }}>
          The RugZombie / Dead Games team builds regardless of the current market, a special thanks to
          everyone sticking with us.
        </SubTextBox>
        <WhatsNewText>Whats new?</WhatsNewText>
        <Separator/>
        <SubTextBox style={{ color: "#AE32AA", textAlign: "center" }}>
          Start your journey in the RugZombie universe with the PØ minigame.
          <LinkExternal style={{ margin: "auto" }}
                        href="https://patientzero.rugzombie.io/">
            PLAY NOW
          </LinkExternal></SubTextBox>
        <LinkExternal style={{ margin: "auto" }}
                      href="https://rugzombie.medium.com/patient-zero-major-updates-9-23-22-43d4bd4a7656">
          PATIENT ZERØ MAJOR UPDATES
        </LinkExternal>
        <Separator/>
        <LaunchText>
          ZOM BETA LAUNCH
        </LaunchText>
        <LinkExternal href="https://zom.rugzombie.io/"
                      style={{ margin: "auto", paddingBottom: "10px", fontSize: "18px" }}
                      className={CLASS_USER_ACTION_NEEDED}>
          PLAY NOW
        </LinkExternal>

        <LinkExternal style={{ margin: "auto" }}
                      href="https://www.oblivion.art/zom">
          Get early access
        </LinkExternal>
        <LinkExternal style={{ margin: "auto" }}
                      href="https://rugzombie.medium.com/rugzombie-releasing-ambitious-web3-gaming-project-on-bnbchain-b4093e58b69e">
          Read more
        </LinkExternal>
      </AnnouncementCard>
    </HeroContainer>
  )
}

export default Hero
