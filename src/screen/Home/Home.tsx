import * as React from 'react'
import { AsyncStorage } from 'react-native'
import {
  Box,
  HStack,
  Icon,
  Pressable,
  VStack,
  Text,
} from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import AwesomeDebouncePromise from 'awesome-debounce-promise'

import { Layout, Loading, SearchInput, Switch } from '../../components'
import { hymnsList, Hymn, Hymns } from '../../constant'

export const Home = ({ navigation }: any) => {
  const [search, setSearch] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [hymns, setHymns] = React.useState(hymnsList)
  const [favorites, setFavorites] = React.useState<Hymn | object>({})
  const [isFavoriteEnabled, setIsFavoriteEnabled] = React.useState(false)

  const handleSearch = async (text: string) => {
    setSearch(text)
    setIsLoading(true)
    if (text.length === 0) {
      await AwesomeDebouncePromise(() => {
        setHymns(hymnsList)
        setIsLoading(false)
      }, 500)()

      return
    }

    const searchHymns = () => {
      let foundHymns: Hymns = {}

      Object.keys(hymnsList).map((theme) => {
        let hymnsFromTheme: Hymn[] = []
        hymnsList[theme].map((hymn: Hymn) => {
          const found = hymn.tags.find(
            (tag) => tag.toUpperCase() === text.toUpperCase()
          )

          if (found) {
            hymnsFromTheme = [...hymnsFromTheme, hymn]
          }
        })

        if (hymnsFromTheme.length > 0) {
          foundHymns = {
            ...foundHymns,
            [theme]: hymnsFromTheme,
          }
        }
      })

      return foundHymns
    }
    await AwesomeDebouncePromise(() => {
      setIsLoading(false)
      const result = searchHymns()
      setHymns(result)
    }, 500)()
  }

  const handleToggle = () => {
    setSearch('')
    let favoritedHymns = {}

    setIsLoading(true)
    if (isFavoriteEnabled) {
      setHymns(hymnsList)
      setIsFavoriteEnabled(!isFavoriteEnabled)

      return false
    }
    setIsFavoriteEnabled(!isFavoriteEnabled)

    Object.keys(hymnsList).map((theme) => {
      const hymnsFromTheme = hymnsList[theme].filter(
        (hymn: Hymn) => !!favorites[hymn.id]
      )

      if (hymnsFromTheme.length > 0) {
        favoritedHymns = {
          ...favoritedHymns,
          [theme]: hymnsFromTheme,
        }
      }
    })

    setIsLoading(false)
    setHymns(favoritedHymns)
  }

  const saveToFavorites = async (id: string) => {
    setIsLoading(true)
    const favoriteHymnsRaw = await AsyncStorage.getItem('hymns')

    if (!favoriteHymnsRaw) {
      await AsyncStorage.setItem(
        'hymns',
        JSON.stringify({
          [id]: true,
        })
      )

      return false
    }
    const favoriteHymnsParsed = JSON.parse(favoriteHymnsRaw)
    // const keyExists = favoriteHymnsParsed.hasOwnProperty(id)
    const keyExists = Object.prototype.hasOwnProperty.call(favoriteHymnsParsed, id)

    await AsyncStorage.setItem(
      'hymns',
      JSON.stringify({
        ...favoriteHymnsParsed,
        [id]: keyExists ? !favoriteHymnsParsed[id] : true,
      })
    )
    setFavorites({
      ...favoriteHymnsParsed,
      [id]: keyExists ? !favoriteHymnsParsed[id] : true,
    })
    setIsLoading(false)
  }

  React.useEffect(() => {
    const getFavoriteHymns = async () => {
      const favoriteHymnsRaw = await AsyncStorage.getItem('hymns')

      if (favoriteHymnsRaw) {
        setFavorites(JSON.parse(favoriteHymnsRaw))
      }
    }

    getFavoriteHymns()
  }, [])

  React.useEffect(() => {
    setIsLoading(false)
  }, [hymns])

  return (
    <Layout>
      <SearchInput value={search} onChangeText={handleSearch} />
      {!hymns || isLoading ? (
        <Loading />
      ) : (
        <>
          <HStack space={2} alignItems="center" marginBottom="8">
            <Switch isChecked={isFavoriteEnabled} onToggle={handleToggle} />
          </HStack>
          <VStack space={8}>
            {Object.keys(hymns).map((theme) => (
              <Box key={theme}>
                <Text fontSize="3xl" fontWeight="bold">
                  {theme}
                </Text>
                {hymns[theme].map((hymn: Hymn) => (
                  <>
                    <HStack
                      key={hymn.id}
                      justifyContent="space-between"
                      alignItems="center"
                      space={6}
                      marginTop={4}
                      marginBottom={4}
                    >
                      <Pressable
                        onPress={() =>
                          navigation.navigate('Detail', {
                            id: hymn.id,
                            theme,
                          })
                        }
                      >
                        <Text
                          fontSize="xl"
                          fontWeight="bold"
                          style={{flex: 1}}
                        >
                          {hymn.id}. {hymn.name}
                        </Text>
                      </Pressable>
                      <Pressable
                        onPress={() => saveToFavorites(hymn.id)}
                      >
                        <Icon
                          color="black"
                          size={6}
                          as={
                            <AntDesign
                              name={favorites[hymn.id] ? 'heart' : 'hearto'}
                            />
                          }
                        />
                      </Pressable>
                    </HStack>
                    <HStack justifyContent="center">
                      <Box
                        borderBottomColor="gray.200"
                        borderBottomWidth={1}
                        width="50%"
                      />
                    </HStack>
                  </>
                ))}
              </Box>
            ))}
          </VStack>
        </>
      )}
    </Layout>
  )
}
