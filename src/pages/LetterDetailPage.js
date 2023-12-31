import React from 'react'
import '../styles/LetterDetailPage.css'
import { useParams } from 'react-router-dom'
import { AssetMapping } from '../assets/AssetMapping';

function LetterDetailPage() {
    const { id } = useParams();
    return (
        <div className='letterDetailPage'>
            {AssetMapping[id]["letter-detail-img"].map((imageUrl, index) => (
                <img className={imageUrl.className} key={index} src={imageUrl.imageSrc} alt={`Image ${index + 1}`} />
            ))}
        </div>
    )
}

export default LetterDetailPage