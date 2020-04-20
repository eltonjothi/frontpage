import React from 'react';

function Main() {
  return (
    <div className="container resume-body">
      <div className="row">
        <div className="col-lg-4">
          <div className="leftbox">
            <div className="row">
              <div className="col-12">
                <div className="intro">
                  <div className="avatar">
                    <img
                      src="/images/elton-avatar-3.jpg"
                      className="profile-avatar"
                      alt="Elton Jothi"
                    />
                  </div>
                  <div className="details">
                    <h2 className="ft-600 maroon">Elton Jothi</h2>
                    <h3 className="ft-400 grey-30">Front End Engineer</h3>
                    <p className="ft-200 grey-30">Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="ft-200 grey-30">
                  To work with a team where I can utilize my skills, knowledge,
                  ideas and contribute to the development of new technologies
                  and products as a software developer.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h3 className="maroon">Knowledge Base</h3>
                <p className="ft-200 grey-30">
                  HTML, JavaScript, CSS, React, Bootstrap, Git, Node.js, PHP
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h3 className="maroon">Languages</h3>
                <p className="ft-200 grey-30">English, Tamil & Hindi</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="mainbox">
            <div className="row">
              <div className="col-12">
                <h3 className="ft-600 maroon">Experience</h3>
                <h4 className="ft-400 grey-30">
                  EdgeProp.my / Frontend Engineer
                </h4>
                <h5 className="ft-400 grey-30">2018 - Present</h5>
                <ul className="list-group list-group-flush ft-200 grey-30">
                  <li className="list-group-item">
                    Translation of designer mock-ups and wireframes into
                    front-end code using modern technologies.
                  </li>
                  <li className="list-group-item">
                    Pre rendering the pages by server side rendering for faster
                    page loads.
                  </li>
                  <li className="list-group-item">
                    Optimizing the website to improve page speed and user
                    experience across all devices
                  </li>
                  <li className="list-group-item">
                    Maintaining standard code style with shareable configs
                    within the project to improve the efficiency and code
                    readability across team.
                  </li>
                  <li className="list-group-item">
                    Wrote support documentation and provided training to the
                    team internally.
                  </li>
                  <li className="list-group-item">
                    Managed project development through version control systems.
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <h4 className="ft-400 grey-30">
                  OpenTech Software / Web Developer
                </h4>
                <h5 className="ft-400 grey-30">2016 - 2018</h5>
                <ul className="list-group list-group-flush ft-200 grey-30">
                  <li className="list-group-item">
                    Developed websites for small buisnesses using wordpress and
                    JAMstack.
                  </li>
                  <li className="list-group-item">
                    Managed hosting through AWS and helped securing the
                    applications.
                  </li>
                  <li className="list-group-item">
                    Created custom plugins and integrated the web application
                    with marketing solutions
                  </li>
                  <li className="list-group-item">
                    Increasing website performance using SEO best practices.
                  </li>
                  {/* <li className="list-group-item">
                    Marketing Strategies that resulted in 40% increase in sales
                    revenue.
                  </li> */}
                </ul>
              </div>
              <div className="col-12">
                <h4 className="ft-400 grey-30">
                  Navodaya Media Works / Software Engineer
                </h4>
                <h5 className="ft-400 grey-30">2014 - 2015</h5>
                <ul className="list-group list-group-flush ft-200 grey-30">
                  <li className="list-group-item">
                    Developed web portal for showcasing games using PHP.
                  </li>
                  <li className="list-group-item">
                    Developed mobile games using cocos2dx and unity3d.
                  </li>
                  <li className="list-group-item">
                    Administration and management of a hosting environment
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <h3 className="ft-600 maroon">Education</h3>
                <h4 className="ft-400 grey-30">ICAT Design & Media College</h4>
                <p className="ft-200 grey-30">
                  P.G Diploma in Game Development (2014)
                </p>
              </div>
              <div className="col-12">
                <h4 className="ft-400 grey-30">
                  Vel Tech Dr.RR & Dr.SR Technical University
                </h4>
                <p className="ft-200 grey-30">
                  Bachelor of Technology in Mechanical Engineering (2013)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
