import { GitHubAppPage } from './app.po';

describe('git-hub-app App', () => {
  let page: GitHubAppPage;

  beforeEach(() => {
    page = new GitHubAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
