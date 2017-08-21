import { Section3ProjectPage } from './app.po';

describe('section3-project App', () => {
  let page: Section3ProjectPage;

  beforeEach(() => {
    page = new Section3ProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
