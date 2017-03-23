import { SaittiPage } from './app.po';

describe('saitti App', function() {
  let page: SaittiPage;

  beforeEach(() => {
    page = new SaittiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
