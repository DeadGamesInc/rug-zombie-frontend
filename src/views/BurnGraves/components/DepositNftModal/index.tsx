import React, { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Modal, Text } from '@rug-zombie-libs/uikit'
import { useDrBurnenstein, useERC721, useNftOwnership } from '../../../../hooks/useContract'
import useToast from '../../../../hooks/useToast'
import { useTranslation } from '../../../../contexts/Localization'
import { getAddress, getDrBurnensteinAddress, getNftSwapperAddress } from '../../../../utils/addressHelpers'
import { BIG_ZERO } from '../../../../utils/bigNumber'
import useTheme from '../../../../hooks/useTheme'
import { useGetBurnGraves, useGetNftById } from '../../../../state/hooks'
import { getId } from "../../../../utils";
import { useWeb3React } from "@web3-react/core";

export interface DepositNftModalProps {
  id: number
  updateResult: any
  onDismiss?: () => void
}

const DepositNftModal: React.FC<DepositNftModalProps> = ({ id, updateResult, onDismiss }) => {
  const { account } = useWeb3React()
  const [nftBalance, setNftBalance] = useState(BIG_ZERO)
  const [ids, setIds] = useState([])
  const [selected, setSelected] = useState(null)
  const [approved, setApproved] = useState(false)

  const { theme } = useTheme()

  const drburn = useDrBurnenstein()
  const grave = useGetBurnGraves().data.find(bg => getId(bg.pid) === id)
  const nft = useGetNftById(grave.depositNftId)

  const { toastDefault } = useToast()
  const { t } = useTranslation()

  const nftOwnershipContract = useNftOwnership()
  const nftContract = useERC721(getAddress(nft.address))

  useEffect(() => {
    if (selected && account) {
      nftContract.methods
        .getApproved(selected)
        .call()
        .then((res) => {
          setApproved(res === getNftSwapperAddress())
        })
    }
  }, [selected, account, nftContract.methods])

  useEffect(() => {
    if (account) {
      nftContract.methods
        .balanceOf(account)
        .call()
        .then((res) => {
          setNftBalance(new BigNumber(res))
        })
    }
  }, [nftContract.methods, account])

  useEffect(() => {
    if (account) {
      nftOwnershipContract.methods
        .checkOwnership(account, getAddress(nft.address))
        .call()
        .then((res) => {
          setIds(res)
        })
    }
  }, [nft.address, nftOwnershipContract.methods, account])

  function handleDeposit() {
    if (account && approved) {
      drburn.methods
        .deposit(id, 0, selected)
        .send({ from: account })
        .then(() => {
          toastDefault(t(`Deposited ${nft.symbol}`))
          updateResult(id)
          onDismiss()
        })
    }
  }

  const handleApprove = () => {
    if (account && !approved) {
      nftContract.methods
        .approve(getDrBurnensteinAddress(), selected)
        .send({ from: account })
        .then(() => {
          setApproved(true)
        })
    }
  }

  const approveButton = selected && !approved
  const depositButton = selected && approved

  return (
    <Modal onDismiss={onDismiss} title={`Deposit ${nft.symbol}`} headerBackground={theme.colors.backgroundAlt}>
      <Flex alignItems="center" justifyContent="space-between" mb="8px">
        <Text bold>Select ID of NFT:</Text>
        <Flex alignItems="center" minWidth="70px">
          <Text ml="4px" bold>
            {nft.symbol}
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent="center" style={{ maxHeight: '200px', maxWidth: '400px' }}>
        {nft.type === 'image' ? (
          <img src={nft.path} alt="test" style={{ maxWidth: '90%', maxHeight: '100%', objectFit: 'contain' }} />
        ) : (
          <video autoPlay loop className="sc-cxNHIi bjMxQn">
            <source src={nft.path} type="video/webm" />
          </video>
        )}
      </Flex>
      <Text mt="8px" color="textSubtle" fontSize="12px" mb="8px" style={{ width: '100%' }}>
        Balance: {nftBalance.toString()}
        {nftBalance.isZero() ? (
          <Text mt="8px" ml="auto" color="tertiary" fontSize="12px" mb="8px">
            Must have {nft.symbol} NFT before you can deposit
          </Text>
        ) : (
          <Text bold>IDS in your wallet:</Text>
        )}
      </Text>
      <Flex justifyContent="center">
        {ids.map((currentId) => {
          return (
            <div id={currentId} key={currentId} style={{ padding: '10px' }}>
              <Button
                onClick={() => {
                  setSelected(currentId)
                }}
                variant={currentId === selected ? 'secondary' : 'primary'}
              >
                {currentId}
              </Button>
            </div>
          )
        })}
      </Flex>
      <Flex justifyContent="center">
        <Button
          onClick={() => {
            if (selected) {
              handleApprove()
            }
          }}
          disabled={!approveButton}
          mt="8px"
          as="a"
          variant={selected ? 'secondary' : 'primary'}
        >
          APPROVE {nft.symbol}
        </Button>
        <Text mt="8px" color="textSubtle" fontSize="12px" mb="8px" style={{ width: '10%' }} />
        <Button
          onClick={() => {
            if (selected) {
              handleDeposit()
            }
          }}
          disabled={!depositButton}
          mt="8px"
          as="a"
          variant={selected ? 'secondary' : 'primary'}
        >
          DEPOSIT {nft.symbol}
        </Button>
      </Flex>
    </Modal>
  )
}

export default DepositNftModal
