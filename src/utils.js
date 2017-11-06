const storageName = 'links';

export function navigateToNextPage(links) {
  if (!links.length) {
    console.warn('Links array is empty!');
    window.alert('Links array is empty!');
    return;
  }

  const nextPage = links.pop();
  window.sessionStorage.setItem(storageName, JSON.stringify(links));
  window.setTimeout(() => window.location.href = nextPage, 100);
}

export function getLinksFromStorage() {
  return JSON.parse(window.sessionStorage.getItem(storageName));
}
