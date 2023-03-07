import React from 'react';
import {
	SiPinterest,
	SiInstagram,
} from 'react-icons/si';

import { GrFacebook } from 'react-icons/gr';
import './footer.css';

export default function Footer() {
  return (
		<footer>
			<GrFacebook size={25} className='icons' />
			<SiPinterest size={25} className='icons' />
			<SiInstagram size={25} className='icons' />
		</footer>
	);
}
