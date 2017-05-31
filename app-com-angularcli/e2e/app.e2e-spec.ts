import { AppComAngularcliPage } from './app.po';

describe('app-com-angularcli App', () => {
  let page: AppComAngularcliPage;

  beforeEach(() => {
    page = new AppComAngularcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
