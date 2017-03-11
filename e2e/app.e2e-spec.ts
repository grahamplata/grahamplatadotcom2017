import { BulmaPage } from './app.po';

describe('bulma App', function() {
  let page: BulmaPage;

  beforeEach(() => {
    page = new BulmaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
