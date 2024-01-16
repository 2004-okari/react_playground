import './App.css';
import React from 'react';
import image from './image.png';
import Atropos from 'atropos/react';
import 'atropos/css';

export default function App() {
  return (
    <div className="rotating-design" style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Atropos
        className="my-atropos"
        activeOffset={50}
        duration={5000}
        rotate={true}
        rotateTouch="scroll-y"
        rotateXMax={30}
        rotateYMax={30}
        rotateXInvert={false}
        rotateYInvert={false}
        stretchX={0}
        stretchY={0}
        stretchZ={0}
        commonOrigin={true}
        shadow
        shadowOffset={50}
        shadowScale={1.2}
        highlight={true}
        scaleClassName="custom-scale-class"
        rotateClassName="custom-rotate-class"
        innerClassName="custom-inner-class"
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
        {/* Your design elements go here */}
        <div className="design-element" data-atropos-offset="-10" style={{ width: '100%', height: '100%' }}>
          <img src={image} alt="" className="image2" style={{ width: '100%', height: '100%' }} />
        </div>
      </Atropos>
    </div>
  );
}
