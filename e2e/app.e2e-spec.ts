import { PhotocardsPage } from './app.po';

describe('photocards App', function() {
  let page: PhotocardsPage;

  beforeEach(() => {
    page = new PhotocardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
