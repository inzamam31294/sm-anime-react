import React, { Component } from 'react';
import './App.scss'
import ScrollMagic from 'scrollmagic';
import {TweenLite} from 'gsap'

class App extends Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 0,
        reverse: true
      }
    });
  }

  componentDidMount() {
    // var viewer = document.querySelector('.viewer'),
    // frame_count = 9,
    // offset_value = 100;

    // new ScrollMagic.Scene({
    //   triggerElement: '#sticky',
    //   duration: (frame_count * offset_value) + 'px',
    //   reverse: true
    // })
    // .setPin('#sticky')
    // // .addIndicators()
    // .addTo(this.controller);
    
    // // build step frame scene
    // for (var i = 1, l = frame_count; i <= l; i++) {
    //   new ScrollMagic.Scene({
    //       triggerElement: '#sticky',
    //       offset: i * offset_value
    //     })
    //     .setClassToggle(viewer, 'frame' + i)
    //     // .addIndicators()
    //     .addTo(this.controller);   
    // }
    // console.log(this.controller)

var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.09, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.09,
  force3D: true
});

window.addEventListener("load", onLoad);

function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
  
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}
  }

  render() {
    return (
      // <div>
      //   <script type="text/javascript" src="scrollmagic/uncompressed/plugins/debug.addIndicators.js"></script>
      //     <header className="header section">
      //       <div className="center">&darr;</div>
      //     </header>

      //     <section className="scene section" id="sticky">
      //       <div className="viewer"></div>
      //     </section>

      //     <section className="section">
      //       <div className="center">End</div>
      //     </section>
      // </div>
      <section className="viewport">
    
  <div id="scroll-container" className="scroll-container">
    <div className="content">
  
      <div className="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt=""/>
      </div>       
      <div className="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-14.jpg" alt=""/>
      </div>  
      <div className="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-15.jpg" alt=""/>
      </div>  
      <div className="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-16.jpg" alt=""/>
      </div>  

      <div className="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt=""/>
      </div>  
      <div className="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-14.jpg" alt=""/>
      </div>  
      <div className="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-15.jpg" alt=""/>
      </div>  
      <div className="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-16.jpg" alt=""/>
      </div>  

      <div className="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt=""/>
      </div>  
      <div className="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-14.jpg" alt=""/>
      </div>  
      <div className="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-15.jpg" alt=""/>
      </div>  
      <div className="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-16.jpg" alt=""/>
      </div>  

    </div>
  </div>
   
</section>

    );
  }
}

export default App;
