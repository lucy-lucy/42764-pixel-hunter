import {assert} from 'chai';
import Timer from './createTimer';

describe(`Timer`, () => {
  it(`should end`, () => {
    const timer = new Timer(3);
    timer.tick();
    timer.tick();
    timer.tick();
    assert.equal(0, timer.timeLeft);
  });

  it(`should 1 second left`, () => {
    const timer = new Timer(3);
    timer.tick();
    timer.tick();
    assert.equal(1, timer.timeLeft);
  });
});
