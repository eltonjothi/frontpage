import React from 'react';

function Main() {
  return (
    <div class="container resume-body">
      <div class="row">
        <div class="col-lg-4">
          <div className="leftbox">
            <div class="row">
              <div class="col-12">
                <div class="intro">
                  <div class="avatar">
                    <img
                      src="/images/elton-avatar.jpeg"
                      class="profile-avatar"
                      alt="..."
                    />
                  </div>
                  <div class="details">
                    <h2 className="ft-600 maroon">Elton Jothi</h2>
                    <h3 className="ft-400 grey-30">Front End Engineer</h3>
                    <p className="ft-200 grey-30">Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p className="ft-200 grey-30">
                  To work with a team where I can utilize my skills, knowledge,
                  ideas and contribute to the development of new technologies
                  and products as a software developer.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h3 className="maroon">Knowledge Base</h3>
                <p className="ft-200 grey-30">
                  React, JavaScript, HTML, SCSS, Bootstrap, Git, Node.js, PHP
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h3 className="maroon">Languages</h3>
                <p className="ft-200 grey-30">English, Tamil & Hindi</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div className="mainbox">
            <div class="row">
              <div class="col-12">
                <h3 className="ft-600 maroon">Experience</h3>
                <h4 className="ft-400 grey-30">EdgeProp.my / Frontend Engineer</h4>
                <h5 className="ft-400 grey-30">2018 - Present</h5>
                <ul class="list-group list-group-flush ft-200 grey-30">
                  <li class="list-group-item">
                    Translation of designer mock-ups and wireframes into
                    front-end code
                  </li>
                  <li class="list-group-item">
                    Optimizing the website to improve page speed and user
                    experience across all devices
                  </li>
                  <li class="list-group-item">
                    Maintaining standard code style with shareable configs
                    within the project to improve the efficiency and code
                    readability across team.
                  </li>
                  <li class="list-group-item">
                    Wrote support documentation and provided training to the
                    team internally.
                  </li>
                  <li class="list-group-item">
                    Ensuring SEO best practices are properly implemented.
                  </li>
                  <li class="list-group-item">
                    Managed project development through version control systems.
                  </li>
                </ul>
              </div>
              <div class="col-12">
                <h4 className="ft-400 grey-30">OpenTech Software / Web Developer</h4>
                <h5 className="ft-400 grey-30">2016 - 2018</h5>
                <ul class="list-group list-group-flush ft-200 grey-30">
                  <li class="list-group-item">
                    Optimized front-end efficiency by shifting the blogs over to
                    WordPress and brand-associated them to the main site.
                  </li>
                  <li class="list-group-item">
                    Managed hosting through AWS and helped securing the
                    applications.
                  </li>
                  <li class="list-group-item">
                    Created custom plugins and integrating the web application
                    with Marketing Solutions
                  </li>
                  <li class="list-group-item">
                    Increasing website performance using SEO best practices.
                  </li>
                  <li class="list-group-item">
                    Marketing Strategies that resulted in 40% increase in sales
                    revenue.
                  </li>
                </ul>
              </div>
              <div class="col-12">
                <h4 className="ft-400 grey-30">Navodaya Media Works / Software Engineer</h4>
                <h5 className="ft-400 grey-30">2014 - 2015</h5>
                <ul class="list-group list-group-flush ft-200 grey-30">
                  <li class="list-group-item">
                    Developed mobile games using cocos2dx and unity3d.
                  </li>
                  <li class="list-group-item">
                    Managed project development through version control systems.
                  </li>
                  <li class="list-group-item">
                    Coordinated with team of UX designers to create new Web
                    Portal to host games online.
                  </li>
                  <li class="list-group-item">
                    Administration and management of a hosting environment
                  </li>
                  <li class="list-group-item">
                    Increasing website performance using SEO best practices.
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h3 className="ft-600 maroon">Education</h3>
                <h4 className="ft-400 grey-30">ICAT Design & Media College</h4>
                <p className="ft-200 grey-30">P.G Diploma in Game Development (2014)</p>
              </div>
              <div class="col-12">
                <h4 className="ft-400 grey-30">Vel Tech Dr.RR & Dr.SR Technical University</h4>
                <p className="ft-200 grey-30">Bachelor of Technology in Mechanical Engineering (2013)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
