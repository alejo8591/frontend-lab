import { AppPage } from './app.po';

<<<<<<< HEAD
describe('m446 App', () => {
=======
describe('m446a App', () => {
>>>>>>> e60bdf74bc08c784383856b05244b7962ced7c31
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
