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
    url: 'mailto:wyatt.r.lindsey@gmail.com',
    icon: 'https://th.bing.com/th/id/R.8f6ee1084a03955b9430728213c1d6c5?rik=TY2Qm%2bHX3%2bG6wg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2femail-transparent-icon%2femail-transparent-icon-15.png&ehk=4FYxafmAPk%2fzdMqgkt5cQ07DLutPbsyzjtHTt0pzF1M%3d&risl=&pid=ImgRaw&r=0',
  },
]

interface ContactLinksProps {}

export default function ContactLinks({}: ContactLinksProps) {
  return (
    <div className="footer" id="bottom">
	 <div className="container">
      <h1 style={{ textAlign: 'center'}}>Get In Touch</h1>
      <article className="card contactCard">
        <div className="cardInner">
          <h2>Let's Connect</h2>
          <p>Feel free to reach out through any of these channels:</p>
          <div className="contactLinksGrid">
            {contactLinks.map((link, index) => (
              <a key={index} href={link.url} className="contactLink" target="_blank" rel="noopener noreferrer">
                <img src={link.icon} alt={`${link.name} icon`} className="contactIcon" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </article>
	  </div>
    </div>
  )
}
