import * as React from "react"
import {
  ScrollView,
} from "native-base"

import { Header } from '../../components'

export const Home = ({ navigation }: any) => {
  return (
    <ScrollView backgroundColor='white'>
      <Header />
    </ScrollView>
  )
}
