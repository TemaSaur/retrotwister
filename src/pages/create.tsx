import OtherPage from "@/components/OtherPage";
import React, {useState} from 'react';
import Button from "@/components/Button";
import axios from "axios";
import Link from "next/link";
import Image from 'next/image'


const Create = () => {
	const [roomId, setRoomId] = useState('');
	// const [categories, setCategories] = useState([]);
	// const [ttypes, setTtypes] = useState([]);

	// axios.get('//ezasy.pythonanywhere.com/all-cat?format=json', {
	// 	headers: {
	// 		 'Access-Control-Allow-Origin' : '*',
	// 	}
	// })
	// 	.then(res => setCategories(res.data))
	// 	.catch(r => console.log(r));
	
	// axios.get('https://ezasy.pythonanywhere.com/get-topic-by-cat/3')
	// 	.then(res => )

	// const getRoomId = () => {
	// 	axios.post('ezasy')
	// 	.then(res => setRoomId(res.data))
	// }

	// const getTypes = (e: any) => {
	// 	axios.get('//ezasy.pythonanywhere.com/get-topic-by-cat/' + e.target.value.toString())
	// 		.then(res => setTtypes(res.data))
	// }

	return <OtherPage>
		<Image className="pageTitle" src='/create.svg' alt='Представьтесь' width={222} height={43}></Image>
		<div style={{width: 400}}>
			<div className="haha">
				<p>Выберите категорию темы:</p>
				<select name="category" id="category">
					<option value="0"></option>
					<option value="1">Стандарт</option>
					<option value="2">Тематическая</option>
					<option value="у">Игровая</option>

					{/* {categories.map(
						(cat, i) => <option key={i} value={i}>{cat}</option>
					)} */}
				</select>
			</div>
			<div className="haha" style={{marginBottom: 25}}>
				<p>Выберите тему интерфейса:</p>
				<select name="theme" id="theme">
					<option value="0"></option>
					<option value="1">Стандарт</option>
					{/* {ttypes.map(
						(tt, i) => <option key={i} value={i}>{tt}</option>
					)} */}
				</select>
			</div>
		</div>
		
		<Link href={'join/7fieR3D5ug'}>
			<Button colored>Создать</Button>
		</Link>
	</OtherPage>
}

export default Create;