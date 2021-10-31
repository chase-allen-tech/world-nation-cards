/* eslint-disable */
import React from 'react'
import { Typography } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

import Page from '../../components/Page'

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(28, 0),
  backgroundColor: theme.palette.grey[900],
}))

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}))
export default function ContactUs() {
  return (
    <RootStyle>
      <ContentStyle>
        <Typography variant="h1">ContactUs</Typography>
      </ContentStyle>
    </RootStyle>
  )
}
