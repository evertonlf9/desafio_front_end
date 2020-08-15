export function getLocalStorage(name) {
    return window.localStorage.getItem(name);
}

export function setLocalStorage(name, value) {
    window.localStorage.setItem(name, value);
}

export function deleteLocalStorage(name) {
	window.localStorage.removeItem(name);
}