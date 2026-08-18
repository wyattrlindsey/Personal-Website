interface ProjectCardProps {
  title: string
  description: string
  href?: string
  tech?: string[]
  image?: string
}

export default function ProjectCard({ title, description, href, tech = [], image }: ProjectCardProps) {
  return (
    <article className="card">
	  <div className="projectCard">
		{image && (
			<div className="projectImageWrapper">
			<img src={image} alt={`${title} screenshot`} className="projectImage" />
			</div>
        )}
		<div className="cardInner">
			<h3>{title}</h3>
			<p>{description}</p>
			{tech.length > 0 && (
			<div className="techList">
				{tech.map((t) => (
				<span key={t} className="tech">
					{t}
				</span>
				))}
			</div>
			)}
			{href && (
			<a className="cardLink" href={href} target="_blank" rel="noopener noreferrer">
				View project
			</a>
			)}
		</div>
	  </div>
    </article>
  )
}
