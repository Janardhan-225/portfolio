"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:janardhanreddiboina@gmail.com",
    label: "Email",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/janardhan93",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://x.com/Janardhan_93?t=DkcPknbWHyK2lBKIMbt2qw&s=09",
    label: "Twitter",
  },
  {
    icon: Github,
    href: "https://github.com/Janardhan-225",
    label: "GitHub",
  },
  {
    icon: Phone,
    href: "tel:+919392520766",
    label: "Phone",
  },
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can integrate email service or backend here
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          Get in Touch
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you're a recruiter, collaborator, or fellow developer, feel free to reach out. I'm always open to exciting opportunities and meaningful conversations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Your Name" required />
                  <Input type="email" placeholder="Your Email" required />
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[150px]"
                    required
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Connect with Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <link.icon className="mr-2 h-4 w-4" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
