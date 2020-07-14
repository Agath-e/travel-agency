import {parseOptionPrice} from './parseOptionPrice';
import { formatPrice } from './formatPrice';

export const promoPrice = (price, percentage) => {
  if (price === undefined || percentage === undefined) { 
    return null;
  }
  else if (isNaN(!price || !percentage)) {
    return null;
  }
  else if (price < 0) {
    return null;
  }
  else {

    const numberPrice = parseOptionPrice(price);
    const lowerPrice = numberPrice.value - ((numberPrice.value * percentage) / 100);

    return formatPrice(lowerPrice);
  }
}; 