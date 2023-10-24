'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 120,
})
  .move(-9)
  .type('Product ')
  .pause(1000)
  .move(null, { to: 'END' })
  .delete()
  .type('Interactive Engineer')
  .pause(1000)
  .move(-9)
  .delete()
  .type('Front-end')
  .pause(1000)
  .move(+9)
  .delete()
  .go();
