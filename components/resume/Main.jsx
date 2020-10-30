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
            <div className="row only-print">
              <div className="col-12">
                <p className="ft-200 grey-30 mb-0">Email: elton.jj@gmail.com</p>
                <p className="ft-200 grey-30 mb-0">
                  Website: <a href="https://eltu.in/">eltu.in</a>
                </p>
                <p className="ft-200 grey-30">
                  Phone: <a href="https://wa.me/60172634100">+60-172634100</a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="ft-200 grey-30">
                  Experienced, passionate, well-rounded frontend engineer with
                  full stack capabilities and an eye for design.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h3 className="maroon">Knowledge Base</h3>
                <p className="ft-200 grey-30">
                  HTML, CSS, JavaScript, TypeScript, React, Next.js, Git,
                  Node.js
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
                <h5 className="ft-400 grey-30">Aug 2018 - Present</h5>
                <ul className="list-group list-group-flush ft-200 grey-30">
                  <li className="list-group-item">
                    Built responsive web application from a scratch using React.
                  </li>
                  <li className="list-group-item">
                    Reduced the bundle size with code splitting and lazy load
                    modules to improve core web vitals and user experience.
                  </li>
                  <li className="list-group-item">
                    Improved the SEO performance, by using SEO friendly URL’s on
                    the listings pages and improving initial page load by Server
                    Side Rendering (SSR).
                  </li>
                  <li className="list-group-item">
                    Developed custom serverless image handler using AWS to
                    handle watermarks and sizes.
                  </li>
                  <li className="list-group-item">
                    Maintained standard code style with shareable configs using
                    ESLint and Prettier within the project to improve the
                    efficiency and code readability across team.
                  </li>
                  <li className="list-group-item">
                    Wrote Unit Test and Integration tests With Jest and React
                    Testing Library.
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <h4 className="ft-400 grey-30">
                  OpenTech Software / Web Developer
                </h4>
                <h5 className="ft-400 grey-30">Nov 2016 - Aug 2018</h5>
                <ul className="list-group list-group-flush ft-200 grey-30">
                  <li className="list-group-item">
                    Built websites for small buisnesses.
                  </li>
                  <li className="list-group-item">
                    Managed hosting through AWS and helped securing the
                    applications.
                  </li>
                  <li className="list-group-item">
                    Created custom plugins and integrated the web application
                    with marketing solutions.
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
                <h5 className="ft-400 grey-30">Sept 2014 - Oct 2015</h5>
                <ul className="list-group list-group-flush ft-200 grey-30">
                  <li className="list-group-item">
                    Built website portal for showcasing games using PHP.
                  </li>
                  <li className="list-group-item">
                    Developed mobile games using Cocos2d-x and Unity3D.
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
