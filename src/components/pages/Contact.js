import React from 'react';

export default function Contact() {
	return (
		<section id="contactMe" class="contactMe">
			<form class="contact_box" action="#" method="post">
				<h2>Contact Me</h2>
				<div class="input_group">
					<label for="name">Name</label>
					<input type="text" class="name" placeholder="Full Name" required />
				</div>
				<div class="input_group">
					<label for="phone" class="phone">
						Phone Number
					</label>
					<input type="text" class="phone" placeholder="xxx-xxx-xxxx" />
				</div>
				<div class="input_group">
					<label for="email" class="email">
						Email
					</label>
					<input type="email" class="email" required placeholder="Email" />
				</div>
				<div class="input_group">
					<label for="description" class="project">
						Project
					</label>
					<textarea
						name="description"
						placeholder="Please give a brief description of the project and the best time to contact you."
					></textarea>
				</div>
				<button type="submit">Submit</button>
			</form>
			<img
				src="./assets/images/contact-img-sq.jpg"
				alt="a black and white image of a laptop"
			/>
		</section>
	);
}
