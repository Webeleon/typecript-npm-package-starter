import implement from './main';

describe('main', () => {
  it('is defined', () => {
      expect(implement).toBeDefined();
      expect(() => implement()).toThrow();
  });
});
