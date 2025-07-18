import type { ProjectData } from '@/types'

export const projectData: ProjectData = [
	{
		title: 'Projects',
		projects: [
			{
				text: 'Server Agent Threat Detection (Golang + TypeScript)',
				description: 'A microservice threat detection system to analyze telemetry from resource efficient endpoint agents',
				icon: 'i-carbon-campsite',
				href: 'https://github.com/francois-coleongco/SATD',
			},
			{
				text: 'Multithreaded Encrypted File Server and Client (C++)',
				description: 'multithreaded server capable of handling multiple encrypted client connections simultaneously',
				icon: 'i-carbon-campsite',
				href: 'https://github.com/francois-coleongco/MEFSC',
			},
			{
				text: 'Encrypted Steganography Suite (Rust + JavaScript)',
				description: 'A GUI/CLI for embedding encrypted messages into images using LSB alpha channel encoding written in Rust',
				icon: 'i-carbon-campsite',
				href: 'https://github.com/Francois-Coleongco/Steganography_Suite',
			},
			{
				text: 'Secure TCP Network Communications Interface in C++',
				description: 'An easy to integrate interface for securing network facing C++ projects built on top of the libsodium library',
				icon: 'i-carbon-campsite',
				href: '/',
			},
		],
	},
]
