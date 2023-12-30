import React from 'react'
import '../styles/LetterDetailPage.css'
import { useParams } from 'react-router-dom'
import { AssetMapping } from '../assets/AssetMapping';

function LetterDetailPage() {
    const { id } = useParams();
    return (
        <div>
            <img src={AssetMapping[id]["letter-detail-img"][0]}></img>
        </div>
    )
}

export default LetterDetailPage