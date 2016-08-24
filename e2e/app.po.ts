export class AngularCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jjr-root h1')).getText();
  }
}
