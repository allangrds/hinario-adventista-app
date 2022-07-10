import * as React from "react"
import {
  ScrollView,
} from "native-base"

import { Header } from '../../components'

export const Detail = ({ route }: any) => {
  // const { creed } = route.params
  // const creedDetail = creeds.find((item: Creed) => creed === item.parameter)

  return (
    <ScrollView backgroundColor='white'>
      <Header withHeaderNavigation />
    </ScrollView>
  )
}
