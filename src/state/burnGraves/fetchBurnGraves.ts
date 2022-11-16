import { BurnGraveConfig, BurnGravePoolInfo } from "../types";
import { getDrBurnensteinAddress } from "../../utils/addressHelpers";
import { getId, toBN } from "../../utils";
import multicall from "../../utils/multicall";
import drBurnenstein from "../../config/abi/drBurnenstein.json";

const fetchBurnGraves = async (burnGravesToFetch: BurnGraveConfig[]): Promise<BurnGravePoolInfo[]> => {
  const drBurnensteinAddress = getDrBurnensteinAddress();
  const getCallsForBurnGrave = ({ pid }) => {
    const graveId = getId(pid)
    return [{ address: drBurnensteinAddress, name: 'graveInfo', params: [graveId] }]
  }
  const graveInfos = await multicall(drBurnenstein, burnGravesToFetch.flatMap(getCallsForBurnGrave))
  return graveInfos.map((graveInfo, index) => ({
    pid: burnGravesToFetch[index].pid,
    isEnabled: graveInfo.isEnabled,
    depositType: graveInfo.depositType,
    depositAddress: graveInfo.deposit,
    minimumStake: toBN(graveInfo.minimumStake),
    nftMintTime: toBN(graveInfo.mintingTime),
    tokensToBurn: toBN(graveInfo.burnTokens),
    burnReduction: toBN(graveInfo.burnHours),
    maxBurned: toBN(graveInfo.maxBurned),
    totalStaked: toBN(graveInfo.totalStaked),
    totalBurned: toBN(graveInfo.totalBurned),
    burnAmount: toBN(graveInfo.burnAmount)
  }))
}

export default fetchBurnGraves