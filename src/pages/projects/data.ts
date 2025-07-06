import type { ProjectData } from '@/types'

export const projectData: ProjectData = [
  {
    title: 'Work In Progress',
    projects: [
      {
        text: 'IOT Security Server (with client modules)',
        description: 'work in progress (java, C, esp-32 microcontroller)',
        icon: 'i-carbon-campsite',
        href: 'https://github.com/francois-coleongco/IOT-security-server',
      },
    ],
  },
  {
    title: 'Complete',
    projects: [
      {
        text: 'Multithreaded Encrypted File Server and Client (C++)',
        description: 'multithreaded server capable of handling multiple encrypted client connections simultaneously',
        icon: 'i-carbon-campsite',
        href: 'https://github.com/francois-coleongco/MEFSC',
      },
      {
        text: 'Encrypted Steganography Suite',
        description: 'A GUI/CLI for embedding encrypted messages into images using LSB alpha channel encoding written in Rust',
        icon: 'i-carbon-campsite',
        href: 'https://github.com/Francois-Coleongco/Steganography_Suite',
      },
      {
        text: 'Secure TCP Network Communications Interface in C++',
        description: 'An easy to compile interface for securing network facing C++ projects built on top of the libsodium library',
        icon: 'i-carbon-campsite',
        href: '/',
      },
    ],
  },
]
