import * as React from 'react'
import { Heading, HStack, Spinner, useColorModeValue } from 'native-base'

export const Loading = () => (
  <HStack paddingY={20} space={2} justifyContent="center" alignItems="center">
    <Spinner size="lg" accessibilityLabel="Loading posts" />
    <Heading color={useColorModeValue('black', 'white')} fontSize="md">
      Carregando
    </Heading>
  </HStack>
)
