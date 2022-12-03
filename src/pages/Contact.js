import React, { useState } from 'react';
import { checkPhoneNumber, validateEmail } from '../utils/helpers';


export default function Contact() {
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [project, setProject] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleInputChange = (e) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		if (inputType === 'email') {
			setEmail(inputValue);
		} else if (inputType === 'userName') {
			setUserName(inputValue);
		} else if (inputType === 'phoneNumber') {
			setPhoneNumber(inputValue);
		} else {
			setProject(inputValue);
		}
	};

	const handleContactSubmit = (e) => {
		e.preventDefault();
		if (!validateEmail(email) || !userName) {
			setErrorMessage('invalid Email');
			return;
		}
		if (!checkPhoneNumber(phoneNumber)) {
			setErrorMessage(
				`Please enter a valid phone number. Phone numbers should be only numbers without spaces.`
			);
			return;
		}
		alert(
			`Thank you for contacting me. I will respond in the next 24 hours to 48 hours to your request.`
		);

		setUserName('');
		setProject('');
		setPhoneNumber('');
		setEmail('');
	};

	return (
		<section id="contactMe" class="contactMe">
			<form class="contact_box" action="#" method="post">
				<h2>Contact Me</h2>
				<div class="input_group">
					<label for="userName">Name</label>
					<input
						value={userName}
						name="userName"
						onChange={handleInputChange}
						type="text"
						placeholder="Full Name"
						className="name"
					/>
				</div>
				<div className="input_group">
					<label for="phoneNumber" class="phone">
						Phone Number
					</label>
					<input
						name="phoneNumber"
						type="text"
						onChange={handleInputChange}
						class="phone"
						placeholder="xxx-xxx-xxxx"
					/>
				</div>
				<div class="input_group">
					<label for="email" class="email">
						Email
					</label>
					<input
						value={email}
						name="email"
						onChange={handleInputChange}
						type="email"
						placeholder="email"
						className="email"
					></input>
				</div>
				<div class="input_group">
					<label for="project" class="project">
						Project
					</label>
					<textarea
						name="project"
						onChange={handleInputChange}
						className=""
						placeholder="Please give a brief description of the project and the best time to contact you."
					></textarea>
				</div>
				<button type="button" onClick={handleContactSubmit}>
					Submit
				</button>
			</form>
			{errorMessage && (
				<div>
					<p className="error-text">{errorMessage}</p>
				</div>
			)}
			<img
				src="./assets/images/contact-img-sq.jpg"
				alt="a black and white image of a laptop"
			/>
		</section>
	);
}
