const storage_prefix = "googly_";

const localStorageHelpers = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storage_prefix}token`));
  },
  setToken: (token) => {
    window.localStorage.setItem(
      `${storage_prefix}token`,
      JSON.stringify(token)
    );
  },
  removeToken: () => {
    window.localStorage.removeItem(`${storage_prefix}token`);
  },
};

export default localStorageHelpers;
