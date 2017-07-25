import { AngularJSStartPage } from './app.po';

describe('angular-jsstart App', () => {
  let page: AngularJSStartPage;

  beforeEach(() => {
    page = new AngularJSStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
