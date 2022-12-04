import React, { useState } from 'react';
import { checkPhoneNumber, validateEmail } from '../utils/helpers';
import contactImg from '../assets/contact-img-sq.jpg';
import '../styles/Contact.css';

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
		<section className="contactMe" class="contactMe">
			<form className="contact_box" method="post">
				<h2>Contact Me</h2>
				<div className="input_group">
					<label className="label">
						Name
						<input
							value={userName}
							name="userName"
							onChange={handleInputChange}
							type="text"
							placeholder="Full Name"
							className="name"
						/>
					</label>
				</div>
				<div className="input_group">
					<label className="label">
						Phone Number
						<input
							name="phoneNumber"
							type="text"
							onChange={handleInputChange}
							class="phone"
							placeholder="xxx-xxx-xxxx"
						/>
					</label>
				</div>
				<div className="input_group">
					<label className="label">
						Email
						<input
							value={email}
							name="email"
							onChange={handleInputChange}
							type="email"
							placeholder="email"
							className="email"
						/>
					</label>
				</div>
				<div className="input_group">
					<label className="label">
						Project
						<textarea
							name="project"
							value={project}
							onChange={handleInputChange}
							className=""
							placeholder="Please give a brief description of the project and the best time to contact you."
						></textarea>
					</label>
				</div>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<button type="button" onClick={handleContactSubmit}>
					Submit
				</button>
				<div className="aTag">
					Reach me by email at{' '}
					<a className="aTag" href="mailto:kvance1010@protonmail.com">
						kvance1010@protonmail.com
					</a>
				</div>
			</form>
			<img src={contactImg} alt="a black and white image of a laptop" />
		</section>
	);
}
