export function setToken(newValue) {
  window.localStorage.setItem('token', JSON.stringify(newValue));

  window.dispatchEvent(
    new StorageEvent('storage', { key: 'token', newValue })
  );
}

export const store = {
  getSnapshot: () => localStorage.getItem('token'),
  subscribe: (listener) => {
    window.addEventListener('storage', listener);

    return () => void window.removeEventListener('token', listener);
  },
  getServerSnapshot: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }

    return null;
  },
};
