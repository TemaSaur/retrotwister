import OtherPage from "@/components/OtherPage";
import { useState } from 'react'
// import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image';
import Button from "@/components/Button";
// import Popup from 'reactjs-popup'
// import Camera from '@/components/Camera'
// const Camera = require('@/components/Camera');


const Join = (props: {preRoomId: ''}) => {
	const [name, setName] = useState('');
	const [roomId, setRoomId] = useState('');
	const [photo, setPhoto] = useState(null);
	const [display, setDisplay] = useState('none')

	// const shoot = () => {
	// 	return <Popup trigger={<button className="Button Button-colored">Сделать фото</button>} modal>
	// 		<Camera />
	// 		<Button colored>Ok</Button>
	// 	</Popup>
	// }

	return <OtherPage>
		<Image className='pageTitle' src='/join.svg' alt='Представьтесь' width={154} height={43} />
		<div style={{width: 400}}>
			<div className="haha">
				<p>Введите имя и фамилию:</p>
				<input className='hahahahaha' type="text" onChange={(e) => setName(e.target.value)} required />
			</div>
			<div className="haha">
				<p>Вставьте ссылку на разминку:</p>
				<input className='hahahahaha' type="text" onChange={(e) => setRoomId(e.target.value)} required />
			</div>
		</div>
		<div className="go" style={{marginTop:60}}>
			{/* <Button colored onClick={() => setDisplay('block')}>Сделать фото</Button>
			<div className="poPuP" style={{display: display}}>
				<Camera setMyOwnImgFileHaha={setPhoto}/>
				<Button colored>Ok</Button>
			</div> */}

			<Button>Продолжить без фото</Button>
		</div>
	</OtherPage>
}

export default Join;
