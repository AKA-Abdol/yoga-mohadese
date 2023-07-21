class LocalStoragePersistor {
  private _key: string;
  constructor(key: string) {
    this._key = key;
  }

  public set(value: string): void {
    localStorage.setItem(this._key, value);
  }

  public get(): string {
    return localStorage.getItem(this._key) ?? "";
  }

  public delete(): void {
    localStorage.removeItem(this._key);
  }
}

export default LocalStoragePersistor;
