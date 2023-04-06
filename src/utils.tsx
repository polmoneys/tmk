import { type AriaAttributes } from 'react'
import { type Datum } from './system/KeyValue'

interface IconProps extends AriaAttributes {}
export const Icon = (props: IconProps): JSX.Element => (
  <svg
    {...props}
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
      fill="red"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
)

export interface Author {
  firstName: string
  lastName: string
  role?: string
}
export interface Minimal {
  name: string
}

export const keyValueDemo: Datum<Author> = [
  {
    title: 'Title',
    content: 'Designing with Web Standards',
  },
  {
    title: 'Author',
    content: [
      { firstName: 'Jeffrey', lastName: 'Zeldman' },
      { firstName: 'Ethan', lastName: 'Marcotte', role: 'Co-author' },
    ],
  },
  {
    title: 'Publisher',
    content: 'New Riders Pub; 3rd edition (October 19, 2009)',
  },
]

export const imperialStats: Datum<Minimal> = [
  {
    title: 'Faction',
    content: 'imperial',
  },
  {
    title: 'Pilots',
    content: [
      {
        name: 'Soontir Fel',
      },
      {
        name: 'Darth Vader',
      },
      {
        name: 'Whisper',
      },
    ],
  },
  {
    title: 'Ships',
    content: [
      {
        name: 'Tie Defender',
      },
      {
        name: 'Tie Interceptor',
      },
    ],
  },
]

export const rebelsStats: Datum<Minimal> = [
  {
    title: 'Faction',
    content: 'rebels',
  },
  {
    title: 'Pilots',
    content: [
      {
        name: 'Han Solo',
      },
      {
        name: 'Luke Skywalker',
      },
      {
        name: 'Wedge Antilles',
      },
    ],
  },
  {
    title: 'Ships',
    content: [
      {
        name: 'X-Wing',
      },
      {
        name: 'YT-1300',
      },
    ],
  },
]

// const fakeDl2 = {
//   Scum: [
//     {
//       term: 'Pilots',
//       id: 4,
//       details: 'Fenn Rau',
//     },
//     {
//       term: 'Ships',
//       id: 5,
//       details: 'Fang fighter',
//     },
//   ],
//   Separatists: [
//     {
//       term: 'Pilots',
//       id: 6,
//       details: 'Maul',
//     },
//     {
//       term: 'Ships',
//       id: 7,
//       details: 'Hyena Starfighter',
//     },
//   ],
// }
