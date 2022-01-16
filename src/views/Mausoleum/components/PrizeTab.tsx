import React from 'react'
import { BaseLayout, Box, LinkExternal } from '@rug-zombie-libs/uikit'
import styled from 'styled-components'
import { getBalanceAmount } from '../../../utils/formatBalance'
import { auctionById, bnbPriceUsd } from '../../../redux/get'
import Video from '../../../components/Video'

const TableCards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;

  & > div {
    grid-column: span 12;
    width: 100%;
  }
`

interface PrizeTabProps {
  id: number
}

const PrizeTab:  React.FC<PrizeTabProps> = ({ id }) => {
  const { path, prize , prizeDescription, version, additionalDetails, type, artist: { twitter }, auctionInfo: { unlockFeeInBnb }} = auctionById(id)

  return (
    <Box overflow='hidden'>
      <TableCards>
        <div className='table-bottom'>
          <div className='w-95 mx-auto mt-3'>
            <div className='flex-grow'>
              <div className='rug-indetails'>
                <div className='direction-column imageColumn'>
                  <div className='sc-iwajpm dcRUtg'>
                    {type === 'image' ? (
                      <img src={path} alt='PRIZE' className='sc-cxNHIi bjMxQn' />
                    ) : (
                      <Video path={path} />
                    )}
                  </div>
                </div>
                <div className='direction-column'>
                  <span className='indetails-type'>{prize}</span>
                  <br />
                  <span className='indetails-title'>
                    Prize Details:
                  <span className='indetails-value'>
                    {prizeDescription}
                  </span>
                  </span>
                  <br />
                  <span className='indetails-title'>
                    <LinkExternal bold={false} small href={twitter}>
                      View NFT Artist
                    </LinkExternal>
                  </span>
                  {additionalDetails.map(({ url, name }) => {
                    return <>
                      <LinkExternal href={url}>
                        <br/>
                        {name}
                      </LinkExternal>
                      <br/>
                    </>
                  })}
                </div>
                { version !== 'v3' ? <div className='direction-column'>
                   <span className='indetails-type'>Unlock Fees: {getBalanceAmount(unlockFeeInBnb).toString()} BNB
                    ({Math.round(getBalanceAmount(unlockFeeInBnb).times(bnbPriceUsd()).toNumber() * 100) / 100} in USD)
                   </span>
                </div> : <div className='direction-column' /> }
              </div>
            </div>
          </div>
        </div>
      </TableCards>
    </Box>
  )
}

export default PrizeTab
