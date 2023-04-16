import OtherPage from "@/components/OtherPage";
import { useState } from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";


const Join = (props: {preRoomId: ''}) => {
	const router = useRouter();
	const { id } = router.query;

	const [name, setName] = useState('');
	const [roomId, setRoomId] = useState(id ? id : '');

	return <OtherPage>
		
		<Image className='pageTitle' src='/join.svg' alt='Представьтесь' width={154} height={43} />
		<div style={{width: 400}}>
			<div className="haha">
				<p>Введите имя и фамилию:</p>
				<input className='hahahahaha' type="text" onChange={(e) => setName(e.target.value)}/>
			</div>
			<div className="haha">
				<p>Вставьте ссылку на разминку:</p>
				<input className='hahahahaha' type="text" onChange={(e) => setRoomId(e.target.value)} value='https://scrumtwister.netlify.app/join/7fieR3D5ug' />
				<button>Копировать!</button>
			</div>
		</div>
		<div className="go" style={{marginTop:60}}>
			<Link href="/run">
				<Button colored>Сделать фото</Button>
				<Button>Продолжить без фото</Button>
			</Link>
		</div>
	</OtherPage>
}

export default Join;
