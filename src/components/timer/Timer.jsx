import React from 'react';
import CountDown from './countdown/CountDown';
import './timer.css';

export default function Timer() {
	const obj = CountDown();

	const values = Object.keys(obj).map((key, index) => {
		return (
			<div key={index}>
				<div className='digit_container'>
					<div className='segment-display'>
						<div className='segment-display-top'>{obj[key].value}</div>
						<div className='segment-display-bottom'>{obj[key].value}</div>
						<div
							className={`segment-overlay ${obj[key].updated ? 'flip' : ''}`}
						>
							<div className='segment-overlay_top'>{obj[key].value}</div>
							<div className='segment-overlay_bottom'>{obj[key].value}</div>
						</div>

						<i class='left'></i>
						<i class='right'></i>
					</div>
				</div>
				<span>{key}</span>
			</div>
		);
	});

  return (
		<section className='countdown'>
			{values}
		</section>
	);
}
