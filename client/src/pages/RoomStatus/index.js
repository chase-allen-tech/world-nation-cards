/* eslint-disable */
import React from 'react'
import { Typography, Container, Grid, Box } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

import Page from '../../components/Page'
import { CarouselBasic3 } from 'components/carousel'
import UserList from './UserList'
import TicketTable from './TicketTable'

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(22),
  paddingBottom: theme.spacing(10),
  backgroundColor: theme.palette.grey[900],
}))

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}))
export default function RoomStatus() {
  return (
    <RootStyle>
      <ContentStyle>
        <CarouselBasic3 />
        <Box sx={{ px: 10, mt: 10 }}>
          <Grid container spacing={12}>
            <Grid item xs={12} md={4}>
              <UserList />
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={12}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((key) => (
                  <Grid item xs={12} sm={6} md={4} key={key}>
                    <TicketTable />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </ContentStyle>
    </RootStyle>
  )
}
