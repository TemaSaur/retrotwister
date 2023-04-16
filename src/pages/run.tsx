import dynamic from 'next/dynamic'
import Image from 'next/image'
const Twister = dynamic(
	() => import('../components/Twister'),
	{ssr: false}
)

export default function run() {
	return <>
		<div className="sky">
			<Image className="sky-logo" src='/RetroTwister.svg' alt='' width={135} height={43}/>
		</div>
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Twister></Twister>
		</main>
	</>
}
