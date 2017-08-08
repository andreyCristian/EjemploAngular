import { browser, by, element } from 'protractor';

export class EjemploParametrosPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
