const storageName = {
  links: 'links',
  confirmed: 'confirmed'
};

export function navigateToNextPage(links) {
  if (!links) {
    links = getLinksFromStorage();
  }

  if (!links.length) {
    console.warn('Links array is empty!');
    window.alert('Links array is empty!');
    return;
  }

  const nextPage = links.pop();
  window.sessionStorage.setItem(storageName.links, JSON.stringify(links));
  jump(nextPage);
}

export function getLinksFromStorage() {
  return JSON.parse(window.sessionStorage.getItem(storageName.links) || '[]');
}

export function jump(url)  {
  window.setTimeout(() => window.location.href = url, 100);
}

export function isConfirmed() {
  return window.location.search === '?confirmed' || JSON.parse(window.sessionStorage.getItem(storageName.confirmed));
}

export function haveAccess() {
  const confirmation = isConfirmed();
  window.sessionStorage.setItem(storageName.confirmed, confirmation);
  return confirmation;
}

export function log(...value) {
  console.warn(`[${getTime()}] FRIENDLY:: `, ...value);
}

const getTime = () => {
  const options = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  };
  return (new Date()).toLocaleString('ru', options);
};
