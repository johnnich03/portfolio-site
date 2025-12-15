import Image from "next/image";
import { FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";

export default function ResumePage() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-5xl bg-card rounded-2xl shadow-xl p-6 sm:p-10 md:p-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src="/screenshots/headshot.jpg" // put your photo in /public/profile.jpg
            alt="Profile photo"
            width={120}
            height={120}
            className="rounded-full border-4 border-accent"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-1">John Nicholson</h1>
            <p className="text-accent text-lg md:text-xl font-medium">Data Science and Economics Student</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-textSecondary text-sm mt-3">
            <span className="flex items-center gap-2">
              <FaPhone /> +1 (805) 226-6885
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope /> johnnicholson@ucsb.edu
            </span>
            <span className="flex items-center gap-2">
              <FaGlobe /> 6732 Del Playa Drive, Goleta, CA
            </span>
          </div>
        </div>

        <hr className="my-8 border-t-2 border-borderColor/50" />

        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Left column */}
          <div className="md:col-span-2 space-y-8">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-accent mb-4 pb-2 border-b-2 border-accent/20 w-max">
                🎓 Education
              </h2>
              <div className="mt-4 space-y-4">
                <div className="bg-background/50 p-4 rounded-lg hover:bg-background/70 transition-colors">
                  <h3 className="font-bold text-lg text-accent/90">University of California, Santa Barbara</h3>
                  <p className="text-textSecondary font-medium">B.S. in Statistics & Data Science • 2022-2026</p>
                  <p className="text-textSecondary font-medium">B.A. in Economics • 2022-2026</p>
                  <p className="text-textSecondary mt-1">
                    Relevant coursework: Machine Learning, Linear Regression,
                    Predictive Modeling, Data Structures & Algorithms, Data Visualization,
                    Probability Theory, Stochastic Processes, Econometrics, Corporate Finance,
                    Mathematics of Fixed Income Markets, Managerial Economics 
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-2xl font-bold text-accent mb-4 pb-2 border-b-2 border-accent/20 w-max">
                💼 Work Experience
              </h2>
              <div className="mt-4 space-y-4">
                <div className="bg-background/50 p-4 rounded-lg hover:bg-background/70 transition-colors">
                  <h3 className="font-bold text-lg text-accent/90">Yardi Systems Inc.</h3>
                  <p className="text-textSecondary font-medium">Associate Technical Account Manager • Summer 2024</p>
                  <ul className="list-disc list-inside text-textSecondary/90 mt-2 space-y-2 pl-2">
                    <li>Gained comprehensive knowledge of accounting software through Voyager 7S and Voyager 8.</li>
                    <li>Completed an end of internship project focusing on data analytics in investment management.</li>
                    <li>Utilized SQL to pull client data to internally locate and resolve client issues.</li>
                  </ul>
                </div>

                <div className="bg-background/50 p-4 rounded-lg hover:bg-background/70 transition-colors mt-6">
                  <h3 className="font-bold text-lg text-accent/90">UCSB Undergraduate Learning Assistant</h3>
                  <p className="text-textSecondary font-medium">Teacher Assistant • Spring 2024</p>
                  <ul className="list-disc list-inside text-textSecondary/90 mt-2 space-y-2 pl-2">
                    <li>Led small class groups to work through labs focusing on Data Structures and Algorithms in Python.</li>
                    <li>Held office hours throughout the week each week to help students with homework, labs, and test preparation.</li>
                    <li>Collaborated with the Professor and fellow teaching staff to solve administrative issues throughout the quarter</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div>
              <h2 className="text-2xl font-bold text-accent mb-4 pb-2 border-b-2 border-accent/20 w-max">Tech Stack ⚙️</h2>
              <div className="mt-4 space-y-3">
                {[
                  { skill: "SQL", level: 95 },
                  { skill: "R", level: 90 },
                  { skill: "Python", level: 85 },
                  { skill: "Java", level: 70 },
                  { skill: "HTML / CSS", level: 65 },
                ].map(({ skill, level }) => (
                  <div key={skill}>
                    <div className="flex justify-between text-sm text-textSecondary mb-1.5">
                      <span className="font-medium">{skill}</span>
                      <span className="font-medium">{level}%</span>
                    </div>
                    <div className="w-full bg-borderColor/50 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-accent to-accent/70 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h2 className="text-2xl font-bold text-accent mb-4 pb-2 border-b-2 border-accent/20 w-max">Soft Skills 🧠</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Leadership", "Teamwork", "Communication", "Problem Solving", "Time Management"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="bg-background/70 hover:bg-accent/10 text-textPrimary px-4 py-1.5 rounded-full text-sm font-medium transition-colors border border-borderColor"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
