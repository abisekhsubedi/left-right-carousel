import React, {useRef, useEffect} from 'react';
import './gallary.css';

const Gallary = () => {
  const galleryRef = useRef(null);
  const wrapperRef = useRef(null);
  let moveVal = 0;
  let dragging = false, mouseLocation, galleryLocation;


  const easeoutquad = t => t*(2-t)

  const moveGallary = () => {
    moveVal = easeoutquad(window.scrollY * .003)
    galleryRef.current.style.transform = `rotateZ(-5deg) translate(${moveVal}%)`
    requestAnimationFrame(moveGallary)
  }

  useEffect(()=>{
    requestAnimationFrame(moveGallary)
  }, [])

  const dragStart = e => {
    dragging = true;
    mouseLocation = e.pageX;
    galleryLocation = wrapperRef.current.scrollLeft;

  }

  const dragActive = e => {
    if(!dragging) return;

    let offset = e.pageX - mouseLocation;
    wrapperRef.current.scrollLeff = galleryLocation - offset;
  }

  const dragStop = e => {
    dragging = false;
    mouseLocation = e.pageX;
    galleryLocation = wrapperRef.current.scrollLeft;
  }
  return (
    <>
    <section>
      <h1>scroll down</h1>
    </section>
    <section className="gal" ref={wrapperRef}>
        <ul ref={galleryRef} onMouseDown={dragStart} onMouseMove={dragActive} onMouseUp={dragStop}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>

          </ul>
    </section>
    </>
  )
}

export default Gallary;
