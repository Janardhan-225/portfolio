"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "AI Nexus – Document Insight Engine",
    description:
      "Semantic PDF intelligence platform with FastAPI, MongoDB, and Google Gemini. Features vector search, podcast generation, and Adobe Embed API integration.",
    techStack: ["FastAPI", "MongoDB", "React", "Google Gemini", "Docker"],
    github: "https://github.com/Janardhan-225/ai-nexus-doc-insight.git",
    demo: "https://ai-nexus-doc-insight.vercel.app/",
  },
  {
    title: "Teacher Portal",
    description:
      "Full-stack web portal for teachers and students with role-based dashboards, Razorpay integration, and AI-driven recommendations.",
    techStack: ["MERN Stack", "Razorpay API", "Cosine Similarity", "MongoDB"],
    github: "https://github.com/Janardhan-225/Teacher-Portal.git",
    demo: "https://teacher-portal.vercel.app/",
  },
  {
    title: "AI Trends Explorer",
    description:
      "Aggregates and visualizes emerging AI technologies using automated data pipelines and interactive dashboards.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Chart.js"],
    github: "https://github.com/Janardhan-225/AI-Trends-Explorer.git",
    demo: "https://ai-tools-front.onrender.com/",
  },
  {
    title: "Mood Meals Explorer",
    description:
      "AI-powered food recommendation app that maps user moods to meal suggestions using NLP and sentiment analysis.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "NLP"],
    github: "https://github.com/Janardhan-225/mood-meals-explorer",
    demo: "https://mood-meals-explorer.vercel.app/",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
