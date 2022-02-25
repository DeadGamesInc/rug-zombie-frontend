import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowDownIcon, Button, useModal } from '@rug-zombie-libs/uikit'
import SwiperCore, { Keyboard, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { BigNumber } from 'bignumber.js'
import MobileMenu from './components/MobileMenu'
import useSwiper from './hooks/useSwiper'
import { BIG_ZERO } from '../../utils/bigNumber'
import SoonRoundCard from './components/RoundCard/SoonRoundCard'
import IncreaseBidCard from './components/RoundCard/IncreaseBidCard'
import RoundCard from './components/RoundCard'
import MobileTopMenu from './components/MobileTopMenu'
import { auctionById } from '../../redux/get'
import PrizeModal from './PrizeModal'
import AuctionEndCard from './components/RoundCard/AuctionEndCard'

SwiperCore.use([Keyboard, Mousewheel])

const StyledSwiper = styled.div`
  .swiper-wrapper {
    align-items: center;
    display: flex;
  }

  .swiper-slide {
    width: 320px;
  }
`

const ChartPane = styled.div<{ isChartPaneOpen: boolean }>`
  height: ${({ isChartPaneOpen }) => (isChartPaneOpen ? '100%' : 0)};
  position: relative;
`

const ExpandChartButton = styled(Button)`
  background-color: ${({ theme }) => theme.card.background};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  color: ${({ theme }) => theme.colors.text};
  display: none;
  left: 32px;
  position: absolute;
  top: -32px;
  z-index: 50;

  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    background-color: ${({ theme }) => theme.card.background};
    opacity: 1;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    display: inline-flex;
  }
`

interface MobileProps {
  id: number
  userInfo: any
  aid: number
  setRefresh: any
  refresh: boolean
}

const Mobile: React.FC<MobileProps> = ({ refresh, setRefresh, userInfo, id }) => {
  const { setSwiper } = useSwiper()
  const [refreshMob, setRefreshMob] = useState(false)
  const {
    auctionInfo: { bids, lastBidId, endDate },
  } = auctionById(id)
  const toggleChartPane = null

  const [onPresentPrize] = useModal(<PrizeModal id={id} setSwiper={setSwiper} />)

  const refreshMobile = () => {
    onPresentPrize()
    setRefreshMob(!refreshMob)
  }

  const formattedBids = bids.map((bid, i) => {
    return {
      id: bid.id,
      amount: new BigNumber(bid.amount.toString()),
      bidder: bid.bidder,
      previousBidAmount: bids[i - 1] && bids[i - 1].amount ? new BigNumber(bids[i - 1].amount.toString()) : BIG_ZERO,
    }
  })

  return (
    <>
      <StyledSwiper style={{ width: '100%' }}>
        <MobileTopMenu userInfo={userInfo} />

        <Swiper
          initialSlide={3}
          onSwiper={setSwiper}
          spaceBetween={16}
          slidesPerView="auto"
          freeMode
          direction="vertical"
          freeModeSticky
          centeredSlides
          mousewheel
          keyboard
          resizeObserver
        >
          <SwiperSlide>
            <SoonRoundCard lastBidId={lastBidId} bidId={lastBidId + 1} id={id} />
          </SwiperSlide>
          {bids.length > 0 ? (
            <SwiperSlide>
              {Math.floor(Date.now() / 1000) > endDate ? (
                <AuctionEndCard
                  lastBid={formattedBids[bids.length - 1]}
                  id={id}
                  bidId={lastBidId + 1}
                  setRefresh={setRefresh}
                  refresh={refresh}
                />
              ) : (
                <IncreaseBidCard
                  lastBid={formattedBids[bids.length - 1]}
                  id={id}
                  bidId={lastBidId + 1}
                  setRefresh={setRefresh}
                  refresh={refresh}
                />
              )}
            </SwiperSlide>
          ) : null}
          {formattedBids.reverse().map((bid) => {
            return (
              <SwiperSlide key={bid.id}>
                <RoundCard bid={bid} id={id} bidId={bid.id} lastBidId={lastBidId} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </StyledSwiper>
      <div
        style={{
          position: 'fixed',
          zIndex: 100,
          bottom: '0',
          left: '0',
          width: '100%',
        }}
      >
        <ChartPane isChartPaneOpen={false}>
          <ExpandChartButton variant="tertiary" scale="sm" startIcon={<ArrowDownIcon />} onClick={toggleChartPane}>
            Auction details
          </ExpandChartButton>
        </ChartPane>
        <MobileMenu id={id} refreshMobile={refreshMobile} />
      </div>
    </>
  )
}

export default Mobile
