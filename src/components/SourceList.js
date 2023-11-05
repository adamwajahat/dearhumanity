import React from 'react'
import "../styles/SourceList.css"
import ilanPic from '../assets/imgs/ilan_pappe.png'
import mikoPic from '../assets/imgs/miko_peled.png'
import noamPic from '../assets/imgs/noam_chomsky.png'
import jimmyPic from '../assets/imgs/jimmy_carter.png'
import normanPic from '../assets/imgs/norman_finkelstein.png'

function SourceList() {
  return (
   <div className='sourceList'>
        <div className='bismillah'>An idea of where to start</div>
        <div className='bio'>
            <img src={ilanPic} className='bioImg'></img>
            <div className='bioDesc'>
                <span className='italicFont'>Ilan Pappe</span>, a historian and political scientist born and raised in Israel offering a counter-view to the dominating narrative of Israel's foundation. He is a professor with the College of Social Sciences and International Studies at the University of Exeter in the United Kingdom, director of the university's European Centre for Palestinian Studies, and co-director of the Exter Centre for Ethno-Political Studies. <span className='italicFont'>Ilan</span>'s perspective towards Israeli history was shifted when the release of the British and Israeli government documents came out in the 1980s having claims for the intention to ethincally cleanse the Palestinian people. This gave him the introduction sentence to study the history of his own country from a new lens. As an Israeli himself, <span className='italicFont'>Ilan Pappe</span> offers a deep-dive through many eras of the Palestinian struggle focusing on the Israeli agenda to forever remove the people from the land. He has written many books on the topic of which <span className='italicFont'>The Ethnic Cleansing of Palestine</span> and <span className='italicFont'>Ten Myths About Israel</span> are great introductions.
            </div>
            <div className='links'>
                <a href='https://www.youtube.com/watch?v=ipT1dHU1ya4'>1948, as termed by Ilan Pappe, the start of the "ethnic cleansing" of the Palestinian people.</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=yYIyEEYogNM'>As discussed in his book, "The Ethnic Cleansing of Palestine"</a>
                <br></br>
                <a href='https://youtu.be/mVT4WY-IzZ4?t=4963'>Ilan Pappe's perspective of what the Palestinians really want at the end of the day</a>
            </div>
        </div>
        <br></br>
        <div className='bio'>
            <img src={mikoPic} className='bioImg'></img>
            <div className='bioDesc'>
                <span className='italicFont'>Miko Peled</span>, is an Israeli-American born into a prominent Zionist family whose grandfather signed Israel's Declaration of Independence and father fought
                in the 1948 Arab-Israeli War. After his father served as a general in the Six-Day War of 1967, he pushed the investigation of the alleged war crime Israel commited which was met with complacency from the Israeli cabinet. This motivated him to turn the tide and become an avid advocate for the Israeli conversation with the Palestine Liberation Organization (PLO). The Israeli military attacks on seizing the West Bank, Gaza, Sinai, and the Golan Heights as well as the 1982 Lebanon war buried Miko Peled's and his father's support for the decisions made by the government. <span className='italicFont'>Miko Peled</span>, considered as coming from a pedigree of Israeli-Zionist background, gives his first hand account of how his eyes were open to the false Zionist narrative that society fed him through stories passed down in his family and cited material in his book, <span className='italicFont'>The General's Son: Journey of an Israeli in Palestine</span>.
            </div>
            <div className='links'>
                <a href='https://youtu.be/yXWEr3bRwNc?t=100'>Background on his reason for writing his book, "The General's Son: Journey of an Israeli in Palestine", with a bit of summary</a>
                <br></br>
                <a href='https://youtu.be/xT51DJu1acc?t=68'>"Zionism is a racist ideology"</a>
            </div>
        </div>
        <br></br>
        <div className='bio'>
            <img src={noamPic} className='bioImg'></img>
            <div className='bioDesc'>
                <span className='italicFont'>Noam Chomsky</span>, born to a Ashkenazi Jewish family, is an American professor and public intellectual known for his work in linguistics for developing the 'Chomsky hierachy', standing as a figure in analytic philosophy, and one of the founders of the field of congitive science. He also actively participates in political activism and social criticism. He is currently a laureate professor of linguistics at the University of Arizona and an institute professor emeritus at the Massachusetts Institute of Technology.<span className='italicFont'> Noam Chomsky</span> provides his thoughts towards the Israel-Palestinian conflict from a background of being held as the model for secular Western intellectuals, 
            </div>
            <div className='links'>
                <a href='https://www.youtube.com/watch?v=Wb9gqXBj-4A'>Chomsky's thoughts of the occupation</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=bUsXt8TmVfU'>Draws comparisons to South Africa, discusses current alignment, and talks path forward</a>
            </div>
        </div>
        <br></br>
        <div className='bio'>
            <img src={jimmyPic} className='bioImg'></img>
            <div className='bioDesc'>
                <span className='italicFont'>Jimmy Carter</span>, standing as the United States 39th president, had the opportunity to visit much of occupied Palestine and as a result of seeing the conditions of the Palestinians pursued attempts to reconcile a two-state solution in the region with talks to Eygpt and Israel. In his book, published in 2007, <span className='italicFont'>Palestine: Peace not Apartheid</span>, former President Carter goes into detail of how the struggle to maintain peace in the region stems from Israel violating key UN resolutions, official American policy, and the international "road map" for peace by occupying Arab lands and oppressing the Palestinians. President Carter gives a key overlook on the regional conflict from both a diplomatic and humanitarian point of view.
            </div>
            <div className='links'>
                <a href='https://www.youtube.com/watch?v=gMtQh1seSuc'>Explains how Gaza is, in his words, "an open air prison"</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=JUiWKTacc7w'>Visits confiscated homes from Palestinians with comparisons drawn by Archbishop Desmond Tutu to their apartheid in South Africa</a>
            </div>
        </div>
        <br></br>
        <div className='bio'>
            <img src={normanPic} className='bioImg'></img>
            <div className='bioDesc'>
                <span className='italicFont'>Norman Finkelstein</span>, standing as the United States 39th president, had the opportunity to visit much of occupied Palestine and as a result of seeing the conditions of the Palestinians pursued attempts to reconcile a two-state solution in the region with talks to Eygpt and Israel. In his book, published in 2007, <span className='italicFont'>Palestine: Peace not Apartheid</span>, former President Carter goes into detail of how the struggle to maintain peace in the region stems from Israel violating key UN resolutions, official American policy, and the international "road map" for peace by occupying Arab lands and oppressing the Palestinians. President Carter gives a key overlook on the regional conflict from both a diplomatic and humanitarian point of view.
            </div>
            <div className='links'>
                <a href='https://www.youtube.com/watch?v=gMtQh1seSuc'>Explains how Gaza is in his words "an open air prison"</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=JUiWKTacc7w'>Visits confiscated homes from Palestinians with comparisons drawn by Archbishop Desmond Tutu to their apartheid </a>
            </div>
        </div>
        {/* <a href='https://www.aljazeera.com/news/2023/10/9/whats-the-israel-palestine-conflict-about-a-simple-guide'>A quick read on the history of the Palestinian and Israeli conflict</a>
        <br></br>
        <a href='https://israelpalestinenews.org/palestinian-resistance-launches-surprise-attack-on-israel-updates-to-come/'>Perspective on how one-sided this looks</a>
        <br></br>
        <a href='https://www.youtube.com/watch?v=c6c5W2RsvkE'>A deeper look at the roots of the land of Palestine back from the Crusades</a>
        <br></br>
        <a href='https://www.youtube.com/watch?v=8O2VRmwIzXA&pp=ygULZXBpYyBtYXNqaWQ%3D'>Contextualizing the Palestinian conflict in today's time</a>
        <br></br>
        <a href='https://en.wikipedia.org/wiki/Psychological_operations_(United_States)'>How the media is playing its part right now</a> */}
    </div>
  )
}

export default SourceList