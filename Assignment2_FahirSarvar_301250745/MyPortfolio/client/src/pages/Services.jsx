function Services() {
  return (
    <section className="page services-page">
      <h1>Services</h1>

      <div className="services-grid">
        <div className="service-card">
          <img src="/images/web-dev.png" alt="Web Development" />
          <h3>Web Development</h3>
          <p>Building responsive, multi-page websites using semantic HTML5 and CSS, including 
              forms with validation and mobile-friendly layouts using CSS Grid.</p>
        </div>

        <div className="service-card">
          <img src="/images/database.png" alt="Database Design" />
          <h3>Database Design & SQL</h3>
          <p>
              Writing multi-table SQL queries, setting up database users and role-based security, 
              and working with relational databases in Oracle.
          </p>
        </div>

        <div className="service-card">
          <img src="/images/network.png" alt="Network Setup" />
          <h3>Server & Network Setup</h3>
          <p>
            Configuring web servers (Nginx), load balancing across multiple machines, and 
            setting up secure remote access (SSH) and file sharing (Samba, FTP).</p>
        </div>
      </div>
    </section>
  )
}

export default Services
