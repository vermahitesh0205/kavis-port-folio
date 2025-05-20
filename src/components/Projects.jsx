// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [showLightbox, setShowLightbox] = useState(false);
    const [lightboxImage, setLightboxImage] = useState('');

    const categories = ['all', 'mobile', 'web'];

    const projects = [
        {
            id: 2,
            title: "IMEI Book ",
            category: "mobile",
            image: "/imei1.jpeg",
            description: "A robust inventory management system with real-time barcode/QR scanning, vendor coordination, and detailed analytics to ensure accurate stock tracking and smarter business decisions.",
            technologies: ["ReactJS", "NextJS", "Tailwind CSS", "ChartJS"],
            apkLink: "https://drive.google.com/file/d/1MJm5ZPpg5kal43mrZawtV_5H_-4i4RTL/view?usp=sharing", // Google Drive link here
            screenshots: [
                "/imei1.jpeg",
                "/imei2.jpeg",
                "/imei3.jpeg"
            ],
            longDescription: "This inventory management system is a robust and efficient solution designed to streamline stock control and vendor coordination. It features real-time product scanning using barcode or QR code technology, enabling instant updates to inventory levels and reducing manual errors. The system also includes comprehensive vendor management tools, allowing users to track supplier information, manage purchase orders, and monitor product availability. Ideal for warehouses, retail businesses, and supply chain operations, this solution ensures better inventory accuracy, faster processing, and improved operational efficiency."
        },
        {
            id: 1,
            title: "E-Commerce Mobile App",
            category: "mobile",
            image: "/e1.jpeg",
            description: "A full-featured e-commerce mobile application built with React Native, featuring product listing, cart management, and secure payment processing.",
            technologies: ["React Native", "Redux", "NativeWind", "Razorpay"],
            apkLink: "https://drive.google.com/file/d/13_4lBPIC7dGpzR-AYTiOMBr8yroYKYfs/view?usp=sharing", // Google Drive link here
            screenshots: [
                "/e1.jpeg",
                "/e2.jpeg",
                "/e3.jpeg"
            ],
            longDescription: `A complete e-commerce mobile app built with React Native, offering smooth product browsing, easy cart management, and secure payment processing. Designed for fast, user-friendly shopping on both Android and iOS platforms.`
        },

        {
            id: 3,
            title: "Clikshop - Online Book Store",
            category: "mobile",
            image: "/clikshop1.jpeg",
            description: "Clikshop is your go-to online bookstore, delivering books and stationery across Chhattisgarh and India. From school and college textbooks to competitive exam guides and general reading, we've got it all in one place.",
            technologies: ["React Native", "TypeScript", "Redux", "Razorpay"],
            apkLink: "https://play.google.com/store/apps/details?id=com.bansal.clickshop&pcampaignid=web_share", // Google Drive link here
            screenshots: [
                "/clikshop1.jpeg",
                "/clikshop2.jpeg",
                "/clikshop3.jpeg"
            ],
            longDescription: `Clikshop: Your Ultimate Online Bookstore for Chhattisgarh and All over India.
Clikshop is the premier online bookstore app, catering to all your educational and reading needs in Chhattisgarh and across India. We offer an extensive collection of books and stationery, with a special focus on competitive exam preparation, school and college curriculam, and a wide range of general reading materials.`
        },
        {
            id: 4,
            title: "Life Care - Health Care App",
            category: "mobile",
            image: "/lifecare1.jpeg",
            description: "Life Care is a health and wellness mobile app offering easy access to medical services, doctor consultations, health tracking, and more — all in one place.",
            technologies: ["ReactJS", "MongoDB", "Tailwind CSS", "Health Kit API", 'Firebase', 'Google Maps API'],
            apkLink: "https://drive.google.com/file/d/YOUR_GDRIVE_FILE_ID/view?usp=sharing", // Google Drive link here
            screenshots: [
                "/lifecare1.jpeg",
                "/api/placeholder/800/500",
                "/api/placeholder/800/500"
            ],
            longDescription: `Life Care is a comprehensive health and wellness mobile application designed to simplify your healthcare needs. The app offers a wide range of features including online doctor consultations, appointment bookings, medicine orders, and health record management. With user-friendly navigation and real-time health tracking, Life Care empowers users to monitor their well-being and access essential medical services anytime, anywhere. Whether it's regular checkups or emergency support, Life Care ensures healthcare is just a tap away.`
        },
        {
            id: 5,
            title: "Milk Supply - Dairy App",
            category: "mobile",
            image: "/milk1.jpeg",
            description: "Milk Supply is a smart dairy app for managing daily milk delivery, orders, billing, and customer records with ease.",
            technologies: ["React Native", "Redux", "Firebase", "Google Maps API"],
            apkLink: "https://drive.google.com/file/d/1EDhrg3eij8hEFTGi3Gzoc3g-QVL37Hok/view?usp=sharing", // Google Drive link here
            screenshots: [
                "/milk1.jpeg",
                "/milk2.jpeg",
                "/milk3.jpeg"
            ],
            longDescription: "Milk Supply is a dedicated dairy management app designed to streamline daily milk delivery operations. Whether you're a milk distributor or a dairy business owner, the app helps you manage customer subscriptions, track daily deliveries, generate bills, and maintain accurate records effortlessly. With features like real-time order updates, payment tracking, and customer communication, Milk Supply ensures smoother operations and better service for both providers and customers."
        }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const openLightbox = (image) => {
        setLightboxImage(image);
        setShowLightbox(true);
    };

    const closeLightbox = () => {
        setShowLightbox(false);
    };

    const viewProjectDetails = (project) => {
        setSelectedProject(project);
    };

    const closeProjectDetails = () => {
        setSelectedProject(null);
    };

    // Modified the download button to open the link in a new tab instead
    const handleDownload = (link) => {
        window.open(link, '_blank');
    };

    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </motion.div>

                <div className="flex justify-center mb-10">
                    <div className="flex bg-gray-700 p-1 rounded-lg shadow-lg">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-md mx-1 ${activeCategory === category
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-300 hover:bg-gray-600'
                                    }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover cursor-pointer"
                                    onClick={() => openLightbox(project.image)}
                                />
                                {project.category === "mobile" && (
                                    <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                                        Mobile App
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-900 text-blue-300 px-2 py-1 rounded-md text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button
                                        className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                                        onClick={() => viewProjectDetails(project)}
                                    >
                                        View Details
                                    </button>
                                    {project.apkLink && (
                                        <button
                                            onClick={() => handleDownload(project.apkLink)}
                                            className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors text-center"
                                        >
                                            Download APK
                                        </button>
                                    )}
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors text-center"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox for screenshots */}
                {showLightbox && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                        <div className="max-w-4xl w-full">
                            <img
                                src={lightboxImage}
                                alt="Screenshot"
                                className="max-w-full max-h-[80vh] mx-auto"
                            />
                            <button
                                className="absolute top-4 right-4 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center"
                                onClick={closeLightbox}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}

                {/* Project Details Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 overflow-y-auto">
                        <div className="bg-gray-800 max-w-4xl w-full rounded-lg overflow-hidden relative">
                            <button
                                className="absolute top-4 right-4 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center"
                                onClick={closeProjectDetails}
                            >
                                ✕
                            </button>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-4 text-white">{selectedProject.title}</h2>
                                <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>

                                <h3 className="text-xl font-bold mb-2 text-white">Screenshots</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    {selectedProject.screenshots.map((screenshot, index) => (
                                        <img
                                            key={index}
                                            src={screenshot}
                                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                                            className="w-full h-40 object-cover rounded-lg cursor-pointer"
                                            onClick={() => openLightbox(screenshot)}
                                        />
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold mb-2 text-white">Technologies</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-900 text-blue-300 px-3 py-1 rounded-md text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    {selectedProject.apkLink && (
                                        <button
                                            onClick={() => handleDownload(selectedProject.apkLink)}
                                            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors text-center flex-1"
                                        >
                                            Download APK
                                        </button>
                                    )}
                                    {selectedProject.demoLink && (
                                        <a
                                            href={selectedProject.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors text-center flex-1"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;