import React from 'react';

function Main() {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
          <div class="intro-hero">
            <div class="avatar">
              <img
                src="/images/elton-avatar-3.jpg"
                class="profile-avatar"
                alt="..."
              />
            </div>
            <div class="details">
              <h2>Hey there.! 👋</h2>
              <p className="ft-200 grey-30">
                My name is Elton Jothi. I’m an experienced, passionate,
                well-rounded frontend engineer with full stack capabilities and
                an eye for design.
              </p>
              <br />
              <p className="ft-200 grey-30">
                Currently at EdgeProp.my, building beautiful user interfaces with
                a focus on performance and writing code with best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
