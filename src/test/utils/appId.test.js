import appIdGenerator from '../../utils/appIdGenerator.helper';

describe('App Id generator test', () => {
  it('should test that the app id generator function returns a 32 char length string', () => {
    const appId = appIdGenerator();
    expect(typeof appId).toBe('string');
    expect(appId.length).toBe(32);
  });
});
