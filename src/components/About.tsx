interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <section className="about" id="aboutMe">
      <div className="container">
        <h1>About Me</h1>
        <div className="info">
          <img
            src="/images/headshot.jpeg"
            alt="my headshot"
            className="photo"
          />
          <div className="description">
            <p>
              Hello. My name is Wyatt Lindsey. I recently graduated from The Ohio State
              University with a B.S. in Computer and Information Science. 
            </p>
            <p>
              I served as vice president and president of Code4Community, a club dedicated to 
			  teaching K–12 students the fundamentals of computer science through engaging 
			  projects and games. 
            </p>
			<p>
              I am passionate about web and mobile app development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
