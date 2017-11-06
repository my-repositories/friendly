import { jump, navigateToNextPage } from './utils';

export default function()  {
  if (isPrivateProfile()) {
    navigateToNextPage();
  } else {
    jump(window.location.href + '/friends');
  }
}

const isPrivateProfile = () => document.querySelectorAll('#profiles .section .no_content').length;
