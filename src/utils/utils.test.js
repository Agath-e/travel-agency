import { formatTime } from './formatTime';
import { promoPrice } from './promoPrice';

describe('utils', () => {
  describe('formatTime', () => {

    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });

    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });
    
    it('should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-2)).toBe(null);
    });
    it('should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });
        

  });

  describe('promoPrice', () => {
    it('should return null if there is no arg or one arg', () => {
      expect(promoPrice()).toBe(null);
      expect(promoPrice(20)).toBe(null);
    });
    it('should return null if arg are not a number', () => {
      expect(promoPrice('abc')).toBe(null);
      expect(promoPrice(() => {})).toBe(null);
    });
    it ('shloud return true if have agr price and percentage', () => {
      let promoPrice = {
        price: 145567,
        percentage: 20,
      };
      expect(promoPrice.price).toBe(145567);
      expect(promoPrice.percentage).toBe(20);
    });
    it('should return null if arg price is lower than zero', () => {
      expect(promoPrice(-1)).toBe(null);
      expect(promoPrice(-2)).toBe(null);
    });
    it('should return promoPrice 20% less than price if arg is proper', () => {
      expect(promoPrice(200, 20)).toEqual(`$160`);
      expect(promoPrice(400, 20)).toEqual(`$320`);
      expect(promoPrice(1000, 20)).toEqual(`$800`);
    });
  });
});
