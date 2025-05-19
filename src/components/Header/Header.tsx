"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  
    const removeRandomColorClass = () => {
      const blocksArray = Array.from(blocks).filter(block => block.classList.contains("color"));
      if (blocksArray.length === 0) {
        clearInterval(interval);
        return;
      }
  
      const randomIndex = Math.floor(Math.random() * blocksArray.length);
      blocksArray[randomIndex].classList.remove("color");
    };
  
    const interval = setInterval(removeRandomColorClass, 5); // Increased delay for stability
  
    return () => clearInterval(interval);
  }, [numBlocks]);


  return (
    <header className="header" id="top">
      <div className="grid-container" style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${blockSize.width}px, 1fr))` }}>
      {Array.from({ length: numBlocks }).map((_, index) => (
          <div
            key={index}
            className="block color"
            style={{ width: blockSize.width, height: blockSize.height }}
          ></div>
        ))}
      </div>
      <div className="header-text">
        <Image src="/images/logo.png" width={25} height={26} className="logo" alt="logo"/>
        <h1 className="gradient">CAMDEN C.</h1>
        <p className="s18 center">UI/UX Desinger & Fullstack Web Developer</p>
      </div>
      <Image src="/images/portrait.png" alt="portrait" width={565} height={600} className="portrait" />
      <a href="#experience">
        <img src="images/star-arrow.svg" alt="arrow" className="arrow"/>
      </a>
    </header>

  );
}
