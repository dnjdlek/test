window.onload = function () {
  /* 마크업 삽입 */
  console.log(window.innerWidth);

  var cssId = 'myCss'; // you could encode the css path itself to generate id..
  // if (!document.getElementById(cssId)) {
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.id = cssId;
  // link.rel = 'stylesheet';
  // link.type = 'text/css';
  // link.href = 'https://wp.easypress.me/enblanc/style.css';
  // link.media = 'all';
  head.appendChild(link);
  // }

  let iDiv = document.createElement('div');
  iDiv.style.opacity = 0;
  console.log(iDiv);
  setTimeout(() => {
    iDiv.style.opacity = 1;
  }, [2000]);

  iDiv.id = 'lillo-widget';
  if (window.innerWidth > 770) {
    iDiv.classList = 'pc';
  }

  if (1) {
    let toggleBtnDiv = document.createElement('div');
    toggleBtnDiv.className = 'toggle-btn';
    let widgetDiv = document.createElement('div');
    widgetDiv.className = 'widget';
    let barDiv = document.createElement('div');
    barDiv.className = 'bar';
    let iframe = document.createElement('iframe');
    let browserToken = localStorage.getItem('browserToken');
    iframe.src = `https://main.d2vbs96akeew7n.amplifyapp.com/notification?browserToken=480878b7d9c907e2b11e9d26f3ab04f9&clientKey=90e60da954ced524ae45801e2171c697`;
    // iframe.src = `http://localhost:3001/notification?browserToken=${browserToken}&clientKey=${213}`;
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

    /* 위젯 토글 버튼 */
    let btn = document.querySelector('.toggle-btn');
    let bar = document.querySelector('.bar');
    let widget = document.querySelector('.widget');
    let dim = document.querySelector('.dim');

    let toggle = () => {
      widget.classList.toggle('active');
      dim.classList.toggle('active');
      let iframeLastId = localStorage.getItem('lillo-iframe-lastId') || '';
      localStorage.setItem('lillo-widget-lastId', iframeLastId);
      dnjdlek(iframeLastId);
    };

    btn.addEventListener('click', function () {
      toggle();
    });
    bar.addEventListener('click', function () {
      toggle();
    });
    dim.addEventListener('click', function () {
      toggle();
    });

    /* 확인안한알람 유무 */
    if (iframe) {
      window.addEventListener('message', function (e) {
        console.log('message', e.data); // { hello: 'parent' }

        if (e.data.lastNotiId !== undefined) {
          lastNotiId = String(e.data.lastNotiId);
          localStorage.setItem('lillo-iframe-lastId', lastNotiId);
          // localStorage.setItem('lillo-iframe-lastId', lastNotiId);
          dnjdlek(lastNotiId);
        }
      });
    }

    // let iframeLastId = localStorage.getItem('lillo-iframe-lastId');

    const dnjdlek = iframeLastId => {
      let widgetLastId = localStorage.getItem('lillo-widget-lastId');
      console.log('widgetLastId', widgetLastId);
      console.log('iframeLastId', iframeLastId);
      if (widgetLastId !== iframeLastId) {
        btn.classList.add('active');
        console.log('안읽은 새알람이 있습니다.');
      } else {
        btn.classList.remove('active');
        console.log('안읽은 새알람이 없습니다.');
      }
      console.log(777);
    };
  }
  // bar.addEventListener('touchstart', () => {
  //   bar.style.background = 'red';
  // });
  // bar.addEventListener('touchmove', () => {
  //   bar.style.background = 'yellow';
  // });
  // bar.addEventListener('touchend', () => {
  //   bar.style.background = 'green';
  // });

  // document.addEventListener('touchstart', handleTouchStart, false);
  // document.addEventListener('touchmove', handleTouchMove, false);

  // var xDown = null;
  // var yDown = null;

  // function getTouches(evt) {
  //   return (
  //     evt.touches || // browser API
  //     evt.originalEvent.touches
  //   ); // jQuery
  // }

  // function handleTouchStart(evt) {
  //   console.log(333);
  //   const firstTouch = getTouches(evt)[0];
  //   xDown = firstTouch.clientX;
  //   yDown = firstTouch.clientY;
  // }

  // function handleTouchMove(evt) {
  //   if (!xDown || !yDown) {
  //     return;
  //   }

  //   var xUp = evt.touches[0].clientX;
  //   var yUp = evt.touches[0].clientY;

  //   var xDiff = xDown - xUp;
  //   var yDiff = yDown - yUp;

  //   console.log(123);

  //   if (Math.abs(xDiff) > Math.abs(yDiff)) {
  //     /*most significant*/
  //     if (xDiff > 0) {
  //       /* right swipe */
  //     } else {
  //       /* left swipe */
  //     }
  //   } else {
  //     if (yDiff > 0) {
  //       /* down swipe */
  //     } else {
  //       /* up swipe */
  //     }
  //   }
  //   /* reset values */
  //   xDown = null;
  //   yDown = null;
  // }
};
