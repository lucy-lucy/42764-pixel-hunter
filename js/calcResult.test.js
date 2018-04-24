import {assert} from 'chai';
import calcResults from './calcResult';

describe(`calcResults`, () => {
  it(`should return -1 when the answers length < 10`, () => {
    const answers = [
      {
        success: false,
        time: 1
      }
    ];
    const livesLeft = 1;
    assert.equal(-1, calcResults(answers, livesLeft));
  });

  it(`should return 1150 with not fast and not slow answers and all lives`, () => {
    const answers = [];
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(() => answers.push({
      success: true,
      time: 15
    }));
    const livesLeft = 3;
    assert.equal(1150, calcResults(answers, livesLeft));
  });
});
