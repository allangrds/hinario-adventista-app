import * as React from 'react'
import { Box, Button, HStack, Icon, Pressable, Text } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import YoutubePlayer from 'react-native-youtube-iframe'

import { Layout, Loading } from '../../components'
import { hymnsList, Hymn } from '../../constant'

const isNumberBetween = (actualSecond: number, init: number, end: number) => {
  if (!actualSecond) {
    return false
  }

  return actualSecond > init && actualSecond < end
}

export const Detail = ({ route }: any) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [playerSeconds, setPlayerSeconds] = React.useState(0)
  const { id, theme } = route.params
  const hymnsFromTheme = hymnsList[theme]
  const hymn = hymnsFromTheme.find((hymn: Hymn) => id === hymn.id)
  const playerRef = React.useRef()
  let refreshIntervalId: any

  const getCurrentTimeOfVideo = async () => {
    const seconds = await playerRef.current?.getCurrentTime()

    setPlayerSeconds(seconds)
  }

  React.useEffect(() => {
    return () => {
      clearInterval(refreshIntervalId)
    }
  }, [])

  if (!id) {
    <Loading />
  }

  return (
    <Layout withHeader={false}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        space={6}
        marginBottom={4}
      >
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            {hymn?.id}. {hymn?.name}
          </Text>
          {hymn?.authors.map((author: string) => (
            <Text key={`${author}-${hymn.id}`} fontSize="md" color="gray.500">
              {author}
            </Text>
          ))}
        </Box>
        <Pressable>
          <Icon color="black" size={6} as={<AntDesign name="hearto" />} />
        </Pressable>
      </HStack>
      <HStack justifyContent="center">
        <Box borderBottomColor="gray.200" borderBottomWidth={1} width="50%" />
      </HStack>
      <Box paddingTop={6} paddingBottom={6}>
        {hymn?.lyrics.map(({ text, range }) => (
          <Text
            key={text}
            fontSize={
              isNumberBetween(playerSeconds, range.init, range.end)
                ? 'xl'
                : 'lg'
            }
            fontWeight={
              isNumberBetween(playerSeconds, range.init, range.end)
                ? 'bold'
                : 'normal'
            }
          >
            {text}
          </Text>
        ))}
      </Box>
      <YoutubePlayer
        play={isPlaying}
        key={hymn?.videoId}
        height={180}
        videoId={hymn?.videoId}
        ref={playerRef}
      />
      <HStack space={2} marginTop={2}>
        <Button
          size="lg"
          onPress={() => {
            setIsPlaying(true)
            refreshIntervalId = setInterval(getCurrentTimeOfVideo, 500)
          }}
        >
          Iniciar
        </Button>
        <Button
          size="lg"
          onPress={() => {
            setIsPlaying(false)
            clearInterval(refreshIntervalId)
          }}
        >
          Pausar
        </Button>
        <Button
          size="lg"
          onPress={() => {
            setIsPlaying(false)
            playerRef?.current?.seekTo(0)
            clearInterval(refreshIntervalId)
          }}
        >
          Zerar
        </Button>
      </HStack>
    </Layout>
  )
}
