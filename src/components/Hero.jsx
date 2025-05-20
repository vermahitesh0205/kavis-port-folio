// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    const fullText = "Hello, I'm Kavita Sahu 👋";
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="pt-20 md:pt-0 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        className="md:w-1/2 mb-10 md:mb-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                        >
                            {displayedText.includes('Kavita Sahu') ? (
                                <>
                                    {displayedText.split('Kavita Sahu')[0]}
                                    <span className="text-blue-500">Kavita Sahu</span>
                                    {displayedText.split('Kavita Sahu')[1]}
                                </>
                            ) : (
                                displayedText
                            )}
                        </motion.h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-gray-300">
                            Experienced React Native Developer
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Building cross-platform mobile applications with a focus on performance and user experience.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <motion.button
                                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact Me
                                </motion.button>
                            </Link>
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <motion.button
                                    className="px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-500 font-semibold rounded-md hover:bg-blue-900 hover:bg-opacity-20 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View My Work
                                </motion.button>
                            </Link>
                            <motion.a
                                href="/Kavita-Resume.pdf" // Make sure this file is placed in the public folder
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors cursor-pointer"
                            >
                                Download Resume
                            </motion.a>
                        </div>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-1">
                            <img
                                src="/Kavita-Photo.jpg" // make sure this image is in your public folder
                                alt="Kavita Sahu"
                                className="w-full h-full object-cover rounded-full border-4 border-gray-900"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
