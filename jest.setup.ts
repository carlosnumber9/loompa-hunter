import { describe, expect, test } from '@jest/globals';

export { describe, expect, test };
global.__DEV__ = true;
global.__TESTING__ = false;