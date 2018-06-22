import Utils from '@/Utils';

describe('Utils', () => {
  it('Has methods', () => {
    expect(Utils.formatDate).toBeDefined();
  });

  it('Formats 1 date', () => {
    const date1 = new Date('2018-01-16');

    const date = Utils.formatDate(date1);
    expect(date).toEqual('2018 January - present');
  });

  it('Formats 2 dates', () => {
    const date1 = new Date('2018-01-16');
    const date2 = new Date('2018-07-16');

    const date = Utils.formatDate(date1, date2);
    expect(date).toEqual('2018 January - 2018 July');
  });
});
