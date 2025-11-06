"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Code, Users, GraduationCap } from "lucide-react";

const achievements = [
  {
    title: "Webathon 2.0 Runner-Up",
    description:
      "Awarded for developing a high-impact full-stack web application with exceptional UI/UX and collaborative problem-solving under time constraints.",
    icon: Trophy,
  },
  {
    title: "500+ Problems Solved on LeetCode & CodeChef",
    description:
      "Demonstrated strong algorithmic thinking and problem-solving skills through consistent competitive programming practice.",
    icon: Code,
  },
  {
    title: "Tech Club Contributor & Hackathon Participant",
    description:
      "Active member of KRITHOMEDH and TechWeek, contributing to workshops and technical events focused on AI and full-stack development.",
    icon: Users,
  },
  {
    title: "Professional Development Certifications",
    description:
      "Completed Full Stack Development (Master Coding), AI Foundations Associate (Oracle), and DSA (Smart Interviews).",
    icon: GraduationCap,
  },
];

export default function AchievementsAndCompetitiveProgramming() {
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
          Achievements & Competitive Programming
        </motion.h2>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <achievement.icon className="h-6 w-6 text-primary" />
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {achievement.description}
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
