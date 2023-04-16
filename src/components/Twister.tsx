import React, {useState} from 'react';
import {Wheel} from 'react-custom-roulette';
import Dude from './Dude'
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';


const names = [
	{
		name: 'Даша Деньщик',
		image: 'dos.jpg'
	},
	{
		name: 'Тёма Вахрушев',
		image: 'uno.jpg'
	},
	{
		name: 'Лена Засыпкина',
		image: 'tres.jpg'
	},
	{
		name: 'Вика Хмелева',
		image: 'cuatro.jpg'
	},
];

const data = names.map(({name}) => ({option: name}));


const Twister = () => {
	const questions = [
		'',
		"Представьте, что вы — супергерой! В чём ваша суперсила?",
		"Что делает тебя по-настоящему счастливым(-ой)?",
		"Что бы вы предпочли: хобот, как у слона, или шею, как у жирафа?",
		"В каком эмоциональном состояние вы сейчас находитесь? Поясните свой ответ",
	]


	const [showResult, setShowResult] = useState(false);
	const [displayed, setDisplayed] = useState({name: '', image: ''})
	const [mustSpin, setMustSpin] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);
	const [current, setCurrent] = useState(0);

	
	const onSpinClick = () => {
		if (!mustSpin) {
			// setPrizeNumber(Math.floor(Math.random() * data.length));
			setPrizeNumber((prizeNumber + 1) % data.length)
			setMustSpin(true);
			setCurrent(current + 1)
		}
	}

	const onStopSpinning = () => {
		setMustSpin(false);
		setDisplayed(names[prizeNumber])
		setShowResult(true);
	}


	return <div className="Twister">
		<div className="part">
			<Wheel
				mustStartSpinning={mustSpin}
				prizeNumber={prizeNumber}
				data={data}

				spinDuration={0.2}
				innerRadius={10}

				onStopSpinning={onStopSpinning}
				backgroundColors={['#FF9784']}
				textColors={['#424F6B']}
				outerBorderColor='#ffffff00'
				innerBorderColor='white'
				// pointerProps={{style: {: 'black'}}}
			></Wheel>
			{
				current !== 4
					? <Button onClick={onSpinClick} style={{transform: 'translate(120px, 50px)', border:'2px solid white'}}>Крутить</Button>
					: <Link href='/kthxbye'>
						<Button style={{transform: 'translate(120px, 50px)', border:'2px solid white'}}>Выйти</Button>
					</Link>

			}
			{/* <Link></Link>
			<Button onClick={onSpinClick} style={{transform: 'translate(120px, 50px)', border:'2px solid white'}}>{current !==4 ? 'Крутить' : 'Выйти'}</Button> */}
		</div>

		<div className="unpart">
			<div className={'answer ' + (showResult && !mustSpin ? 'show' : 'hidden')}>
				<div className="s">
					<div className="s-text">
						<p>{displayed['name'] + ', ' + questions[current]}</p>
						{current == 4 ?<div>
							<Image className="mood" src='/1.jpg' alt='' width={100} height={100} />
							<Image className="mood" src='/2.jpg' alt='' width={100} height={100} />
							<Image className="mood" src='/3.jpg' alt='' width={100} height={100} />
							<Image className="mood" src='/4.jpg' alt='' width={100} height={100} /> </div> : ''}
					</div>
					<Image className='oblako' src="/oblako.svg" alt='' width={850} height={465}></Image></div>
			</div>
				<Image className='pussy' src='/cat.gif' width={592} height={360} alt=''></Image>
			{/* <Image src="/cat.svg" alt='' width=></Image> */}
		</div>
		
		
		{showResult ? <Dude dude={displayed} className={!mustSpin ? 'active' : ''} /> : ''}
	</div>
}

export default Twister;
