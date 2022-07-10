import * as React from "react"
import {
  Box,
  Heading,
  useColorMode,
  useColorModeValue,
  HStack,
  Switch,
  Text,
} from "native-base"

export const Header = ({ withHeaderNavigation }: {withHeaderNavigation?: boolean}) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack
      paddingTop={withHeaderNavigation ? 4 : 10}
      paddingX={4}
      paddingBottom={4}
      justifyContent="space-between"
    >
      <Box>
        <Heading size="lg" color={useColorModeValue('black', 'white')} fontWeight="400">
          Nisto
        </Heading>
        <Heading size="lg" color={useColorModeValue('black', 'white')}>
          Cremos
        </Heading>
      </Box>
      <HStack space={2} alignItems="center">
        <Text>Escuro</Text>
        <Switch
          size="sm"
          isChecked={colorMode === "light"}
          onToggle={toggleColorMode}
          aria-label={
            colorMode === "light" ? "switch to dark mode" : "switch to light mode"
          }
        />
        <Text>Claro</Text>
      </HStack>
    </HStack>
  )
}
