import { DorritPage } from './app.po';

describe('dorrit App', function() {
  let page: DorritPage;

  beforeEach(() => {
    page = new DorritPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
