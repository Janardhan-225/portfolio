"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = {
  Frontend: [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "HTML & CSS", level: 85 },
    { name: "Responsive Design", level: 80 },
  ],
  Backend: [
    { name: "FastAPI", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "RESTful APIs", level: 90 },
    { name: "Authentication & RBAC", level: 85 },
  ],
  Databases: [
    { name: "MongoDB (Motor async)", level: 85 },
    { name: "Vector Databases", level: 80 },
    { name: "MySQL", level: 75 },
  ],
  AI: [
    { name: "Google Gemini API", level: 85 },
    { name: "Vector Embeddings", level: 80 },
    { name: "RAG Implementation", level: 75 },
    { name: "NLP & Generative AI", level: 80 },
  ],
  "DevOps & Tools": [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 80 },
    { name: "Postman", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Jupyter Notebook", level: 80 },
  ],
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
