import { YoutubeAPPPage } from './app.po';

describe('youtube-app App', () => {
  let page: YoutubeAPPPage;

  beforeEach(() => {
    page = new YoutubeAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
