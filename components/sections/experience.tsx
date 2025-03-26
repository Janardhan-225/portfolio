"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Lightbulb, Users } from "lucide-react";

const experiences = [
  {
    title: "VJ Hackathon Winner",
    description: "Won Best UI/UX Design for an innovative mobile application",
    icon: Trophy,
  },
  {
    title: "Web-Hack Participant",
    description: "Developed an AI-powered website, recognized for innovative solutions",
    icon: Lightbulb,
  },
  {
    title: "KRITHOMEDH Club Member & TechWeek Volunteer",
    description: "Active member contributing to technical events and workshops",
    icon: Users,
  },
];

export default function Experience() {
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
          Experience & Achievements
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <experience.icon className="h-6 w-6 text-primary" />
                    {experience.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}