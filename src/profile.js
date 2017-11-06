import { getLinksFromStorage, jump, navigateToNextPage } from './utils';

export default function()  {
  if (isPrivateProfile()) {
    navigateToNextPage(getLinksFromStorage());
  } else {
    jump(window.location.href + '/friends');
  }
}

const isPrivateProfile = () => document.querySelectorAll('#profiles .section .no_content').length;
