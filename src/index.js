import numeral from 'numeral';
import './bootstrap.css';

const courseValue= numeral(1000).format('$0,0.00')
console.log(`I would pay ${courseValue} for this awsome course!`) //eslint-disable-line no-console
