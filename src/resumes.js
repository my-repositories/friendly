import { navigateToNextPage } from './utils';

export default function()  {
  // allow our friendly transaction
  if (!window.confirm('You are ready?')) {
    return;
  }

  // get all users
  let links = getUserLinks();

  // filter my profile
  links = filterLinksByText(links, 'Ваш профиль');

  // save userLinks and navigate to next page
  navigateToNextPage(links);
}

const getUserLinks = () => {
  const nodeList = document.querySelectorAll('.info.users-about-items .username a');
  return [...nodeList].map((node) => node.getAttribute('href'));
};

const filterLinksByText = (links, text) => {
  const menuItems = [...document.querySelectorAll('.dropdown.user_menu .menu a')];
  const index = menuItems.findIndex((item) => item.innerHTML === text);
  if (index !== -1) {
    return links.filter((link) => link !== menuItems[index].getAttribute('href'));
  }
  return links;
};
