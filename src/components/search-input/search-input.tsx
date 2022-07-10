import * as React from 'react'
import {
  Icon,
  Input,
} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  value: string
  onChangeText: (text: string) => void
}

export const SearchInput = ({
  value,
  onChangeText,
}: Props) => (
  <Input
    value={value}
    borderWidth="0"
    backgroundColor="muted.100"
    placeholderTextColor="muted.500"
    onChangeText={onChangeText}
    placeholder="Digite sua pesquisa..."
    width="100%"
    borderRadius="8"
    paddingTop="4"
    paddingBottom="4"
    marginBottom="4"
    fontSize="md"
    autoCapitalize="none"
    InputLeftElement={
      <Icon
        ml="3"
        size="7"
        color="gray.700"
        as={<MaterialIcons name="search" />}
      />
    }
  />
)
