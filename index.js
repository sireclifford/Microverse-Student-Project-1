const GotoProjects = () => {
  const projectsLink = document.querySelector('#projects-link');
  const overlay = document.querySelector('#menu-overlay-container');
  const wrapper = document.querySelector('#wrapper');

  projectsLink.addEventListener('click', () => {
    wrapper.style.display = 'block';
    overlay.style.display = 'none';
    document.getElementById('projects').scrollIntoView();
  });
};

const GotoGettingStarted = () => {
  const gettingStartedLink = document.querySelector('#getting-started-link');
  const overlay = document.querySelector('#menu-overlay-container');
  const wrapper = document.querySelector('#wrapper');

  gettingStartedLink.addEventListener('click', () => {
    wrapper.style.display = 'block';
    overlay.style.display = 'none';
    document.getElementById('getting-started').scrollIntoView();
  });
};

const GotoAbout = () => {
  const aboutLink = document.querySelector('#about-link');
  const overlay = document.querySelector('#menu-overlay-container');
  const wrapper = document.querySelector('#wrapper');

  aboutLink.addEventListener('click', () => {
    wrapper.style.display = 'block';
    overlay.style.display = 'none';
    document.getElementById('about').scrollIntoView();
  });
};

const OpenMenu = () => {
  const openMenuIcon = document.querySelector('#open-menu-icon');
  const overlay = document.querySelector('#menu-overlay-container');
  const wrapper = document.querySelector('#wrapper');

  openMenuIcon.addEventListener('click', () => {
    overlay.style.display = 'grid';
    wrapper.style.display = 'none';
  });
};

const CloseMenu = () => {
  const closeMenuIcon = document.querySelector('#close-menu-icon');
  const overlay = document.querySelector('#menu-overlay-container');
  const wrapper = document.querySelector('#wrapper');

  closeMenuIcon.addEventListener('click', () => {
    overlay.style.display = 'none';
    wrapper.style.display = 'block';
  });
};

OpenMenu();
CloseMenu();
GotoProjects();
GotoGettingStarted();
GotoAbout();