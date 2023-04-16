import Image from 'next/image';
// import { Link, BrowserRouter } from 'react-router-dom';
import Link from 'next/link'
import Button from '@/components/Button'

export default function Home() {
	return (
		<main className="Home">
			<div className="mandarin-image">
				<div className="dot1"></div>
				<div className="dot2"></div>
			</div>
			{/* <h1 className="Title">RetroTwister</h1> */}
			{/* {typeof window === 'undefined' ? 'RetroTwister' : <Link href='/'> */}
				<Image className="RetroTwister" src="RetroTwister.svg" width={239} height={77} alt="RetroTwister"></Image>
			{/* </Link>} */}
			<p>Веб-инструмент для создания scrum-разминки.<br />Проводи встречи быстрее, продуктивнее, веселее!</p>

			<Link href="/create">
				<Button colored>Создать разминку</Button>
			</Link>
			<Link href="/join">
				<Button>У меня есть ссылка</Button>
			</Link>

			<div className="pussycat-sup">
				<div className="pussy-contain">
					<Image className='pussycat' src='/cat.gif' width={592} height={360} alt=''></Image>
				</div>
				
				<div className="sup-contain">
					<Image className='sup' src='/sup.svg' width={405} height={281} alt=''></Image>
				</div>
			</div>
			
		</main>
	)
}
