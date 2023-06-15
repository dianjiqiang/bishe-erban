export function getItem(item) {
  return JSON.parse(window.localStorage.getItem(item));
}

export function setItem(item, value) {
  window.localStorage.setItem(item, JSON.stringify(value));
}
