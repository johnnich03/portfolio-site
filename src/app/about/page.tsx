// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen py-10 md:py-14">
      <div className="max-w-4xl mx-auto space-y-10 px-2 sm:px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-accent text-center">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-xl overflow-hidden border-4 border-accent shadow-lg">
              <Image
                src="/screenshots/surf.jpg"
                alt="Profile photo"
                width={288}
                height={288}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-textSecondary leading-relaxed">
              I'm John Nicholson, a statistics & data science and economics double major.
              I am passionate about using data to solve real-world problems. I am interested in career pathways
              in tech and finance I work primarily with SQL, Python, and visualization tools to help teams make confident decisions.
            </p>
            <p className="text-textSecondary leading-relaxed">
              Outside of work, I love being outdoors, especially surfing, and I'm always exploring ways to combine curiosity, creativity, and data.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-textPrimary">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-textPrimary">
            <li className="bg-card border border-borderColor rounded-md px-3 py-2">Python • Pandas • NumPy</li>
            <li className="bg-card border border-borderColor rounded-md px-3 py-2">SQL • Data Wrangling</li>
            <li className="bg-card border border-borderColor rounded-md px-3 py-2">R • ggplot2</li>
            <li className="bg-card border border-borderColor rounded-md px-3 py-2">Econometrics</li>
            <li className="bg-card border border-borderColor rounded-md px-3 py-2">Corporate Finance</li>
            <li className="bg-card border border-borderColor rounded-md px-3 py-2">Mathematics of Fixed Income Markets</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-textPrimary">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card border border-borderColor rounded-lg p-4">
              <p className="text-textSecondary">Surf Height Forecast 🌊</p>
            </div>
            <div className="bg-card border border-borderColor rounded-lg p-4">
              <p className="text-textSecondary">Agriculture Rain Analytics 📊</p>
            </div>
            <div className="bg-card border border-borderColor rounded-lg p-4">
              <p className="text-textSecondary"> Graduate Admission Prediction 🎓</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
