interface ContactLink {
  name: string
  url: string
  icon: string
}

const contactLinks: ContactLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/wyatt-lindsey-0981a2307',
    icon: 'https://images.ctfassets.net/v5l0o6bbgx6q/26x9wJdYarWrW6Xos2tR7C/49fdb3c96a3c2f61550f08452b0ceb58/icons8-linkedin-50.png',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/wyattrlindsey',
    icon: 'https://cdn.iconscout.com/icon/free/png-512/github-153-675523.png',
  },
  {
    name: 'Email',
    url: 'mailto:lindsey.388@osu.edu',
    icon: 'https://th.bing.com/th/id/R.8f6ee1084a03955b9430728213c1d6c5?rik=TY2Qm%2bHX3%2bG6wg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2femail-transparent-icon%2femail-transparent-icon-15.png&ehk=4FYxafmAPk%2fzdMqgkt5cQ07DLutPbsyzjtHTt0pzF1M%3d&risl=&pid=ImgRaw&r=0',
  },
]

interface ContactLinksProps {}

export default function ContactLinks({}: ContactLinksProps) {
  return (
    <div className="footer" id="bottom">
      <h1>Find Me</h1>
      <ul className="contact">
        {contactLinks.map((link, index) => (
          <li key={index} className={index === 1 ? 'middle' : ''}>
            <a href={link.url} className="link" target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt={`${link.name} icon`} className="linkIcon" />
              <span className="linkText">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
