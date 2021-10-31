/* eslint-disable */
import React, { useState } from 'react'
// material
import { Container, Typography, Grid, Tabs, Tab, Box } from '@material-ui/core'
import { capitalCase } from 'change-case'

// hooks
import useSettings from '../../../hooks/useSettings'
// components
import Page from '../../../components/Page'
import PredictionTable from './PredictionTable'
import RegularEvent from './RegularEvent'
import FinalEvent from './FinalEvent'

// ----------------------------------------------------------------------

export default function EventManagement() {
  const { themeStretch } = useSettings()
  const [currentTab, setCurrentTab] = useState('regular_event')

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue)
  }

  const TABS = [
    {
      value: 'regular_event',
      component: <RegularEvent />,
    },
    {
      value: 'final_event',
      component: <FinalEvent />,
    },
  ]

  return (
    <Page>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        {/* Title */}
        <Typography variant="h3" component="h1" paragraph>
          Event Management
        </Typography>
        <Grid container>
          {/* Tabs */}
          <Grid item xs={12} md={8}>
            <Tabs
              value={currentTab}
              scrollButtons="auto"
              variant="scrollable"
              allowScrollButtonsMobile
              onChange={handleChangeTab}
            >
              {TABS.map((item) => (
                <Tab
                  disableRipple
                  key={item.value}
                  value={item.value}
                  icon={item.icon}
                  label={capitalCase(item.value)}
                />
              ))}
            </Tabs>
            {TABS.map((item) => {
              const isMatched = item.value === currentTab
              return isMatched && <Box key={item.value}>{item.component}</Box>
            })}
          </Grid>
          {/* Prediction table */}
          <Grid item xs={12} md={4}>
            <PredictionTable />
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}
