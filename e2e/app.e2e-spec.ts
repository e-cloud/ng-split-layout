import { NgSplitLayoutPage } from './app.po';

describe('ng-split-layout App', function() {
  let page: NgSplitLayoutPage;

  beforeEach(() => {
    page = new NgSplitLayoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('demo works!');
  });
});
