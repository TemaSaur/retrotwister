import {useState} from 'react'
import Image from 'next/image';


const Dude = (props: {dude: {name:string, image: string}, className: string}) => {
	return <div className={"Dude " + props.className}>
		<Image className="active-image" src={'/images/'+props.dude.image} alt={props.dude.name} width={500} height={500} />
	</div>
}

export default Dude;