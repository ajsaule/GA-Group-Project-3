// ===DOM VARIABLES===
const storiesTab = document.getElementById('stories');
const innovationTab = document.getElementById('innovation');
const foodTab = document.getElementById('food');
const homeTab = document.getElementById('home');
const signUp = document.querySelector('.signup');
const login = document.querySelector('.login');
const logout = document.querySelector('.logout');

// ===EVENT HANDLERS===
storiesTab.addEventListener('click', stories);
innovationTab.addEventListener('click', innovation);
foodTab.addEventListener('click', food);
homeTab.addEventListener('click', home);
signUp.addEventListener('click', newUsers);
login.addEventListener('click', logIn);
logout.addEventListener('click', logOut)