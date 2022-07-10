import * as React from 'react'
import { View } from 'react-native'
import { HStack } from 'native-base'

import Logo from '../../assets/hinario-adventista.svg'

export const Header = () => {
  const originalWidth = 302
  const originalHeight = 52
  const aspectRatio = originalWidth / originalHeight

  return (
    <HStack
      marginTop={10}
      marginBottom={8}
      justifyContent="center"
      alignItems="center"
    >
      <View style={{ width: '100%', aspectRatio }}>
        <Logo
          width="100%"
          height="100%"
          viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        />
      </View>
    </HStack>
  )
}
