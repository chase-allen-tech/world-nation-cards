/* eslint-disable */
import React from 'react'
// material
import { Container, Typography } from '@material-ui/core'
// hooks
import useSettings from '../../../hooks/useSettings'
// components
import Page from '../../../components/Page'

// ----------------------------------------------------------------------

export default function UserManagement() {
  const { themeStretch } = useSettings()

  return (
    <Page>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          User Management
        </Typography>
      </Container>
    </Page>
  )
}
