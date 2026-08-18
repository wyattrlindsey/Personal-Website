import ProjectCard from '../components/ProjectCard'

const sampleProjects = [
  {
    title: 'Portfolio Site',
    description: 'This site — a React + TypeScript website built with Vite.',
    href: 'https://github.com/wyattrlindsey/Personal-Website',
    tech: ['React', 'TypeScript', 'Vite'],
	image: "images/website_ss.png",
  },
  {
    title: 'MatchBooks',
    description: 'An Android application designed to help readers connect over shared literary interests, developed collaboratively in a three-person agile team. Built natively in Kotlin using Android Studio. Integrated Firebase Authentication for secure account creation and login, paired with Cloud Firestore for real-time database updates and persistent user profile storage.',
    href: undefined,
    tech: ['Kotlin', 'NoSQL', 'Android', 'Git'],
	image: "/images/matchbooks_ss.png",
  },
 {
    title: 'Platformer Game',
    description: 'A 2D platformer game built in Unity using C#. Players navigate across terrains and avoid enemies to reach the goal.',
    href: undefined,
    tech: ['C#', 'Unity'],
	image: "/images/platformer.png",
  },
  {
    title: 'RateMyClass',
    description: 'A web application where users can rate classes they took and view ratings for classes they’re interested in. Developed in a 5-person agile team using RubyOnRails with embedded HTML and Git for version control.',
    href: undefined,
    tech: ['Ruby', 'RubyOnRails', 'Embedded HTML'],
	image: undefined,
  },
]

export default function ProjectsPage() {
  return (
    <main>
      <section className="about container" id="projects">
        <h1 style={{ textAlign: 'center' }}>My Projects</h1>

        <div className="projectsGrid">
          {sampleProjects.map((p) => (
            <ProjectCard key={p.title} title={p.title} description={p.description} href={p.href} tech={p.tech} image={p.image}/>
          ))}
        </div>
      </section>
    </main>
  )
}

