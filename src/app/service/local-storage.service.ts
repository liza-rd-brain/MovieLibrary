import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  private key: string = 'bestMovie';

  public changeData(value: string) {
    const prevData = this.getData(this.key);

    if (prevData) {
      this.removeData(this.key);
      if (prevData !== value) {
      } else {
        this.saveData(this.key, value);
      }
    } else {
      this.saveData(this.key, value);
    }
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string): string | null {
    return localStorage.getItem(key);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
