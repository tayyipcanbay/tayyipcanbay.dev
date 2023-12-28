'use client';

import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';
import Link from 'next/link';

const staticProjects = [
    {
        id: 1,
        imageUrl: '/char-counter.png',
        sourceCode: '',
        liveUrl: '',
        title: 'Autonomous Air-to-Air Combat System for UAVs (Present)',
        content: "Developing a cutting-edge Autonomous Air-to- Air Combat System for UAVs as part of my school's final project. Utilizing TensorFlow, OpenCV, and Kalman Filter technologies to enhance UAV capabilities in air-to-air combat scenarios.",
        hastags: [
            {
                id: 4,
                title: 'OpenCV',
                published: true,
                projectId: 1,
            },
            {
                id: 5,
                title: 'Tensorflow',
                published: true,
                projectId: 1,
            },
            {
                id: 6,
                title: 'Kalman Filter',
                published: true,
                projectId: 1,
            },
            {
                id: 7,
                title: 'Python',
                published: true,
                projectId: 1,
            },
        ],
    },
    {
        id: 2,
        imageUrl: '/char-counter.png',
        sourceCode: '',
        liveUrl: '',
        title: 'Kandilli API',
        content: "Created an API for Boğaziçi University's Kandilli Observatory and Earthquake Research Institute. Utilized Pandas and NumPy for data processing, and Flask for API development. The API delivers filtered real-time earthquake data and generates heatmaps based on specific criteria.",
        hastags: [
            {
                id: 4,
                title: 'Python',
                published: true,
                projectId: 2,
            },
            {
                id: 5,
                title: 'Flask',
                published: true,
                projectId: 2,
            },
            {
                id: 6,
                title: 'Pandas',
                published: true,
                projectId: 2,
            },
            {
                id: 7,
                title: 'Numpy',
                published: true,
                projectId: 2,
            },
            {
                id: 7,
                title: 'Folium',
                published: true,
                projectId: 2,
            },
        ],
    },
    {
        id: 3,
        imageUrl: '/malware-header.jpg',
        title: 'Rocket Link (URL Shortener Project)',
        sourceCode: '',
        liveUrl: '',
        content: "I spearheaded the development of a URL shortener service, allowing users to easily create accounts, manage their profiles, and streamline their links for greater accessibility and efficiency.",
        hastags: [
            {
                id: 1,
                title: 'React.JS',
                published: true,
                projectId: 3,
            },
            {
                id: 2,
                title: 'Node.JS',
                published: true,
                projectId: 3,
            },
            {
                id: 3,
                title: 'SQL',
                published: true,
                projectId: 3,
            }
        ],
    },
    {
        id: 4,
        imageUrl: '/malware-header.jpg',
        title: 'TTen (Chat-GPT-Enhanced Project with Image Prompt)',
        sourceCode: '',
        liveUrl: '',
        content:
            "TTen, developed solely by me, combines both frontend and backend elements. It provides unrestricted access to Chat-GPT using your API key, with additional image prompt capabilities powered by Tesseract. The frontend is built with React.js, and the backend is implemented using Flask and Python.",
        hastags: [
            {
                id: 1,
                title: 'OpenAI',
                published: true,
                projectId: 4,
            },
            {
                id: 2,
                title: 'React.JS',
                published: true,
                projectId: 4,
            },
            {
                id: 3,
                title: 'Python',
                published: true,
                projectId: 4,
            },
            {
                id: 3,
                title: 'Flask',
                published: true,
                projectId: 4,
            },
            {
                id: 3,
                title: 'Tesseract',
                published: true,
                projectId: 4,
            },
        ],
    },
    {
        id: 5,
        imageUrl: '/malware-header.jpg',
        title: 'Flight Database',
        sourceCode: '',
        liveUrl: '',
        content:
            "The flight management database project aims to create a database schema that can store information related to airports, airlines, flights, passengers, and flight delays. The purpose of this database is to facilitate the management and tracking of flights, passengers, and delays.",
        hastags: [
            {
                id: 1,
                title: 'SQL',
                published: true,
                projectId: 5,
            },
            {
                id: 2,
                title: 'MySQL',
                published: true,
                projectId: 5,
            },
            {
                id: 3,
                title: 'Oracle',
                published: true,
                projectId: 5,
            },
        ],
    },
    {
        id: 6,
        imageUrl: '/malware-header.jpg',
        title: 'Socket Chat',
        sourceCode: '',
        liveUrl: '',
        content:
            "Our server, featuring threaded architecture, adeptly manages incoming connections, user interactions, and communication—ensuring optimal performance through parallel processing.",
        hastags: [
            {
                id: 1,
                title: 'Java',
                published: true,
                projectId: 6,
            },
            {
                id: 2,
                title: 'Paralel Programming',
                published: true,
                projectId: 6,
            },
        ],
    },
];

export default function ProjectList() {
    const [isLoading, SetLoading] = useState(false);

    return (
        <>
            {isLoading ? (
                <>
                    <ProjectCardLoading />
                    <ProjectCardLoading />
                    <ProjectCardLoading />
                </>
            ) : (
                <>
                    {staticProjects.map((element) => (
                        <ProjectCard project={element} key={element.id} />
                    ))}
                </>
            )}
        </>
    );
}

const ProjectCardLoading = () => {
    return (
        <div className="w-[380px] h-[475px] mx-auto rounded overflow-hidden shadow-lg dark:shadow-none">
            <Skeleton className="h-[250px] w-full mb-4" />

            <div className="flex flex-col px-6 pt-2 pb-4">
                <Skeleton className="mb-4 h-6 w-40 rounded" />
                <Skeleton className="h-20 w-[300px] rounded" />
            </div>

            <div className="flex flex-row mt-auto px-6 pt-2 gap-2 w-full">
                <Skeleton className="rounded-full h-7 w-20" />
                <Skeleton className="rounded-full h-7 w-20" />
                <Skeleton className="rounded-full h-7 w-20" />
            </div>
        </div>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg dark:shadow-none">
            <div className="h-[250px] w-full relative">
                <Image
                    className="w-full"
                    src={project.imageUrl}
                    alt="Sunset in the mountains"
                    fill={true}
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base dark:text-gray-200">
                    {project.content}
                </p>
            </div>
            <div className="px-6 pb-2">
                {project.hastags.map((element) => (
                    <span
                        key={element.id}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                        #{element.title}
                    </span>
                ))}
            </div>
            <div className="px-6 min-h-[56px] pt-1 pb-4 flex items-center gap-3">
                {project?.liveUrl && (
                    <Link
                        href={project?.liveUrl}
                        target="_blank"
                        class="relative items-center justify-start inline-block px-5 py-2 overflow-hidden duration-500 text-sm font-semibold group"
                    >
                        <span class=" duration-500  translate-x-12 -translate-y-2 absolute left-0 top-0 bg-primary opacity-[3%]"></span>
                        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
                        <span class="relative w-full text-left text-primary transition-colors duration-1000 ease-in-out group-hover:text-white dark:group-hover:text-gray-900">
                            See Live
                        </span>
                        <span class="absolute duration-500 inset-0 border border-primary"></span>
                    </Link>
                )}
                {project?.sourceCode && (
                    <Link target="_blank" href={project.sourceCode}>
                        <p className="hover:translate-x-1 ease-in transition-all duration-300 text-primary text-sm font-semibold">
                            Source Code
                        </p>
                    </Link>
                )}
            </div>
        </div>
    );
};
