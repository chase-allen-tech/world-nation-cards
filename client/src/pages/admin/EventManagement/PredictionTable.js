/* eslint-disable */
import React from 'react'
// material
import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@material-ui/core'
// hooks
import useSettings from '../../../hooks/useSettings'
// components
import Page from '../../../components/Page'

// ----------------------------------------------------------------------

export default function PredictionTable() {
  const { themeStretch } = useSettings()

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Day number</TableCell>
            <TableCell>Current user</TableCell>
            <TableCell>After draw</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Day 1</TableCell>
            <TableCell>40000</TableCell>
            <TableCell>12000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
