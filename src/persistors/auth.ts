import LocalStoragePersistor from ".";

export const tokenPersistor = new LocalStoragePersistor(
  process.env.REACT_APP_TOKEN_KEY_NAME ?? "token"
);
