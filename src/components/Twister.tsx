import React, {useState} from 'react';
import {Wheel} from 'react-custom-roulette';
import Dude from './Dude'
import Button from './Button';
import Image from 'next/image';


const names = [
	{
		name: 'Тёма Вахрушев',
		image: 'uno.jpg'
	},
	{
		name: 'Даша Деньщик',
		image: 'dos.jpg'
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
	const [showResult, setShowResult] = useState(false);
	const [displayed, setDisplayed] = useState({name: '', image: ''})
	const [mustSpin, setMustSpin] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);

	
	const onSpinClick = () => {
		if (!mustSpin) {
			// setPrizeNumber(Math.floor(Math.random() * data.length));
			setPrizeNumber((prizeNumber + 1) % data.length)
			setMustSpin(true);
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
			<Button onClick={onSpinClick} style={{transform: 'translate(120px, 50px)', border:'2px solid white'}}>Крутить</Button>
		</div>

		<div className="unpart">
			<div className="answer" style={{opacity: !mustSpin ? 1 : 0}}>
				<div className="s">
					<div className="s-text">
						<p>{displayed['name']}, как дела?</p>
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
