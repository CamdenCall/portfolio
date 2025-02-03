"use client"
import React, { useState, useEffect } from "react";
import "./Header.scss";


export default function Header() {
  const [numBlocks, setNumBlocks] = useState(0);
  const [blockSize, setBlockSize] = useState({ width: 0, height: 0 });


  useEffect(() => {
    const calculateBlocks = () => {
      const header = document.querySelector(".header");
      if (header) {
        const width = header.clientWidth;
        const height = header.clientHeight;
        const cols = Math.floor(width / 50);
        const rows = Math.floor(height / 50);
        const blockWidth = width / cols;
        const blockHeight = height / rows;
        setNumBlocks(cols * rows);
        setBlockSize({ width: blockWidth, height: blockHeight });
      }
    };

    calculateBlocks();
    window.addEventListener("resize", calculateBlocks);

    return () => {
      window.removeEventListener("resize", calculateBlocks);
    };
  }, []);

  useEffect(() => {
    const blocks = document.querySelectorAll(".block");
    if (blocks.length === 0) return;

    blocks.forEach(block => {
      if (block) {
        block.classList.add("color");
      }
    });

    const removeRandomColorClass = () => {
      const blocksArray = Array.from(blocks).filter(block => block);
      if (blocksArray.length === 0) return;

      const randomIndex = Math.floor(Math.random() * blocksArray.length);
      if (blocksArray[randomIndex].classList.contains("color")) {
        blocksArray[randomIndex].classList.remove("color");
      } else {
        removeRandomColorClass();
      }

      const anyBlockHasColor = blocksArray.some(block => block.classList.contains("color"));
      if (!anyBlockHasColor) {
        clearInterval(interval);
      }
    };

    const interval = setInterval(removeRandomColorClass, 10);

    return () => {
      clearInterval(interval);
    };
  }, [numBlocks]);


  return (
    <header className="header">
      <div className="grid-container" style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${blockSize.width}px, 1fr))` }}>
      {Array.from({ length: numBlocks }).map((_, index) => (
          <div
            key={index}
            className="block"
            style={{ width: blockSize.width, height: blockSize.height }}
          ></div>
        ))}
      </div>
      <div className="header-text">
        <img src="/images/logo.png" className="logo" alt="logo"/>
        <h1 className="gradient">CAMDEN C.</h1>
        <p className="s18">UI/UX Desinger & Fullstack Web Developer</p>
      </div>
      <img src="images/portrait.png" alt="portrait" className="portrait" />
      <a href="#experience">
        <img src="images/star-arrow.svg" alt="arrow" className="arrow"/>
      </a>
    </header>

  );
}
