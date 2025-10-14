'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, Sparkles } from 'lucide-react';
import { projects as featuredProjects } from '@/lib/data';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const fetchGitHubRepos = async () => {
    try {
      const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'eby99';
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Showcase of my best work and contributions
            </p>
          </div>

          {/* Featured Projects from Resume */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl card-hover border border-gray-200 dark:border-gray-700"
                >
                  {/* Featured Badge */}
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-white font-bold text-sm">Featured</span>
                  </div>

                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4 mt-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {project.name}
                    </h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                      >
                        <Github className="w-6 h-6 text-gray-800 dark:text-white" />
                      </a>
                    )}
                  </div>

                  {/* Project Type */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                      {project.type}
                    </span>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects Heading */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">More Projects</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Latest projects from my GitHub repository
            </p>
          </div>

          {/* GitHub Projects Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.filter(repo => !['PixSense', 'ImageCaptionGen'].includes(repo.name)).slice(0, 9).map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover border border-gray-200 dark:border-gray-700"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                      <Github className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {repo.name}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {repo.description || 'No description available'}
                  </p>

                  {/* Project Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks_count}
                    </span>
                  </div>

                  {/* Topics/Tags */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {repo.topics.slice(0, 3).map((topic, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'eby99'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}