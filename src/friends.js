import { jump, navigateToNextPage } from './utils';

export default function() {
  (async function() {
    // click on all buttons for send friendly-request
    const links = document.querySelectorAll('a.button.btn-green.add_to_friends');
    for (let i = 0; i < links.length; ++i) {
      await (async function(i) {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(links[i].click()), 100);
        });
      })(i);
    }

    changePage();
  })();
}

const changePage = () => {
  const nextPage = document.querySelector('a.next_page');
  if (nextPage.length) {
    jump(nextPage.getAttribute('href'));
  } else {
    navigateToNextPage();
  }
};
