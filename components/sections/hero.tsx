"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Janardhan_Resume.pdf"; // Ensure the resume is placed in the "public" folder
    link.download = "Janardhan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section - Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hello, I am{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
              Janardhan
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground">
            Backend-Focused Full-Stack Developer | AI & ML Enthusiast
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Crafting intelligent, scalable web platforms with FastAPI, MongoDB, and AI integrations.
          </p>
          <Button className="group" size="lg" onClick={handleDownload}>
            <DownloadIcon className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </motion.div>

        {/* Right Section - Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 relative"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/profile_pic.jpg"
              alt="Janardhan Profile"
              width={1200}
              height={630}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
