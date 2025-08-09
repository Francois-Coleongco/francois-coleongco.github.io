import type { ProjectData } from '@/types'


export const projectData: ProjectData = [
	{
		title: 'Projects',
		projects: [
			{
				text: 'IoT Security Platform',
				descdiption: 'A Java Spring Boot backend for collecting, storing, and serving telemetry data from distributed IoT devices.',
				icon: 'i-carbon-campsite',
				href: 'https://github.com/Francois-Coleongco/IOT-security-server'
			},
			{
				text: 'Server Agent Threat Detection (WIP)',
				description: 'A microservice threat detection system to analyze telemetry from resource efficient endpoint agents',
				icon: 'i-carbon-campsite',
				href: 'https://github.com/francois-coleongco/SATD',
			},
			{
				text: 'Ephemeral Message Link',
				description: 'A self-destructing message service using Django',
				icon: 'i-carbon-campsite',
				href: 'https://github.com/francois-coleongco/BurnerLink',
			},
			{
				text: 'Multithreaded Encrypted File Server and Client',
				description: 'A multithreaded server capable of handling multiple encrypted client connections simultaneously',
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
				text: 'Secure TCP Network Communications Interface for C++',
				description: 'An easy to integrate interface for securing network facing C++ projects built on top of the libsodium library',
				icon: 'i-carbon-campsite',
				href: 'https://github.com/Francois-Coleongco/Network-Encryption-Interface',
			},
		],
	},
]
