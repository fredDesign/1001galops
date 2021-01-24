/**
 * MODULES
 */
import { navbuilder } from './utils/navigation.js'
import { convertImages } from './modules/_svginline.js'
//import VueSplide from '@splidejs/vue-splide'

//Vue.use(VueSplide)

/**
 * Files (webpack importation)
 */
//import '../../favicon.png' // import favicon file
/**
 * Run the application
 */
const run = () => {
  navbuilder();
  convertImages('img.is-svg');

}

document.addEventListener( 'DOMContentLoaded', function () {

  var eventslider = document.querySelector('#splide') !== null;
  var partnersslider = document.querySelector('.splide-part') !== null;


});

run()


