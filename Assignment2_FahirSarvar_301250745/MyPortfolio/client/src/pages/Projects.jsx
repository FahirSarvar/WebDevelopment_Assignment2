function Projects() {
  return (
    <section className="page projects-page">
      <h1>Projects</h1>

      <div className="projects-grid">
        <div className="project-card">
          <img src="/images/WebLoadBalancer.jpg" alt="Project One" />
          <h3>Multi-Server Web Hosting & Network Infrastructure</h3>
          <p><strong>Role:</strong> Set up and configured 3 virtual machines (Oracle VirtualBox) — 
              including an Nginx web server with load balancing across two backend machines, a MySQL 
              database, SSH remote access, Samba file sharing, FTP file transfer via FileZilla, and 
              firewall rules to secure each server.</p>
          <p><strong>Outcome:</strong> Successfully deployed and load-balanced two live websites across multiple VMs, 
              with secure remote access and file sharing configured between all three machines.</p>
        </div>

        <div className="project-card">
          <img src="/images/MultiPageWebsite.jpg" alt="Project Two" />
          <h3>Shake Shack Canada — Responsive Website (COMP213 Term Project)</h3>
          <p><strong>Role:</strong>  Built a 6-page responsive website from scratch using semantic HTML5 and CSS Grid, 
             including a homepage, a dynamic list of locations, individual location detail pages, 
             a contact form with input validation, and a sitemap.             </p>
          <p><strong>Outcome:</strong> A fully responsive site with three breakpoints (mobile, tablet, desktop) using 
             CSS Grid layout, consistent navigation across all pages, and a working contact/feedback 
             form.</p>
        </div>

        <div className="project-card">
          <img src="/images/RelationalDatabase.jpg" alt="Project Three" />
          <h3>Relational Database Queries & AI Vector Search (Oracle 23ai)</h3>
          <p><strong>Role:</strong> Designed and executed multi-table SQL queries against a relational bike-store 
            database in Oracle 23ai, including customer-order joins, discount analysis, order 
            total aggregation, and set up role-based database security (custom user profiles, 
            password policies, and privilege grants).</p>
          <p><strong>Outcome:</strong>Built working queries that returned accurate multi-table results, including 
            an AI-powered semantic similarity search using Oracle's native VECTOR_DISTANCE 
            function to rank product matches by relevance.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
