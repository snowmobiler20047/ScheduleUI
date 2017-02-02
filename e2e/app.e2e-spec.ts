import { ScheduleUIPage } from './app.po';

describe('schedule-ui App', function() {
  let page: ScheduleUIPage;

  beforeEach(() => {
    page = new ScheduleUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
