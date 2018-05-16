// @flow

import type { EventTitleType } from '../lib/history-callback';

export function awaitEvent(eventEmitter: Object, eventTitle: EventTitleType): Promise<Array<mixed>> {
  return new Promise((resolve) => {
    const listener = (...args) => {
      resolve(args);
      eventEmitter.removeListener(eventTitle, listener);
    };

    eventEmitter.on(eventTitle, listener);
  });
}
