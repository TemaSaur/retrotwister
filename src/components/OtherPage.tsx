import Image from 'next/image'

const OtherPage = (props: any) => {
	return <>
	<div className="sky">
		<Image className="sky-logo" src='/RetroTwister.svg' alt='' width={135} height={43}/>
	</div>
	

	<main className={props.className}>
		{props.children}
	</main>
	</>
}

export default OtherPage;