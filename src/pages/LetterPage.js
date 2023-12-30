import React from 'react'
import '../styles/LetterPage.css'
import { AssetMapping } from '../assets/AssetMapping';
import LetterImage from '../components/LetterImage';

function LetterPage() {
  const images = [
    { url: AssetMapping['october-12-2023']['letter-page-img'], text: 'October 12, 2023'},
  ];

  return (
      <LetterImage images={images} />
  )
}

export default LetterPage