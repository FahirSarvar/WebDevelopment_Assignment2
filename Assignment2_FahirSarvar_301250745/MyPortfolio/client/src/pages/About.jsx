function About() {
  return (
    <section className="page about-page">
      <h1>About Me</h1>

      {/* Replace this src with a real photo of yourself, e.g. /images/me.jpg */}
      <img
        src="/images/Fahir_photo.jpg"
        alt="Your Name"
        className="profile-photo"
      />

      <h2>Fakher Mokhammad Sarvar(Fahir)</h2>

      <p>
        Hello, I am centennial college student in Software Engineering Technology program, I have learned so far various front-end and back-end development tools and languages such as Javascript with react, CSS/HTML, Java, C# and SQL. I came to Canada in 2023 and since then I have been loving this country for oportunities it provides me with. As a hobbies I watch anime and occasionally read manga.
      </p>

      <a href="/Fahir_Sarvar_Resume.pdf" target="_blank" rel="noopener noreferrer">
        View my Resume (PDF)
      </a>
    </section>
  )
}

export default About
