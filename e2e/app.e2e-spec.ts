import { JirareportsWebPage } from './app.po';

describe('jirareports-web App', () => {
  let page: JirareportsWebPage;

  beforeEach(() => {
    page = new JirareportsWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
