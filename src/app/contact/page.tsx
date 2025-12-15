// app/contact/page.tsx
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const contacts = [
    {
      label: "Email",
      href: "mailto:johnnicholson@ucsb.edu",
      icon: FaEnvelope,
      handle: "John",
    },
    {
      label: "GitHub",
      href: "https://github.com/johnnich03",
      icon: FaGithub,
      handle: "johnnich03",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/johnnich03",
      icon: FaLinkedin,
      handle: "johnnich03",
    },
  ];

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center space-y-8 text-center">
      <h1 className="text-3xl font-bold text-accent">Contact</h1>
      <p className="text-textSecondary max-w-2xl">
        I'm always looking for new opportunities to learn and grow. Reach out through any of the options below.
      </p>
      <div className="grid gap-32 sm:grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto place-items-center">
        {contacts.map(({ label, href, icon: Icon, handle }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group"
          >
            <div className="aspect-square w-64 lg:w-72 rounded-2xl border border-borderColor bg-card p-8 flex flex-col items-center justify-center text-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/20">
              <div className="grid size-16 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20 mb-4 shrink-0">
                <Icon className="h-9 w-9" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm text-textSecondary">{label}</span>
                <span className="text-xl font-semibold text-textPrimary break-words">{handle}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
