import React from 'react'
import "../styles/SourceList.css"
import ilanPic from '../assets/imgs/ilan_pappe.png'
import mikoPic from '../assets/imgs/miko_peled.png'
import noamPic from '../assets/imgs/noam_chomsky.png'
import jimmyPic from '../assets/imgs/jimmy_carter.png'
import normanPic from '../assets/imgs/norman_finkelstein.png'
import abbyPic from '../assets/imgs/abby_martin.png'

function SourceList() {
  return (
   <div className='sourceList'>
        <div className='bismillah'>An idea of where to start</div>
        <div className='bio'>
            <img src={normanPic} className='bioImg'></img>
            <div className='bioDesc'>
                <span className='italicFont'>Norman Finkelstein</span>, is a Jewish-American political scientist and activist. He is a graduate of Binghamton University and received his Ph.D. in political science at Princeton University. He has held faculty positions at the Brooklyn College, Rutgers University, Hunter College, New York University, and DePaul University. Coming from a Jewish family, both his parents survived the Warsaw Ghetto, his mother survived the Majdanek concentration camp, and his father survived Auschwitz. His primary research is in the politics of the Holocaust and the Israeli-Palestinian conflict. Much of his mother's outrage towards acts of carnage, after first-hand witnessing the Holocaust, like that of the Vietnam War, laid the foundation for his trait of "refusal to put aside a sense of moral outrage in order to get on with one's life". Two years after completing his doctoral thesis on Zionism, Finkelstein began his involvement in the Israeli-Palestinian conflict when he and a handful of other Jews protested in New York against the Israeli invasion of Lebanon. He held a sign saying, "This son of survivors of the Warsaw Ghetto Uprising, Auschwitz, Maijdenek will not be silent: Israeli Nazis - Stop the Holocaust in Lebanon!". During the First Intifada, he spent every summer from 1988 to 1993 in the West Bank as a guest of Palestinian families in Hebron and Beit Sahour, where he taught English at a local school. Finkelstein recounts that him being Jewish did not bother the Palestinians saying, "The typical response was indifference. Word had been passed to the shebab that I was 'okay' and, generally, the matter rested there." He documents his experiences living during the Intifada in his book, <span className='italicFont'>The Rise and Fall of Palestine</span>. He has written many books coming at the issue of Israel and Palestine from different points, some of which are <span className='italicFont'>Gaza: An Inquest Into Its Martyrdom</span>, <span className='italicFont'>Method and Madness: The Hidden Story of Israel's Assaults on Gaza</span>, and <span className='italicFont'>Image and Reality of the Israel-Palestine Conflict</span>.
            </div>
            <div className='links'>
                <a href='https://www.youtube.com/watch?v=DE8HkHBU8z8'>"Is Gaza a Concentration Camp?" (2023)</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=nUfWTHbCS78'>A crucial summary to understand the history of this conflict (2023)</a>
                <br></br>
                <a href='https://youtu.be/m36CUGA1Ucw?t=366'>Talks his Jewish background reflections on this situation and the hypocrisy from the West and those who support (2023)</a>
                <br></br>
                <a href='https://youtu.be/G0k3wYySFuA?t=48'>Speaks on Israel's strategy towards Palestinians from his book "Method and Madness: The Hiddent Story of Israel's Assaults on Gaza" (2015)</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=mZGPZRkqJzY'>Concising points of his book "Gaza: An Inquest Into Its Martydom" (2018)</a>
            </div>
        </div>
        <br></br>
        <div className='bio'>
            <img src={abbyPic} className='bioImg'></img>
            <div className='bioDesc'>
                <span className='italicFont'>Abby Martin</span>, is an American journalist, TV presenter, and activist. She help found a citizen journalism website, Media Roots, and serves on the board of the directors for the Media Freedom Foundation. Much of her work is based on investigations into mainstream media narrative and serving the unbiased truth of the "other side". Although her work spans across many conflicts, she has spent an adequate amount of time recounting the Israeli-Palestian conflict from both sides through her interview and documentary series, The Empire Files. One of her most known works is <span className='italicFont'>Gaza Fights for Freedom</span>, a documentary film that covers the Palestinian side through on-the-ground Palestian journalists. 
            </div>
            <div className='links'>
                <a href='https://www.youtube.com/watch?v=HnZSaKYmP2s'>Gaza Fights for Freedom (2021)</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=sCo9a5LtKsY'>Martin's views on Israel (2019)</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=lFoxL3sOAio'>Interviewing "everyday Israelis" about Palestians (2017)</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=y9cxFfB7LBw'>"What does Israel want?" (2019)</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=1Rk1dAIhiVc'>From the perspective of a Israeli vet (2017)</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=HxvNZisaB8E'>Inside a Palestinian refugee camp (2016)</a>
                <br></br>
            </div>
        </div>
        {/* <br></br>
            <div className='bio'>
            <img className='bioImg'></img>
            <div className='bioDesc'>
                <span className='italicFont'>Alison Weir</span>, is an Envangelical Christian American activist and writer best known for her interest in the Israeli-Palestian conflict specifically from the tunnelled reporting of the media. Her interest began back during in 2000 when she was working for a small weekly newspaper in California. When the Second Intifada started, most news reports picked up only the Israeli narrative. Weir then tried to find any reports for the other side without any avail. She noticed that something was being covered up and decided to quit her job and visit the West Bank and Gaza. 
            </div>
            <div className='links'>
                <a href='https://ifamericansknew.org/'>Resource on the statistics of this conflict</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=Y8NycC1L5f0'>Relation of how the media in this situation does not represent truth</a>
            </div>
        </div> */}
        <br></br>
        <div className='bio'>
            <img src={ilanPic} className='bioImg'></img>
            <div className='bioDesc'>
                <span className='italicFont'>Ilan Pappe</span>, a historian and political scientist born and raised in Israel offering a counter-view to the dominating narrative of Israel's foundation. He is a professor with the College of Social Sciences and International Studies at the University of Exeter in the United Kingdom, director of the university's European Centre for Palestinian Studies, and co-director of the Exter Centre for Ethno-Political Studies. Ilan's perspective towards Israeli history was shifted when the release of the British and Israeli government documents came out in the 1980s having claims for the intention to ethincally cleanse the Palestinian people. This gave him the introduction sentence to study the history of his own country from a new lens. As an Israeli himself, Ilan Pappe offers a deep-dive through many eras of the Palestinian struggle focusing on the Israeli agenda to forever remove the people from the land. He has written many books on the topic of which <span className='italicFont'>The Ethnic Cleansing of Palestine</span> and <span className='italicFont'>Ten Myths About Israel</span> are great introductions.
            </div>
            <div className='links'>
                <a href='https://www.youtube.com/watch?v=ipT1dHU1ya4'>1948, as termed by Ilan Pappe, the start of the "ethnic cleansing" of the Palestinian people. (2018)</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=yYIyEEYogNM'>As discussed in his book, "The Ethnic Cleansing of Palestine" (2020)</a>
                <br></br>
                <a href='https://youtu.be/mVT4WY-IzZ4?t=4963'>Ilan Pappe's perspective of what the Palestinians really want at the end of the day (2022)</a>
            </div>
        </div>
        <br></br>
        <div className='bio'>
            <img src={jimmyPic} className='bioImg'></img>
            <div className='bioDesc'>
                <span className='italicFont'>Jimmy Carter</span>, standing as the United States 39th president, had the opportunity to visit much of occupied Palestine and as a result of seeing the conditions of the Palestinians pursued attempts to reconcile a two-state solution in the region with talks to Eygpt and Israel. In his book, published in 2007, <span className='italicFont'>Palestine: Peace not Apartheid</span>, former President Carter goes into detail of how the struggle to maintain peace in the region stems from Israel violating key UN resolutions, official American policy, and the international "road map" for peace by occupying Arab lands and oppressing the Palestinians. President Carter gives a key overlook on the regional conflict from both a diplomatic and humanitarian point of view.
            </div>
            <div className='links'>
                <a href='https://www.youtube.com/watch?v=gMtQh1seSuc'>Explains how Gaza is, in his words, "an open air prison" (2010)</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=JUiWKTacc7w'>Visits confiscated homes from Palestinians with comparisons drawn by Archbishop Desmond Tutu to their apartheid in South Africa (2009)</a>
            </div>
        </div>
        <br></br>
        <div className='bio'>
            <img src={mikoPic} className='bioImg'></img>
            <div className='bioDesc'>
                <span className='italicFont'>Miko Peled</span>, is an Israeli-American born into a prominent Zionist family whose grandfather signed Israel's Declaration of Independence and father fought
                in the 1948 Arab-Israeli War. After his father served as a general in the Six-Day War of 1967, he pushed the investigation of the alleged war crime Israel commited which was met with complacency from the Israeli cabinet. This motivated him to turn the tide and become an avid advocate for the Israeli conversation with the Palestine Liberation Organization (PLO). The Israeli military attacks on seizing the West Bank, Gaza, Sinai, and the Golan Heights as well as the 1982 Lebanon war buried Miko Peled's and his father's support for the decisions made by the government. Miko Peled, considered as coming from a pedigree of Israeli-Zionist background, gives his first hand account of how his eyes were open to the false Zionist narrative that society fed him through stories passed down in his family and cited material in his book, <span className='italicFont'>The General's Son: Journey of an Israeli in Palestine</span>.
            </div>
            <div className='links'>
                <a href='https://youtu.be/yXWEr3bRwNc?t=100'>Background on his reason for writing his book, "The General's Son: Journey of an Israeli in Palestine", with a bit of summary (2023)</a>
                <br></br>
                <a href='https://youtu.be/xT51DJu1acc?t=68'>"Zionism is a racist ideology" (2021)</a>
            </div>
        </div>
        <br></br>
        <div className='bio'>
            <img src={noamPic} className='bioImg'></img>
            <div className='bioDesc'>
                <span className='italicFont'>Noam Chomsky</span>, born to a Ashkenazi Jewish family, is an American professor and public intellectual known for his work in linguistics for developing the 'Chomsky hierachy', standing as a figure in analytic philosophy, and one of the founders of the field of congitive science. He also actively participates in political activism and social criticism. He is currently a laureate professor of linguistics at the University of Arizona and an institute professor emeritus at the Massachusetts Institute of Technology. Noam Chomsky provides his thoughts towards the Israel-Palestinian conflict from a background of being held as the model for secular Western intellectuals.
            </div>
            <div className='links'>
                <a href='https://www.youtube.com/watch?v=lUQ_0MubbcM'>"Why does the U.S. support Israel?" (2016)</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=Wb9gqXBj-4A'>Chomsky's thoughts of the occupation (2011)</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=MFLiDP6TnoQ'>The right of the land (2023)</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=bUsXt8TmVfU'>Draws comparisons to South Africa, discusses current alignment, and talks path forward (2011)</a>
            </div>
        </div>
        <br></br>
        {/* <div className='bismillah'>Other areas of interest</div> */}

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