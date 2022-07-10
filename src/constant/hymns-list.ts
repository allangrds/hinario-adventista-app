import { Theme } from '../enum'

export type Lyric = {
  text: string
  range: {
    init: number
    end: number
  }
}

export type Hymn = {
  id: string
  name: string
  authors: string[]
  videoId: string
  lyrics: Lyric[]
  tags: string[]
}

export type Hymns = {
  [key: string]: Hymn[]
}

export const hymnsList: Hymns = {
  [Theme.TRINITY]: [
    {
      id: '1',
      name: 'Santo, Santo, Santo!',
      authors: ['Reginald Heber', 'John B. Dykes', 'Samuel Krähenbühl'],
      videoId: 'FDpludwY46U',
      lyrics: [
        {
          text: 'Santo, santo, santo! Deus onipotente!',
          range: {
            init: 11,
            end: 19,
          },
        },
        {
          text: 'Cedo de manhã, cantaremos Teu louvor.',
          range: {
            init: 20,
            end: 28,
          },
        },
      ],
      tags: [
        '1',
        'santo',
        'trindade',
      ],
    },
    {
      id: '2',
      name: 'Ó Adorai O Senhor',
      authors: [
        'John S. B. Monsell',
        'Dario Pires de Araújo',
        'Edwin Barnes',
        'Lineu Formighieri Soares'
      ],
      videoId: 'u4c66cbU9-c',
      lyrics: [
        {
          text: 'Santo, santo, santo! Deus onipotente!',
          range: {
            init: 11,
            end: 19,
          },
        },
        {
          text: 'Cedo de manhã, cantaremos Teu louvor.',
          range: {
            init: 20,
            end: 28,
          },
        },
      ],
      tags: [
        '2',
        'senhor',
        'adorai',
        'trindade',
      ],
    },
  ],
  [Theme.FATHER]: [
    {
      id: '15',
      name: 'Tu És Fiel, Senhor',
      authors: ['Thomas O. Chisholm', 'William M. Runyan', 'Samuel Krähenbühl'],
      videoId: 'lVBzxAcXTVk',
      lyrics: [
        {
          text: 'Santo, santo, santo! Deus onipotente!',
          range: {
            init: 11,
            end: 19,
          },
        },
        {
          text: 'Cedo de manhã, cantaremos Teu louvor.',
          range: {
            init: 20,
            end: 28,
          },
        },
      ],
      tags: [
        'pai',
        '15',
        'fiel',
        'senhor',
      ],
    },
  ],
}
