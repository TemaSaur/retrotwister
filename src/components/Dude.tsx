import {useState} from 'react'
import Image from 'next/image';


const Dude = (props: {dude: {name:string, image: string}, className: string}) => {
	return <div className={"Dude " + props.className}>
		{/* <span className="active-name">{props.dude.name}</span> */}
		<Image className="active-image" src={props.className== 'active' ? '/images/'+props.dude.image : '/images/'+props.dude.image} alt={props.dude.name} width={500} height={500} />
	</div>
}

export default Dude;