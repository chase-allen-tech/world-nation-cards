/* eslint-disable */
import React from 'react'
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  Table,
  TableRow,
  Stack,
  Box,
  Button,
  Card,
  TextField,
} from '@material-ui/core'
export default function UserList() {
  return (
    <Stack spacing={3}>
      <Box>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Button variant="contained" size="large" sx={{ width: '49%' }}>
            Satellite
          </Button>
          <Button variant="contained" size="large" sx={{ width: '49%' }}>
            MainEvent
          </Button>
        </Stack>
      </Box>
      <Card sx={{ padding: 3 }}>
        <Stack spacing={2}>
          <Stack direction="row">
            <TextField
              placeholder="Search..."
              variant="outlined"
              sx={{ width: '75%' }}
            />
            <Button variant="contained" sx={{ width: '25%' }}>
              Search
            </Button>
          </Stack>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>Entries</TableCell>
                  <TableCell>Tables</TableCell>
                  <TableCell>Ticket Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <TableRow key={item}>
                    <TableCell>smokeypetel123</TableCell>
                    <TableCell>15</TableCell>
                    <TableCell>View Table</TableCell>
                    <TableCell>TBD OR 5L OR 10W</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Card>
    </Stack>
  )
}
