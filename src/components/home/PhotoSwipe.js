import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
export default class Gallery1 extends Component {
  render() {
    return (
        <React.Fragment>
                <h2 className="primary-header"> Illustrations</h2>
<div className="illustration">
  <Gallery>
  <div className="ill-border">
    <Item
      original="https://i.ibb.co/HnTJGg0/mountains.jpg"
      thumbnail="https://i.ibb.co/HnTJGg0/mountains.jpg"
      width="300"
      height="468"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://i.ibb.co/zrMcVf1/mountain-thumb.jpg" />
      )}
    </Item>
    </div>

     <div className="ill-border">
    <Item
      original="https://i.ibb.co/1mGYfFL/wolfie.jpg"
      thumbnail="https://i.ibb.co/1mGYfFL/wolfie.jpg"
     width="468"
      height="468"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://i.ibb.co/1mGYfFL/wolfie.jpg" />
      )}
    </Item>
    </div>

     <div className="ill-border">
            <Item
      original="https://i.ibb.co/wSwZtMZ/little-tea-cup-2.jpg "
      thumbnail="https://i.ibb.co/wSwZtMZ/little-tea-cup-2.jpg"
      width="500"
      height="468"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://i.ibb.co/MCh8bLG/little-tea-cup-thumb.jpg" />
      )}
    </Item>
    </div>

     <div className="ill-border">
        <Item
      original="https://i.ibb.co/dDMNpz0/geomet-tatt.jpg"
      thumbnail="https://i.ibb.co/dDMNpz0/geomet-tatt.jpg"
     width="568"
      height="468"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://i.ibb.co/Yf37xx0/geomet-tatt-thumb.jpg" />
      )}
    </Item>
    </div>

     <div className="ill-border">
            <Item
      original="https://i.ibb.co/TbYwDs7/geo2.jpg"
      thumbnail="https://i.ibb.co/TbYwDs7/geo2.jpg"
      width="350"
      height="468"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://i.ibb.co/2KRRn0m/geo2-thumb.jpg" />
      )}
    </Item>
</div>

<div className="ill-border">
            <Item
      original="https://i.ibb.co/JctJvPT/soulmarcos-logo-blankbackground.png"
      thumbnail="https://i.ibb.co/JctJvPT/soulmarcos-logo-blankbackground.png"
      width="350"
      height="468"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://i.ibb.co/JctJvPT/soulmarcos-logo-blankbackground.png" />
      )}
    </Item>
</div>

<div className="ill-border">
            <Item
      original="https://i.ibb.co/vQ5tCHV/Octupos.png"
      thumbnail="https://i.ibb.co/vQ5tCHV/Octupos.png"
      width="350"
      height="468"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://i.ibb.co/vQ5tCHV/Octupos.png" />
      )}
    </Item>
</div>
<div className="ill-border">
            <Item
      original="https://i.ibb.co/QQjFMJ2/Artboard-1-9.png"
      thumbnail="https://i.ibb.co/QQjFMJ2/Artboard-1-9.png"
      width="350"
      height="468"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://i.ibb.co/QQjFMJ2/Artboard-1-9.png" />
      )}
    </Item>
</div>
<div className="ill-border">
            <Item
      original="https://i.ibb.co/hLLHVLm/Geo2.jpg"
      thumbnail="https://i.ibb.co/hLLHVLm/Geo2.jpg"
      width="350"
      height="400"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://i.ibb.co/hLLHVLm/Geo2.jpg" />
      )}
    </Item>
</div>
<div className="ill-border">
            <Item
      original="https://i.ibb.co/tbLVyWP/Show-us-just-how-sweet.png"
      thumbnail="https://i.ibb.co/tbLVyWP/Show-us-just-how-sweet.png"
      width="350"
      height="400"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://i.ibb.co/tbLVyWP/Show-us-just-how-sweet.png" />
      )}
    </Item>
</div>
<div className="ill-border">
            <Item
      original="https://i.ibb.co/FnZgLTg/walkorrun.png"
      thumbnail="https://i.ibb.co/FnZgLTg/walkorrun.png"
      width="600"
      height="350"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://i.ibb.co/FnZgLTg/walkorrun.png" />
      )}
    </Item>
</div>

  </Gallery>
</div>

    </React.Fragment>
      );
    }
  }