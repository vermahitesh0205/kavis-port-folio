// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                    <motion.div
                        className="md:w-1/3"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-6 text-center border-b border-gray-500 pb-4">Personal Information</h3>
                            <div className="grid grid-cols-1 gap-4 text-gray-300">
                                <div className="flex">
                                    <span className="font-semibold w-28 text-blue-400">Name:</span>
                                    <span>Kavita Sahu</span>
                                </div>
                                <div className="flex">
                                    <span className="font-semibold w-28 text-blue-400">Location:</span>
                                    <span>Bhilai, Chhattisgarh</span>
                                </div>
                                <div className="flex">
                                    <span className="font-semibold w-28 text-blue-400">Education:</span>
                                    <span>B.Tech (Computer Science)</span>
                                </div>
                                <div className="flex">
                                    <span className="font-semibold w-28 text-blue-400">Percentage:</span>
                                    <span>86.9%</span>
                                </div>
                                <div className="flex">
                                    <span className="font-semibold w-28 text-blue-400">University:</span>
                                    <a
                                        href="https://csvtu.ac.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline"
                                    >
                                        CSVTU, Bhilai
                                    </a>
                                </div>
                                <div className="flex">
                                    <span className="font-semibold w-28 text-blue-400">College:</span>
                                    <a
                                        href="https://csitdurg.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline"
                                    >
                                        CSIT, Durg (CG)
                                    </a>
                                </div>

                                <div className="flex">
                                    <span className="font-semibold w-28 text-blue-400">Role:</span>
                                    <span>React Native Developer</span>
                                </div>
                                <div className="flex">
                                    <span className="font-semibold w-28 text-blue-400">Experience:</span>
                                    <span>May 2022 - Present</span>
                                </div>
                                <div className="flex">
                                    <span className="font-semibold w-28 text-blue-400">Languages:</span>
                                    <span>English, Hindi</span>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div
                        className="md:w-2/3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Biography</h3>
                            <p className="text-gray-300 mb-4">
                                I am a skilled React Native developer with experience in building cross-platform mobile applications.
                                My journey in mobile app development began in May 2022, and since then, I've been consistently
                                enhancing my skills and gaining valuable experience by working on diverse projects and challenging tasks.
                            </p>
                            <p className="text-gray-300 mb-4">
                                I have a strong educational background with a B.Tech in Computer Science, achieving an impressive
                                aggregate of 86.9% from Chhatrapati Shivaji Institute of Technology. This academic foundation has
                                equipped me with the theoretical knowledge that complements my practical skills and problem-solving abilities.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Throughout my career, I've worked with various technologies including React Native, ReactJS, NextJS,
                                MongoDB, Tailwind CSS, NativeWind, JavaScript, and more. I have experience in
                                both Android and iOS development environments, and I'm proficient with version control systems like Git.
                                I've successfully deployed applications to both Google Play Store and Apple App Store, demonstrating
                                my ability to handle the complete app development lifecycle from scratch to production.
                            </p>
                            {/* <p className="text-gray-300">
                                Looking ahead, I aspire to take on leadership roles where I can mentor junior developers, contribute to architecture
                                decisions, and help deliver impactful products. Apart from coding, I am known for my patience, adaptability, and
                                problem-solving attitude, which helps me stay calm and focused even under tight deadlines.
                            </p> */}

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;