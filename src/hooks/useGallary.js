import { useState, useEffect } from 'react';

const useGallery = () => {
    const [dragging, setDragging] = useState(false);
    const [mouseLocation, setMouseLocation] = useState(0);
    const [galleryLocation, setGalleryLocation] = useState(0);
    const [moveVal, setMoveVal] = useState(0);

    const easeOutQuad = t => t * (2 - t);

    useEffect(() => {
        const moveGallery = () => {
            setMoveVal(easeOutQuad(window.scrollY * .003));
            requestAnimationFrame(moveGallery);
        }
        requestAnimationFrame(moveGallery);
    }, []);

    const dragStart = e => {
        setDragging(true);
        setMouseLocation(e.pageX);
        setGalleryLocation(wrapper.scrollLeft);
    }

    const dragActive = e => {
        if(!dragging) return;

        let offset = e.pageX - mouseLocation;
        wrapper.scrollLeft = galleryLocation - offset;
    }

    const dragStop = e => {
        setDragging(false);
        setMouseLocation(e.pageX);
        setGalleryLocation(wrapper.scrollLeft);
    }

    return {
        moveVal,
        dragStart,
        dragActive,
        dragStop
    };
}


export default useGallery;
