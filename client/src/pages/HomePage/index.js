/* eslint-disable */
import React from 'react'
// material
import { styled } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
// components
import Page from '../../components/Page'
import {
  LandingHero,
  LandingHowWork,
  LandingEquipment,
  LandingAbout,
  LandingCategory,
  LandingDamage,
  LandingConnect,
} from '../../components/_external-pages/landing'
import WhoWeAre from './WhoWeAre'
import MainHero from './MainHero'
import { CarouselBasic3 } from 'components/carousel'
import HowItWorks from './HowItWorks'
import LiveEvents from './LiveEvents'
import SignUpCTA from 'customComponents/SignUpCTA'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  paddingTop: 176,
  // paddingBottom: 88,
  height: '100%',
})

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}))

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <RootStyle>
      <ContentStyle>
        <CarouselBasic3 />
        <Box sx={{ backgroundImage: 'url("/images/site-background.jpg")' }}>
          <WhoWeAre />
          <HowItWorks />
          <LiveEvents />
          <SignUpCTA />
        </Box>
      </ContentStyle>
    </RootStyle>
  )
}
