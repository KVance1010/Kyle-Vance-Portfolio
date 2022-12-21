import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import './styles/App.css';

export default function App() {
	const [currentPage, setCurrentPage] = useState('');
	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<Router>
			<Header currentPage={currentPage} handlePageChange = {handlePageChange} />
			<Routes>
				<Route path="/" element={<Home currentPage={currentPage} handlePageChange = {handlePageChange}/>} />
				<Route path="/about" element={<About />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/projects" element={<Portfolio />} />
				<Route path="/contact" element={<Contact />} />
				<Route render={() => <h1 className="display-2">Wrong page!</h1>} />
			</Routes>
			<Footer />
		</Router>
	);
}
