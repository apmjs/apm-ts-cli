import { expect } from 'chai';
import { Service} from '../src/service';
import { describe, it } from 'mocha';

describe('Deformat Error Test', () => {
  it('Error Throw', () => {
    const TITLE = 'NEW TITLE';
    const service = new Service();
    service.set(TITLE);
    return new Promise((resolve, reject) => {
      service.on((title) => {
        console.log('Get Title', title);
        if (title === TITLE) {
          resolve();
        } else {
          reject();
        }
        service.off();
      });
    });
  });
});
