import { EjemploParametrosPage } from './app.po';

describe('ejemplo-parametros App', () => {
  let page: EjemploParametrosPage;

  beforeEach(() => {
    page = new EjemploParametrosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
