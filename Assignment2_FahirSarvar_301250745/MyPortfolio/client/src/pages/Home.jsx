import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="page home-page">
      <h1>Hi, I'm Fahir Sarvar</h1>
      <p className="mission">
        My mission is to build clean, useful software and keep learning
        something new every day.
      </p>
      <p>
        Welcome to my personal portfolio! Here you can learn more about me,
        see the projects I've worked on, check my education, and find the
        services I offer.
      </p>

      {/* Link works like NavLink but without the "active page" styling */}
      <Link to="/about" className="btn">
        Learn more about me
      </Link>
    </section>
  )
}

export default Home
