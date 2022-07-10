import * as React from 'react'
import {
  Switch as BaseSwitch,
  Text,
} from 'native-base'

type Props = {
  isChecked?: boolean;
  onToggle?: () => void;
}

export const Switch = ({
  isChecked,
  onToggle
}: Props) => (
  <>
    <BaseSwitch
      marginLeft="-2"
      size="sm"
      isChecked={isChecked}
      onToggle={onToggle}
      aria-label="mostrar apenas músicas favoritadas"
    />
    <Text>Ver apenas favoritos</Text>
  </>
)
