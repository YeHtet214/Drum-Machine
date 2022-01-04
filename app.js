$(document).ready(function() {

// music types
 const type1 = [
  'Bass-Drum-Hit-Level-3a-www.fesliyanstudios.com.mp3',
  './type1/Bass-Drum-Hit-Level-6c-www.fesliyanstudios.com.mp3',
  './type1/Floor-Tom-Drum-Hit-Level-3B-www.fesliyanstudios.com.mp3',
  './type1/Ride-Cymbal-Bell-Hit-C-www.fesliyanstudios.com.mp3',
  './type1/Ride-Cymbal-Metal-Slide-Scrape-G-www.fesliyanstudios.com.mp3',
  './type1/Small-Tom-Drum-Hit-Level-4B-www.fesliyanstudios.com.mp3',
  './type1/Snare-Drum-Hit-Level-3a-www.fesliyanstudios.com.mp3',
  './type1/Snare-Drum-Hit-Level-4a-www.fesliyanstudios.com.mp3',
  './type1/Ride-Cymbal-Metal-Slide-Scrape-G-www.fesliyanstudios.com (1).mp3'
]
const type2 = [
 './type2/Bass-Drum-Hit-Level-6c-www.fesliyanstudios.com.mp3',
  './type2/China-Cymbal-Crash-Level-4A-www.fesliyanstudios.com.mp3',
  './type2/China-Cymbal-Crash-Level-5A-www.fesliyanstudios.com.mp3',
  './type2/Drum-Sticks-Hit-E-www.fesliyanstudios.com.mp3',
  './type2/Hi-Hat-Closed-Hit-B1-www.fesliyanstudios.com.mp3',
  './type2/Medium-Tom-Drum-Hit-Level-3B-www.fesliyanstudios.com.mp3',
  './type2/Medium-Tom-Drum-Hit-Level-6B-www.fesliyanstudios.com.mp3',
  './type2/Small-Tom-Drum-Hit-Level-4B-www.fesliyanstudios.com.mp3',
  './type2/Snare-Drum-Hit-Level-4a-www.fesliyanstudios.com.mp3',
]

let soundOff = false;  //  check if audio is 'on' or 'off'


  /* Event Handler Functions  */

  // toggle On Off buttons 
  function toggleBtns(e) {
    $(this).toggleClass('on');
    if ($(this).hasClass('on')) {
      if ($(this).attr('id') === 'power-btn') soundOff = false;
      $(this).attr('id') === 'bank' ? switchMusic(type2) : '';
    } else {
      if ($(this).attr('id') === 'power-btn') soundOff = true;
      $(this).attr('id') === 'bank' ? switchMusic(type1) : '';
    }
  }

   // play audio on click
  function playAudio(target) {
    const innerAudio = target.children('h3').html();
    if (soundOff) {
      $('.viewer').text('');
      return;
    }
    $(`#${innerAudio}`)[0].src = $(`#${innerAudio}`)[0].src;
    $(`#${innerAudio}`)[0].play();
    $('.viewer').text(target.attr('id'));
  }

  function keyboardControls(target) {
    if (soundOff) {
      $('.viewer').text('');
      return;
    }
    target[0].src = target[0].src;
    target[0].play();
    $('.viewer').text(target.parent('.drum-pad').attr('id'))
  }

  /* Events */

  // buttons switch 
  $('#power-btn').click(toggleBtns);
  $('#bank').click(toggleBtns);

  // Play Audio on click Event
  $('.drum-pad').click(function() {
    playAudio($(this));
  })

 // Play Audio on keyboard controls
 $(document).on('keyup', function(e) {
  switch (e.keyCode) {
    case 81:
      keyboardControls($('#Q'));

    case 87:
      keyboardControls($('#W'));
      break;

    case 69:
      keyboardControls($('#E'));
      break;

    case 65:
      keyboardControls($('#A'));
      break;

    case 83:
      keyboardControls($('#S'));
      break;

    case 68:
      keyboardControls($('#D'));
      break;

    case 90:
      keyboardControls($('#Z'));
      break;

    case 88:
      keyboardControls($('#X'));
      break;

    default: 
      keyboardControls($('#C'));
      break;
  }
});

// Control Volume Event
$('.volumne input').on('change', function(e) {
  $('audio').each(function(idx, el) {
    const volume = e.target.value / 100;
    el.volume = volume;
  })
 })

  // initial audio sources
  function switchMusic(type) {
    $('.clip').each(function(idx) {
      $(this)[0].src = '';
      $(this)[0].src = type[idx];
    })
   }
  
   switchMusic(type1);
})

async function fetchData() {
  const source = await fetch();
  console.log(source);
}
