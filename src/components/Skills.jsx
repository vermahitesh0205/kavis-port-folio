// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            name: "Mobile Development",
            skills: [
                { name: "React Native", proficiency: 90 },
                { name: "Flutter", proficiency: 70 },
                { name: "NativeWind", proficiency: 85 },
                { name: "Xcode", proficiency: 80 },
                { name: "Android Studio", proficiency: 80 },
                { name: "App Store Deployment", proficiency: 85 },
                { name: "Play Store Deployment", proficiency: 85 }
            ]
        },
        {
            name: "Web Development",
            skills: [
                { name: "ReactJS", proficiency: 85 },
                { name: "NextJS", proficiency: 80 },
                { name: "Tailwind CSS", proficiency: 85 }
            ]
        },
        {
            name: "Programming Languages",
            skills: [
                { name: "JavaScript", proficiency: 90 },
                { name: "Dart", proficiency: 85 },
                { name: "Java", proficiency: 70 },
            ]
        },
        {
            name: "Others",
            skills: [
                { name: "MongoDB", proficiency: 75 },
                { name: "Redux", proficiency: 85 },
                { name: "Git", proficiency: 80 },
                { name: "Vercel Deployment", proficiency: 80 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            className="bg-gray-700 p-6 rounded-lg shadow-lg"
                        >
                            <h3 className="text-xl font-bold mb-6 text-blue-400">{category.name}</h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-gray-400">{skill.proficiency}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-600 rounded-full">
                                            <motion.div
                                                className="h-full bg-blue-500 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.proficiency}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;