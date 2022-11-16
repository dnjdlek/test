// var x = document.getElementById('toggle-btn');
// if (x.style.display === 'none') {
//   x.style.display = 'block';
// } else {
//   x.style.display = 'none';
// }

// let btn = document.querySelector('toggle-btn');
// btn.classList.toggle('active');

window.onload = function () {
  // var hw = document.getElementById('hw');
  // hw.addEventListener('click', function(){
  //     alert('Hello world');
  // })

  let iDiv = document.createElement('div');
  iDiv.id = 'container';
  let toggleBtnDiv = document.createElement('div');
  toggleBtnDiv.className = 'toggle-btn';
  let widgetDiv = document.createElement('div');
  widgetDiv.className = 'widget';
  let barDiv = document.createElement('div');
  barDiv.className = 'bar';
  let iframe = document.createElement('iframe');
  let browserToken = localStorage.getItem('browserToken');
  iframe.src = `https://main.d2vbs96akeew7n.amplifyapp.com/notification?browserToken=480878b7d9c907e2b11e9d26f3ab04f9`;
  iframe.width = '100%';
  iframe.height = '100%';
  let dimDiv = document.createElement('div');
  dimDiv.className = 'dim';

  document.getElementsByTagName('body')[0].appendChild(iDiv);
  iDiv.appendChild(toggleBtnDiv);
  iDiv.appendChild(widgetDiv);
  iDiv.appendChild(dimDiv);
  widgetDiv.appendChild(barDiv);
  widgetDiv.appendChild(iframe);

  let btn = document.querySelector('.toggle-btn');
  let bar = document.querySelector('.bar');
  let widget = document.querySelector('.widget');
  let dim = document.querySelector('.dim');

  btn.addEventListener('click', function () {
    widget.classList.toggle('active');
    dim.classList.toggle('active');
  });
  bar.addEventListener('click', function () {
    widget.classList.toggle('active');
    dim.classList.toggle('active');
  });
  dim.addEventListener('click', function () {
    widget.classList.toggle('active');
    dim.classList.toggle('active');
  });

  bar.addEventListener('touchstart', () => {
    bar.style.background = 'red';
  });
  bar.addEventListener('touchmove', () => {
    bar.style.background = 'yellow';
  });
  bar.addEventListener('touchend', () => {
    bar.style.background = 'green';
  });

  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    console.log(333);
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    console.log(123);

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* right swipe */
      } else {
        /* left swipe */
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
      } else {
        /* up swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }
};
