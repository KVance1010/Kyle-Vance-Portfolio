import React from 'react';
import me from '../images/kyle-vance.jpg'

export default function About() {
  return (
    <section className="aboutMe">
      <img src={me} alt="a face picture of Kyle Vance" />
      <div class="about_me_content">
        <h2>About Me</h2>
        <p>
            Hello Everyone! 

            I’m Kyle, a passionate and highly skilled software engineer with hands-on experience developing and
            integrating innovative features in multiple systems and applications. I'm known for managing the
            design,
            development, and delivery of superior technology solutions through the creation of high-quality
            source
            code. Moreover, I have a proven record of success in debugging systems and applications to address
            critical issues. I am an excellent problem-solver with the ability to efficiently streamline
            processes
            and maximize system resources. Furthermore, I am proficient at providing high-level customer service
            to
            align technical support with the execution of various digital technologies. My work ethic and the
            ability to thrive in team-based or individually motivated settings are second to none. I am also a
            proactive self-starter, recognized for initiating improvements to increase system stability and
            staff
            productivity.
        </p>
        <h4> My skill set includes: </h4>
        <ul>
            <li><abbr title="MongoDb Express React Node">MERN</abbr> stack</li>
            <li><abbr title="MongoDb Express Angular Node">MEAN</abbr> stack</li>
            <li>Java / Java EE programming</li>
            <li>Agile / Scrum Development</li>
            <li>Software Development Lifecycle</li>
            <li>Project Planning & Development</li>
            <li>Full Stack Development</li>
            <li>Clean Coding</li>
            <li>DevOps Management</li>
            <li>Testing & Troubleshooting</li>
            <li>Database Development</li>
        </ul>
        <p>
            I am confident that my wide range of knowledge and talents will allow me to contribute to the
            success of
            your company. While others take pride in meeting all standards set before them, my passion is for
            delivering service and leadership that goes beyond organizational expectations. Connect with me
            today or
            send me an email at kvance1010@protonmail.com, if you want to discuss additional details regarding
            my
            work experience or skill set. I'm always interested in making new professional acquaintances!
         </p>
      </div>
    </section>
  );
}

