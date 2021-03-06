﻿import friends from './friends';
import profile from './profile';
import resumes from './resumes';
import { haveAccess } from './utils';

if (window.location.origin === 'https://moikrug.ru' && haveAccess()) {
  const bodyClassList = [...document.body.classList];
  const pages = [
    { className: 'friends_index_page', func: friends } ,
    { className: 'users_show_page',    func: profile },
    { className: 'resumes_index_page', func: resumes },
  ];

  for (let page of pages) {
    if (bodyClassList.indexOf(page.className) !== -1) {
      page.func();
      break;
    }
  }
}
