import React from 'react'
import { useHistory } from 'react-router'
import logo from 'images/Logo.svg'
import telegram from 'images/footer/Telegram.svg'
import twitter from 'images/footer/Twitter.svg'
import config, { Type } from './config'

import {
  FooterContainer,
  FooterImage,
  FooterContent,
  Zmbe,
  CopyrightText,
  FooterLists,
  FooterList,
  FooterListItem,
  FooterIcons,
  FooterIconLink,
  FooterIcon,
} from './styles'

const Footer: React.FC = () => {
  const history = useHistory()

  const handleListItemClick = (e, item) => {
    e.preventDefault()
    if (item.type === Type.ExternalLink) {
      window.location.href = item.href
    } else {
      history.push(item.href)
    }
  }

  return (
    <FooterContainer>
      <FooterImage />
      <FooterContent>
        <Zmbe>
          <img src={logo} alt="Zmbe Logo" />
          <CopyrightText>© 2022 RugZombie. All rights reserved</CopyrightText>
        </Zmbe>
        <FooterLists>
          {config.map((column) => {
            return (
              <FooterList key={column[0].label}>
                {column.map((item) => {
                  return (
                    <FooterListItem key={item.label} onClick={(e) => handleListItemClick(e, item)}>
                      {item.label}
                    </FooterListItem>
                  )
                })}
              </FooterList>
            )
          })}
        </FooterLists>
        <FooterIcons>
          <FooterIconLink href="https://t.me/rugzombie" target="_blank" rel="noopener noreferrer">
            <FooterIcon src={telegram} alt="Telegram Icon" />
          </FooterIconLink>
          <FooterIconLink href="https://twitter.com/rugzombie" target="_blank" rel="noopener noreferrer">
            <FooterIcon src={twitter} alt="Twitter Icon" />
          </FooterIconLink>
        </FooterIcons>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
