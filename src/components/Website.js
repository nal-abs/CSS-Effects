/* eslint-disable max-lines-per-function */
import React from 'react';

const Website = () =>
	<div className="website">
		<div style={ { display: 'flex', height: '5vh', paddingTop: '10px' } }>
			<div style={ { width: '15vw' } }>Logo</div>
			<div style={ {	width: '85vw', display: 'flex',
				justifyContent: 'space-evenly' } }
			>
				<div style={ { color: 'white',
					background: 'rgba(255, 255, 255, 0.5)',
					borderRadius: '5px' } }
				>About us</div>
				<div>Products</div>
				<div>Customers</div>
				<div>Contact us</div>
			</div>
		</div>
		<div style={ { display: 'flex',
			justifyContent: 'center',
			alignItems: 'center', height: '80vh' } }
		>
			<div className="website-glass-effect"/>
		</div>
	</div>;

export default Website;
