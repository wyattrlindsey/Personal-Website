interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <>
      <div className="about" id="aboutMe">
        <h1>About Me</h1>
      </div>
      <div className="info">
        <img 
          src="/EADCFD27-3870-4E9B-A15E-A153BBC614A5_1_105_c.jpeg" 
          alt="photo of me in front of a beach sunset" 
          className="photo"
        />
        <p className="description">
          Hello. My name is Wyatt Lindsey. I am currently a third-year student 
          at The Ohio State University in Columbus, Ohio studying computer and 
          information science. I enjoy traveling, reading, tennis, volleyball, 
          and playing with my dogs. I am currently vice president of Code4Community, 
          a club dedicated to teaching k-12 students in the greater Columbus area 
          the fundamentals of computer science through gaming. I hope to gain 
          professional experience in the field of computer science.
        </p>
      </div>
      <div className="about" id="projects">
        <h1>My Projects</h1>
      </div>
    </>
  )
}
