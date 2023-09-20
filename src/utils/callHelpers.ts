import { ethers } from 'ethers'
import * as process from "process";

const gasPrice = parseInt(process.env.REACT_APP_BSC_GAS_PRICE);

export const approve = async (tokenContract, spenderAddress, account) => {
  return tokenContract.methods.approve(spenderAddress, ethers.constants.MaxUint256).send({ from: account })
}

export const stake = async (drFrankensteinContract, pid, amount, account) => {
  if (pid === 0) {
    return drFrankensteinContract.methods
      .enterStaking(amount.toString())
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return drFrankensteinContract.methods
    .deposit(pid, amount.toString())
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    });
}

export const unstake = async (drFrankensteinContract, pid, amount, account) => {
  if (pid === 0) {
    return drFrankensteinContract.methods
      .leaveStaking(amount.toString())
      .send({ from: account, gasPrice })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return drFrankensteinContract.methods
    .withdraw(pid, amount.toString())
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const unstakeEarly = async (drFrankensteinContract, pid, amount, account) => {
  if (pid === 0) {
    return drFrankensteinContract.methods
      .leaveStakingEarly(amount.toString())
      .send({ from: account, gasPrice })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return drFrankensteinContract.methods
    .withdrawEarly(pid, amount.toString())
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const emergencyWithdraw = async (drFrankensteinContract, pid, account) => {
  return drFrankensteinContract.methods
    .emergencyWithdraw(pid)
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const unlock = async (drFrankensteinContract, pid, amount, account) => {
  return drFrankensteinContract.methods
    .unlock(pid)
    .send({ from: account, gasPrice, value: amount.toString() })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const spStake = async (spawningPoolContract, amount, account) => {
  return spawningPoolContract.methods
    .deposit(amount.toString())
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const spUnstake = async (spawningPoolContract, amount, account) => {
  return spawningPoolContract.methods
    .withdraw(amount.toString())
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const spUnstakeEarly = async (spawningPoolContract, amount, account) => {
  return spawningPoolContract.methods
    .withdrawEarly(amount.toString())
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const spUnlock = async (spawningPoolContract, amount, account) => {
  return spawningPoolContract.methods
    .unlock()
    .send({ from: account, gasPrice, value: amount.toString() })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const depositRug = async (drFrankensteinContract, pid, amount, account) => {
  return drFrankensteinContract.methods
    .depositRug(pid, amount.toString())
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const startMinting = async (tombOverlayContract, pid, fee, account) => {
  return tombOverlayContract.methods
    .startMinting(pid)
    .send({ from: account, gasPrice, value: fee })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const finishMinting = async (tombOverlayContract, pid, account) => {
  return tombOverlayContract.methods
    .finishMinting(pid)
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const harvest = async (drFrankensteinContract, pid, account) => {
  if (pid === 0) {
    return drFrankensteinContract.methods
      .leaveStaking('0')
      .send({ from: account, gasPrice })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return drFrankensteinContract.methods
    .deposit(pid, '0')
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const convertNft = async (nftSwapper, nftConverterPid, tokenId, account) => {
  return nftSwapper.methods
    .deposit(nftConverterPid, tokenId)
    .send({ from: account, gasPrice})
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const whalePoolStake = (whalePool, tokenId, account) => {
  return whalePool.methods
    .stake(tokenId)
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const whalePoolUnstake = (whalePool, account) => {
  return whalePool.methods
    .unstake()
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const whalePoolStartMinting = (whalePool, fee, account) => {
  return whalePool.methods
    .startMinting()
    .send({ from: account, gasPrice, value: fee.toString() })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const whalePoolFinishMinting = (whalePool, account) => {
  return whalePool.methods
    .finishMinting()
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}


export const burnGraveEnterStaking = async (drBurnensteinContract, pid, amount, account) => {
  return drBurnensteinContract.methods
    .enterStaking(pid, amount.toString())
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const burnGraveLeaveStaking = async (drBurnensteinContract, pid, amount, account) => {
  return drBurnensteinContract.methods
    .leaveStaking(pid, amount.toString())
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const burnGraveBurnZombie = async (drBurnensteinContract, pid, amount, account) => {
  return drBurnensteinContract.methods
    .burnZombie(pid, amount.toString())
    .send({ from: account, gasPrice })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}