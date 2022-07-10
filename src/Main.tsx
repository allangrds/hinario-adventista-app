import * as React from 'react'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Detail as DetailScreen, Home as HomeScreen } from './screen'
import { hymnsList, Hymn } from './constant'

const Stack = createNativeStackNavigator()

export const Main = () => (
  <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Detail"
          options={({ route }: any) => {
            const hymnsFromTheme = hymnsList[route.params.theme]
            const hymnDetail = hymnsFromTheme.find(
              (hymn: Hymn) => route.params.id === hymn.id
            )

            return {
              title: `${route.params.id}. ${hymnDetail?.name}`,
              headerShown: true,
            }
          }}
        >
          {(props) => <DetailScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>
)
