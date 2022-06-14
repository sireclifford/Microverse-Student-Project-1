const overlay = document.querySelector('#menu-overlay-container');
const wrapper = document.querySelector('#wrapper');

const About = () => {
  wrapper.style.display = 'block';
  overlay.style.display = 'none';
  document.getElementById('about').scrollIntoView();
};

const Projects = () => {
  wrapper.style.display = 'block';
  overlay.style.display = 'none';
  document.getElementById('projects').scrollIntoView();
};

const GettingStarted = () => {
  wrapper.style.display = 'block';
  overlay.style.display = 'none';
  document.getElementById('getting-started').scrollIntoView();
};

function openMenu() {
  overlay.style.display = 'grid';
  wrapper.style.display = 'none';
}

function closeMenu() {
  overlay.style.display = 'none';
  wrapper.style.display = 'block';
}