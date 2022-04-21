// Named import
import { getDailyFortune, LUCKY_NUMBER } from './fortune';

// Default Import
import Sum from './maths';

console.log("Today's fortune : ", getDailyFortune())

console.log("Your lucky number today : ", LUCKY_NUMBER);

console.log("Sum is : ", Sum(4,6))