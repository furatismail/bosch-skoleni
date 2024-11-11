import { WorkDonePipe } from './work-done.pipe';

describe('WorkDonePipe', () => {
  it('create an instance', () => {
    const pipe = new WorkDonePipe();
    expect(pipe).toBeTruthy();
  });
});
