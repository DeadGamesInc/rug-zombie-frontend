import React, { useState } from 'react';
import styled from 'styled-components';
import { BaseLayout, useMatchBreakpoints } from '@rug-zombie-libs/uikit';
import { getBalanceAmount } from 'utils/formatBalance'
import numeral from 'numeral';
import BigNumber from 'bignumber.js';

const DisplayFlex = styled(BaseLayout)`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  grid-gap: 0px;
`

const ArrowIcon = styled(BaseLayout)`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  position: relative;
  width: 50px;
  height: 50px;
  background-color: rgb(29, 47, 59);
  margin-right: 0.3em;
`

interface TableListProps {
    handler: any,
    totalStaked: BigNumber,
    jawsPrice: any
}

const TableList: React.FC<TableListProps> = ({ handler, totalStaked, jawsPrice }) => {
    const { isLg, isXl } = useMatchBreakpoints()
    const isDesktop = isLg || isXl    
    
    const [isOpen, setIsOpen] = useState(false);    

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        handler(!isOpen);
    };

    return(
        <table className="table">
            <tbody>
                <tr>
                    <td className="td-width-26 m-width-45">
                        <div className="info-td-one">
                            <div className="into-two-td">
                                <div className="info-1">
                                    <div className="info-icon">
                                        <img src="images/tokens/jaws.png" alt="basicicon" className="icon" />
                                        <img src="images/tokens/clear.png" alt="basicicon" className="icon" />
                                    </div>
                                    <div>
                                        <div className="titel">AutoShark Flash Loan Pool</div>
                                        <div className="small-lable">
                                            <div className="small-titel">JAWS</div>
                                            <div className='con-info' style={{marginLeft: "4px"}}>NEW!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="td-width-25">
                        <DisplayFlex>
                            <span className="total-earned">NFT Only Pool</span>
                        </DisplayFlex>
                    </td>
                    <td className="td-width-17">
                        <DisplayFlex>
                            <div className="earned" />
                        </DisplayFlex>                                    
                    </td>
                    <td className="td-width-17 desktop-view">
                        <DisplayFlex>
                            <div className="earned" />
                        </DisplayFlex>
                    </td>
                    {isDesktop 
                        ? <td className='td-width-25'>
                            <DisplayFlex>
                                <span
                                    className='total-earned'>{numeral(getBalanceAmount(totalStaked).times(jawsPrice)).format('($ 0.00 a)')}</span>
                                <div className='earned'>TVL</div>
                            </DisplayFlex>
                        </td> 
                        : null}
                    <td className="last-td">
                        <ArrowIcon onClick={toggleOpen}>
                            {isOpen ? (
                                <svg viewBox="0 0 24 24" width="32px" color="ActiveitemMenuNav" xmlns="http://www.w3.org/2000/svg" className="arrow-color">
                                <path d="M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" width="32px" color="ActiveitemMenuNav" xmlns="http://www.w3.org/2000/svg" className="arrow-color">
                                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" />
                                </svg>
                                )}
                        </ArrowIcon>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableList;