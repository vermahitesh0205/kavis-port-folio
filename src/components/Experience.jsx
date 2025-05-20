import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: "Hyphun technologies pvt.ltd",
            position: "React Native Developer",
            duration: "September 2023 - Present",
            type: "Full-time",
            description: [
                "Working as a full-time **React Native** developer",
                "Developing and maintaining cross-platform mobile applications using **React Native CLI**",
                "Implemented responsive UI designs using **Tailwind CSS** in **React Native**",
                "Integrated **REST APIs** using **Axios** and handled secure data communication",
                "Collaborated with backend teams working on **MongoDB** and **Node.js**",
                "Hands-on experience with **Redux**, **Redux Toolkit** for state management",
                "Used **React Navigation** for smooth navigation handling",
                "Integrated **Firebase** for push notifications",
                "Experience with **CodePush** for over-the-air updates",
                "Deployed applications on **Google Play Store** and **Apple App Store**",
                "Version control and collaboration using **Git** and **GitHub**",
                "Also contributed in writing reusable components with **JavaScript**"
            ]
        },
        {
            company: "Conic works pvt.ltd",
            position: "React Native Developer",
            duration: "August 2022 - September 2023",
            type: "Full-time",
            description: [
                "Worked on developing mobile applications using **React Native**",
                "Built responsive layouts using **Tailwind CSS**",
                "Gained practical experience on state management with **Redux**",
                "Learned app deployment on **Play Store** & **App Store**",
                "Collaborated with seniors and improved **problem-solving skills**",
                "Worked with libraries like **react-native-image-picker** and **react-native-linear-gradient**",
                "Started learning **TypeScript** and **Git basics**"
            ]
        },
        {
            company: "Pylons Technology",
            position: "React Native Intern",
            duration: "June 2022 - July 2022",
            type: "Internship",
            description: [
                "2-month internship focusing on fundamentals of **React Native development**",
                "Developed basic screens and **UI components**",
                "Learned **JavaScript**, **ES6 concepts**, and **functional programming**",
                "Started working with **APIs** and **Axios**",
                "Explored **Git** and collaborative workflows",
                "Collaborated with team on small **ReactJS** components"
            ]
        }
    ];

    const education = [
        {
            institution: "Chhatrapati Shivaji Institute of Technology, Durg",
            degree: "Bachelor of Technology (B.Tech) - Computer Science",
            duration: "2019 - 2023",
            percentage: "86.3",
            link: "https://csitdurg.in/"
        },
        {
            institution: "Oracle Public School, Dhamtari",
            degree: "Higher Secondary (12th) - Science Stream",
            duration: "2018 - 2019",
            percentage: "73.2%",
        },
        {
            institution: "Oracle Public School, Dhamtari",
            degree: "Secondary School (10th)",
            duration: "2016 - 2017",
            percentage: "85.5%",
        }
    ];



    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6
            }
        })
    };

    // Function to bold keywords in description
    const highlightKeywords = (text) => {
        return text.split('**').map((part, index) =>
            index % 2 === 1 ? <strong key={index} className="text-blue-400">{part}</strong> : part
        );
    };

    return (
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Work Experience</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-gray-800 border-l-4 border-blue-500 rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                                        <p className="text-blue-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                                            {exp.type}
                                        </span>
                                        <p className="text-gray-400 mt-2">{exp.duration}</p>
                                    </div>
                                </div>
                                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{highlightKeywords(item)}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-20 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </motion.div>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-gray-800 border-l-4 border-blue-500 rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                {edu.link ? (
                                    <a
                                        href={edu.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 font-medium hover:underline"
                                    >
                                        {edu.institution}
                                    </a>
                                ) : (
                                    <p className="text-blue-400 font-medium">{edu.institution}</p>
                                )}
                                <p className="text-gray-400 mt-2">{edu.duration}</p>
                                {edu.percentage && (
                                    <p className="text-green-400 mt-1 font-medium">Percentage: {edu.percentage}</p>
                                )}
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
