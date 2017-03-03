import { NgCliGithubSearchPage } from './app.po';

describe('ng-cli-github-search App', () => {
  let page: NgCliGithubSearchPage;

  beforeEach(() => {
    page = new NgCliGithubSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
