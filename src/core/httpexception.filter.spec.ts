import { HttpExceptionFilter } from './httpexception.filter';

describe('Http.ExceptionFilter', () => {
  it('should be defined', () => {
    expect(new HttpExceptionFilter()).toBeDefined();
  });
});
