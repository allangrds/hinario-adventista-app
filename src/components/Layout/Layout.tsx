import * as React from "react"
import {
  Box,
  ScrollView,
} from "native-base"

import { Header } from '../Header'

export const Layout = (
  { children, withHeader = true }:
  {
    children: any, withHeader?: boolean
  }
) => (
  <ScrollView
    backgroundColor="white"
  >
    <Box paddingX="6" marginTop={!withHeader ? 4 : 0}>
      {
        withHeader
        ? <Header />
        : null
      }
      { children }
    </Box>
  </ScrollView>
)
