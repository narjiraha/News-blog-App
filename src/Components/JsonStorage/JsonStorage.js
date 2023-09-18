import React, { createContext, useState } from "react";

export const Store = createContext();

const JsonStorage = (props) => {
  const [Data, setData] = useState([
    {
      id: "1",
      heading: "Alaya F reveals why she became an actor",
      description:
        "Alaya F opens up about why she decided to become an actor despite studying filmmaking.",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/heres-why-alaya-f-became-an-actor-despite-studying-film-direction/articleshow/100620126.cms",
      image:
        "https://static.toiimg.com/thumb/msid-100620126,width-1070,height-580,imgsize-944596,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-05-30T09:57:12Z",
      content:
        "In a candid interview, Alaya F, a rising star in Bollywood, shared her journey from studying filmmaking to embracing acting. Despite her academic background, Alaya found herself drawn to the world of on-screen performances. She expressed her joy in surprising and enthralling her audience with her work. Alaya is committed to honing her craft and leaving a positive impact on her fans through her versatile roles. With a promising career ahead, Alaya F continues to captivate audiences with her talent and dedication.",
      category: "bollywood",
    },
    {
      id: "2",
      heading:
        "Ignore any lofty claims about the Bollywood hit The Kerala Story: this film will only incite hatred against Muslims | Asim Ali",
      description:
        "The controversial film championed by the BJP is an Islamophobic fantasy...",
      url: "https://www.theguardian.com/commentisfree/2023/jun/01/bollywood-hit-kerala-story-islamophobic-bjp",
      image:
        "https://i.guim.co.uk/img/media/96410f45f554697fd8777fcb870157a462beb321/0_282_4236_2542/master/4236.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=594317a3a4f51c29fdc403fd87c13185",
      publishedAt: "2023-06-01T08:59:45Z",
      content:
        'As controversy surrounds the Bollywood film "The Kerala Story," authored by Asim Ali, it has sparked concerns for its potential to fuel Islamophobia. The film, endorsed by the BJP, has been criticized for its divisive narrative that may contribute to tensions between communities. Ali reflects on his personal experience growing up amidst communal strife and emphasizes the responsibility of filmmakers to handle sensitive topics with care. The discourse surrounding the film underscores the delicate balance between creative expression and social responsibility in the world of cinema.',
      category: "bollywood",
    },
    {
      id: "3",
      heading: "Neom, Telfaz11 Set Nine Project Partnership",
      description:
        "Neom, the Saudi Arabian region that is aiming to become a major film and TV production hub...",
      url: "https://variety.com/2023/film/global/neom-telfaz11-partnership-1235630163/",
      image:
        "https://variety.com/wp-content/uploads/2023/06/Wael-Abumansour-Ibraheem-Alkhairallah-Wayne-Borg-Alaa-Fadan-Dania-Ismail-Mohammed-Alhamoud.jpg?w=1000&h=563&crop=1",
      publishedAt: "2023-06-01T08:20:41Z",
      content:
        "Neom, the ambitious Saudi Arabian megacity project, is teaming up with Telfaz11, a prominent Middle East-focused studio, to shape the region's entertainment landscape. This partnership aims to produce a diverse range of up to nine compelling film and television projects. The collaboration represents Neom's commitment to fostering a vibrant creative industry, while Telfaz11's extensive experience promises fresh narratives that reflect the rich cultural tapestry of the Middle East. As these visionary forces merge, a new era of storytelling is poised to emerge from the heart of Saudi Arabia.",
      category: "bollywood",
    },
    {
      id: "4",
      heading:
        "Sonam Bajwa says she refused Bollywood films as she didn’t want to kiss on screen...",
      description:
        "Sonam Bajwa said that in hindsight, she should've perhaps given it some more thought before turning down the opportunities...",
      url: "https://indianexpress.com/article/entertainment/bollywood/sonam-bajwa-refused-bollywood-films-didnt-want-to-kiss-on-screen-8636165/",
      image: "https://images.indianexpress.com/2023/05/sonam-bajwa.jpg",
      publishedAt: "2023-05-30T09:20:29Z",
      content:
        "Celebrated Punjabi actress Sonam Bajwa opens up about her decision to decline roles in Hindi cinema that required on-screen kissing. Bajwa candidly reflects on her concerns about the cultural differences between Punjabi and Bollywood cinema, and how intimate scenes might be perceived by her regional audience. While she acknowledges the growth of artistic expression in Indian cinema, she also emphasizes the need to strike a balance between creativity and cultural sensitivity. Bajwa's journey is a testament to the intricate dynamics that artists navigate in pursuit of their craft.",
      category: "bollywood",
    },

    {
      id: "5",
      heading:
        "JioCinema Sets New Record During IPL 2023 Final With 3.2 Crore Concurrent Viewers",
      description:
        "Despite the postponement of the IPL 2023 final due to weather conditions, JioCinema has set a new viewership record, with 3.2 crore concurrent viewers...",
      url: "https://www.gadgets360.com/entertainment/news/jiocinema-sets-viewership-record-during-ipl-2023-final-4078621",
      image:
        "https://i.gadgets360cdn.com/large/csk_ipl_bloomberg_1685438282183.jpg",
      publishedAt: "2023-05-30T09:20:17Z",
      content:
        "JioCinema, the streaming service backed by Asia's richest man Mukesh Ambani, achieved a remarkable milestone during the IPL 2023 final. Despite weather-induced postponements, the platform recorded an astonishing 3.2 crore concurrent viewers during the event. The synergy of cricket fervor and digital accessibility contributed to this feat, showcasing the widespread popularity of both the Indian Premier League and JioCinema's streaming prowess.",
      category: "bollywood",
    },
    {
      id: "6",
      heading: "Mukesh Ambani's JioCinema scores high in IPL 2023",
      description:
        "About 32 million concurrent viewers tuned into the free-to-watch airing of the rain-delayed, then shortened, match...",
      url: "https://economictimes.indiatimes.com/industry/media/entertainment/mukesh-ambanis-jiocinema-scores-high-in-ipl-2023/articleshow/100614983.cms",
      image:
        "https://img.etimg.com/thumb/msid-100615103,width-1070,height-580,imgsize-1817277,overlay-economictimes/photo.jpg",
      publishedAt: "2023-05-30T07:15:50Z",
      content:
        "JioCinema, the streaming service backed by Asia's richest man Mukesh Ambani, garnered a substantial viewership milestone during the IPL 2023. Despite weather-induced disruptions, a staggering 32 million viewers tuned in concurrently to the rain-delayed and subsequently shortened match. This unprecedented turnout underlines the massive popularity of the Indian Premier League and affirms JioCinema's position as a go-to platform for sports enthusiasts.",
      category: "bollywood",
    },
    {
      id: "7",
      heading:
        "Qawwali singer Rahat Fateh Ali Khan pays tribute to Sidhu Moosewala on first death anniversary",
      description:
        "Moosewala, whose real name was Shubhdeep Singh, was shot dead last year on May 29 in Punjab's Mansa district.",
      url: "https://economictimes.indiatimes.com/magazines/panache/qawwali-singer-rahat-fateh-ali-khan-pays-tribute-to-sidhu-moosewala-on-first-death-anniversary/articleshow/100617231.cms",
      image:
        "https://img.etimg.com/thumb/msid-100617283,width-1070,height-580,imgsize-20524,overlay-etpanache/photo.jpg",
      publishedAt: "2023-05-30T08:26:03Z",
      content:
        "Renowned Pakistani qawwali singer Rahat Fateh Ali Khan paid a heartfelt tribute to Sidhu Moosewala on the first anniversary of the Punjabi singer's tragic demise. During a concert in the United States, the iconic musician commemorated Moosewala, also known as Shubhdeep Singh, whose untimely passing deeply affected the music community. Khan's homage stands as a testament to the lasting impact Moosewala's work had on the world of music.",
      category: "bollywood",
    },

    {
      id: "9",
      heading:
        "Urvashi Rautela has a new address in Juhu, Rs 190 cr house shares wall with Yash & Pamela Chopra's iconic bungalow",
      description:
        "Bollywood actress Urvashi Rautela has apparently moved into a four-storey bungalow in the Juhu area of Mumbai...",
      url: "https://economictimes.indiatimes.com/magazines/panache/urvashi-rautela-has-a-new-address-in-juhu-rs-190-cr-house-shares-wall-with-yash-pamela-chopras-iconic-bungalow/articleshow/100668834.cms",
      image:
        "https://img.etimg.com/thumb/msid-100670238,width-1070,height-580,imgsize-41492,overlay-etpanache/photo.jpg",
      publishedAt: "2023-06-01T06:48:08Z",
      content:
        "Bollywood luminary Urvashi Rautela has quietly acquired an opulent four-storey bungalow in the prestigious Juhu area of Mumbai. With a price tag of Rs 190 crore, the lavish residence is nestled beside the iconic bungalow owned by the late film-maker Yash Chopra. Urvashi's new abode not only reflects her success but also stands as a testament to the grandeur of Indian cinema, with its shared walls echoing the history of Bollywood's luminaries.",
      category: "bollywood",
    },
    {
      id: "10",
      heading: "Disney+ Hotstar to stream new series ‘The Full Monty’",
      description:
        "The most viewed international series last year include House of the Dragon (28.2 million) and Moon Knight (23.4 million) beating the previous year’s record of 19.3 million by Hawkeye...",
      url: "https://www.livemint.com/industry/media/disney-hotstar-to-stream-the-full-monty-series-international-content-viewership-doubles-in-india-in-2022-11685600307669.html",
      image:
        "https://www.livemint.com/lm-img/img/2023/06/01/600x338/Disney--Hotstar-will-stream-The-Full-Monty-on-16-J_1685600303612.png",
      publishedAt: "2023-06-01T06:18:27Z",
      content:
        "Disney+ Hotstar is set to captivate Indian audiences once again with the upcoming streaming of 'The Full Monty,' an eight-episode series adapted from the acclaimed 1997 movie. The stellar cast, including Robert Carlyle, Mark Addy, and Lesley Sharp, promises a delightful experience. This addition continues the trend of high viewership for international content in India, exemplified by the massive success of series like House of the Dragon and Moon Knight, solidifying Disney+ Hotstar's position as a premier entertainment platform.",
      category: "bollywood",
    },
    {
      id: "11",
      heading:
        "Urvashi Rautela has a new address in Juhu, Rs 190 cr house shares wall with Yash & Pamela Chopra's iconic bungalow",
      description:
        "Bollywood actress Urvashi Rautela has apparently moved into a four-storey bungalow in the Juhu area of Mumbai. The property, which is situated next to late film-maker Yash Chopra's iconic bungalow, is believed to be priced at Rs 190 crore.",
      url: "https://economictimes.indiatimes.com/magazines/panache/urvashi-rautela-has-a-new-address-in-juhu-rs-190-cr-house-shares-wall-with-yash-pamela-chopras-iconic-bungalow/articleshow/100668834.cms",
      image:
        "https://img.etimg.com/thumb/msid-100670238,width-1070,height-580,imgsize-41492,overlay-etpanache/photo.jpg",
      publishedAt: "2023-06-01T06:48:08Z",
      content:
        "Months before she dazzled at the 76th edition of the Cannes Film Festival this year, Bollywood actress Urvashi Rautela 'quietly' moved into a lavish four-storey bungalow in Juhu, Mumbai.According to … [+1920 chars]",
      category: "bollywood",
    },
    {
      id: "12",
      heading:
        '"Check With Us Once In A While": Arjun On Those Malaika Pregnancy Rumours',
      description:
        "Rumours of Malaika Arora's pregnancy gained momentum last year and were quickly refuted by the couple",
      url: "https://www.ndtv.com/entertainment/arjun-kapoor-reacts-to-malaika-arora-s-pregnancy-rumours-check-with-us-once-in-a-while-4084317",
      image:
        "https://c.ndtvimg.com/2023-06/55q1t3m_arjun-kapoor_625x300_01_June_23.jpg",
      publishedAt: "2023-06-01T06:11:31Z",
      content:
        "Arjun Kapoor with Malaika Arora. (courtesy: arjunkapoor)\r\nNew Delhi: Arjun Kapoor and Malaika Arora's relationship has often made headlines. With the increased attention comes a share of rumours that… [+2644 chars]",
      category: "bollywood",
    },
    {
      id: "13",
      heading: "Alia Features With Julia Roberts And Others In New Gucci Video",
      description:
        '"Excited to be chiming in for Gucci Chime\'s 10th anniversary campaign," tweeted Alia Bhatt',
      url: "https://www.ndtv.com/entertainment/alia-bhatt-features-with-julia-roberts-salma-hayek-and-other-big-stars-in-new-gucci-video-4084353",
      image:
        "https://c.ndtvimg.com/2023-06/rn2ufg3o_alia-bhatt_625x300_01_June_23.jpg",
      publishedAt: "2023-06-01T05:54:51Z",
      content:
        "Alia Bhatt in a still from the video. (courtesy: aliaa08)\r\nNew Delhi: Alia Bhatt, who is one of the ambassadors of the Italian high-end luxury brand Gucci, features in a new video. The video was rele… [+1659 chars]",
      category: "bollywood",
    },
    {
      id: "14",
      heading:
        "Naseeruddin Shah mocks ‘immature’ Bollywood stars for having entourages: ‘They like to make a statement, like a shahenshah’",
      description:
        "Naseeruddin Shah joined his wife Ratna Pathak Shah in mocking movie stars who can't function without an entourage.",
      url: "https://indianexpress.com/article/entertainment/bollywood/naseeruddin-shah-immature-bollywood-star-entourage-8639891/",
      image: "https://images.indianexpress.com/2019/12/Naseer-1200.jpg",
      publishedAt: "2023-06-01T04:58:48Z",
      content:
        "Actor Naseeruddin Shah mirrored his wife, actor Ratna Pathak Shah’s recent comments about stars and their entourages. He said that he finds behaviour like this ‘immature’. In an interview, the vetera… [+1874 chars]",
      category: "bollywood",
    },
    {
      id: "15",
      heading:
        "Naseeruddin Shah mocks ‘immature’ Bollywood stars for having entourages: ‘They like to make a statement, like a shahenshah’",
      description:
        "Naseeruddin Shah joined his wife Ratna Pathak Shah in mocking movie stars who can't function without an entourage.",
      url: "https://indianexpress.com/article/entertainment/bollywood/naseeruddin-shah-immature-bollywood-star-entourage-8639891/",
      image: "https://images.indianexpress.com/2019/12/Naseer-1200.jpg",
      publishedAt: "2023-06-01T04:58:48Z",
      content:
        "Actor Naseeruddin Shah mirrored his wife, actor Ratna Pathak Shah’s recent comments about stars and their entourages. He said that he finds behaviour like this ‘immature’. In an interview, the vetera… [+1874 chars]",
      category: "bollywood",
    },
    {
      id: "16",
      heading: "5 movies where R Madhavan won our hearts",
      description:
        "Happy Birthday Madhavan: 5 movies where the actor stole our hearts with his honest performance",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/happy-birthday-madhavan-5-movies-where-the-actor-stole-our-hearts-with-his-honest-performance/photostory/100648287.cms",
      image: "https://static.toiimg.com/photo/100648328.cms",
      publishedAt: "2023-06-01T04:30:00Z",
      content:
        "As the reckless, carefree, besotted lover Maddy, Madhavan breathed life into the character, in a movie that went on to become the love anthem for youngsters. Making her foray into Bollywood opposite … [+234 chars]",
      category: "bollywood",
    },
    {
      id: "17",
      heading: "Katia Kameli",
      description:
        "A storyteller tasked with transmitting oral folklore instead narrates the plot of a classic Bollywood film. A lion’s head mounted on the wall like a hunter’s trophy turns out to be papier-mâché. Ceramic sculptures in the shapes of birds, arranged on plinths, …",
      url: "https://www.artforum.com/print/reviews/202306/katia-kameli-90606",
      image:
        "https://www.artforum.com/uploads/upload.002/id25070/article00_1064x.jpg",
      publishedAt: "2023-06-01T04:00:00Z",
      content:
        "A storyteller tasked with transmitting oral folklore instead narrates the plot of a classic Bollywood film. A lion’s head mounted on the wall like a hunter’s trophy turns out to be papier-mâché. Cera… [+4490 chars]",
      category: "bollywood",
    },

    // Hollywood news
    {
      id: "18",
      heading:
        "Arnold Schwarzenegger Wishes Clint Eastwood Happy 93rd Birthday: ‘You’ve Inspired Me, You’ve Mentored Me’",
      description:
        '"And you\'re a wonderful friend," Schwarzenegger writes about the acclaimed actor-director',
      url: "http://www.thewrap.com/arnold-schwarzenegger-clint-eastwood-93rd-birthday-fubar/",
      image:
        "https://www.thewrap.com/wp-content/uploads/2023/02/fubar-arnold-schwarzenegger.jpg",
      publishedAt: "2023-06-01T04:44:13Z",
      content:
        "Hollywood icon and literal living legend Clint Eastwood celebrated his 93rd birthday, marking another incredible milestone in his illustrious life. In a heartfelt message, Arnold Schwarzenegger, a fellow Hollywood legend, extended his wishes to Eastwood, expressing admiration for his inspiration and mentorship. The camaraderie between these two iconic figures showcases the lasting impact of their contributions to the world of entertainment.",
      category: "hollywood",
    },
    {
      id: "19",
      heading:
        "Danny Masterson victim speaks out after guilty verdict and calls on others to 'tell the truth'",
      description:
        "One of Danny Masterson's victims has spoken out for the first time since the That 70s Show star was convicted of two counts of rape in a Los Angeles court on Wednesday.",
      url: "https://www.dailymail.co.uk/news/article-12147023/Danny-Masterson-victim-speaks-guilty-verdict-calls-tell-truth.html",
      image:
        "https://i.dailymail.co.uk/1s/2023/06/01/07/71641063-0-image-a-2_1685600788698.jpg",
      publishedAt: "2023-06-01T06:31:09Z",
      content:
        "Following the conviction of That '70s Show star Danny Masterson on two counts of rape, one of his victims has courageously spoken out for the first time. In the aftermath of the trial, this survivor is calling on others to speak their truths and break the silence surrounding such traumatic experiences. The case sheds light on the importance of justice and support for survivors in the entertainment industry.",
      category: "hollywood",
    },
    {
      id: "20",
      heading:
        "As World Keeps Eye On WGA Strike, Indian Writers’ Survey Reveals Issues With Pay Levels, Credits & Training",
      description:
        "EXCLUSIVE: With the Writers Guild of America (WGA) strike entering its second month in the U.S., writers and filmmakers around the world are taking note of how these issues play out in their own countries.",
      url: "https://deadline.com/2023/05/india-writers-survey-wga-strike-tulsea-ormax-media-1235383401/",
      image:
        "https://deadline.com/wp-content/uploads/2023/05/GettyImages-1249663413.jpg?w=1024",
      publishedAt: "2023-06-01T06:30:00Z",
      content:
        "With the Writers Guild of America (WGA) strike in its second month, the global writing and filmmaking community is paying attention to the broader implications of the standoff. In India, a nation home to multiple significant film industries, a survey reveals issues with pay, credits, and training for writers. This offers a glimpse into the challenges faced by writers internationally, highlighting the need for fair compensation and recognition.",
      category: "hollywood",
    },
    {
      id: "21",
      heading:
        "Dollar General cuts annual forecasts as American shoppers turn cautious",
      description:
        "Dollar General cuts annual forecasts as American shoppers turn cautious",
      url: "https://www.investing.com/news/stock-market-news/dollar-general-cuts-annual-sales-forecast-as-american-shoppers-turn-cautious-3096104",
      image: "https://i-invdn-com.investing.com/news/LYNXNPEC180BO_L.jpg",
      publishedAt: "2023-06-01T11:21:10Z",
      content:
        "Dollar General Corp (NYSE:DG) has revised its full-year sales and profit forecasts as American shoppers exercise caution due to inflation-driven price hikes across various product categories. The shift in consumer behavior underscores the impact of economic fluctuations on retail businesses and indicates the importance of adapting strategies to meet changing market dynamics.",
      category: "food",
    },
    {
      id: "22",
      heading:
        "New movie Mind, Body & Soul explores how Satan could be rebranded in 2023",
      description:
        "An existential documentary about Satan trying to adapt again to a modern society.",
      url: "https://www.creativeboom.com/inspiration/mind-body-soul/",
      image:
        "https://www.creativeboom.com/uploads/articles/29/29fa7adaf8bbafe5467d422e5f4605951ba84e67_800.jpg",
      publishedAt: "2023-06-01T06:30:00Z",
      content:
        "The intriguing documentary 'Mind, Body & Soul' delves into the concept of Satan in a modern world. Examining how this age-old figure could be rebranded and contextualized for contemporary society, the film raises philosophical questions about human nature, belief systems, and cultural shifts. It explores the timeless fascination with the concept of evil, prompting audiences to reflect on the ever-evolving interpretations of such profound ideas.",
      category: "hollywood",
    },
    {
      id: "23",
      heading:
        "Arnold Schwarzenegger Wishes Clint Eastwood Happy 93rd Birthday: ‘You’ve Inspired Me, You’ve Mentored Me’",
      description:
        '"And you\'re a wonderful friend," Schwarzenegger writes about the acclaimed actor-director',
      url: "http://www.thewrap.com/arnold-schwarzenegger-clint-eastwood-93rd-birthday-fubar/",
      image:
        "https://www.thewrap.com/wp-content/uploads/2023/02/fubar-arnold-schwarzenegger.jpg",
      publishedAt: "2023-06-01T04:44:13Z",
      content:
        "Hollywood icon and literal living legend Clint Eastwood celebrated his 93rd birthday, marking another incredible milestone in his illustrious life. In a heartfelt message, Arnold Schwarzenegger, a fellow Hollywood legend, extended his wishes to Eastwood, expressing admiration for his inspiration and mentorship. The camaraderie between these two iconic figures showcases the lasting impact of their contributions to the world of entertainment.",
      category: "hollywood",
    },

    // Food news
    {
      id: "24",
      heading:
        "Dollar General cuts annual forecasts as American shoppers turn cautious",
      description:
        "Dollar General cuts annual forecasts as American shoppers turn cautious",
      url: "https://www.investing.com/news/stock-market-news/dollar-general-cuts-annual-sales-forecast-as-american-shoppers-turn-cautious-3096104",
      image: "https://i-invdn-com.investing.com/news/LYNXNPEC180BO_L.jpg",
      publishedAt: "2023-06-01T11:21:10Z",
      content:
        "(Reuters) - Dollar General Corp (NYSE:DG) cut its full-year same-store sales and profit forecasts on Thursday as inflation-hit Americans, discouraged by higher prices for everything from home supplie… [+778 chars]",
      category: "food",
    },
    {
      id: "25",
      heading:
        "‘A historic moment’: Illinois to provide halal and kosher meals to schoolkids",
      description:
        "A bill passed the state legislature that will require state-funded institutions to provide halal and kosher meals on requestAs a student at Sullivan high school in Chicago, Ridwan Rashid frequently skipped lunch and was distracted by hunger, even though his s…",
      url: "https://www.theguardian.com/environment/2023/jun/01/illinois-halal-kosher-school-meals",
      image:
        "https://i.guim.co.uk/img/media/3533124efbae4235ff7a3b6c2abccc7b2b594cda/0_0_1272_763/master/1272.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b4d31c41e7315e82e672664cdde54ac0",
      publishedAt: "2023-06-01T11:00:31Z",
      content:
        "As a student at Sullivan high school in Chicago, Ridwan Rashid frequently skipped lunch and was distracted by hunger, even though his school offered free meals to all students. Rashid is Muslim, as a… [+10583 chars]",
      category: "food",
    },
    {
      id: "26",
      heading:
        "What’s in the cliffhanger deal struck by Biden and McCarthy to raise the debt limit?",
      description:
        "Agreement will prevent US from defaulting on loans and losing credit rating",
      url: "https://www.independent.co.uk/news/world/americas/us-politics/what-is-the-debt-ceiling-deal-2023-b2349594.html",
      image:
        "https://static.independent.co.uk/2023/05/28/20/EEUU-DEUDA_73078.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-06-01T11:00:21Z",
      content:
        "Sign up for the daily Inside Washington email for exclusive US coverage and analysis sent to your inbox\r\nGet our free Inside Washington email\r\nWeeks of sniping back-and-forth between the White House … [+6195 chars]",
      category: "food",
    },
    {
      id: "28",
      heading: "SNAP Schedule 2023: When June Payments Are Coming",
      description:
        "The Supplemental Nutrition Assistance Program (SNAP) is a federally administered program that provides financial assistance to low-income individuals and...",
      url: "https://finance.yahoo.com/news/snap-schedule-2023-june-payments-110008752.html",
      image:
        "https://s.yimg.com/ny/api/res/1.2/zQGH0zOowgmVFlgL8MCy1w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/86cd707087d3c89d717c0e6944002ea8",
      publishedAt: "2023-06-01T11:00:08Z",
      content:
        "jetcityimage / Getty Images\r\nThe Supplemental Nutrition Assistance Program (SNAP) is a federally administered program that provides financial assistance to low-income individuals and families to purc… [+4357 chars]",
      category: "food",
    },
    {
      author: "Esquire Editors",
      id: "29",
      heading: "The Best Bars in America, 2023",
      description:
        "From a space-themed bar in San Diego, to conjuring the 70s through wine in New Orleans, and reinventing the quintessential dive in New York, here are all the new spots to order another round or three.",
      url: "https://www.esquire.com/food-drink/bars/a43989427/best-bars-america-2023/",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/social-64765cbe771a9.jpg?crop=0.998xw:1.00xh;0.00160xw,0&resize=1200:*",
      publishedAt: "2023-06-01T11:00:00Z",
      content:
        "Birds were on every page. Pretty ones. Ugly ones. Downright strange-looking ones. I was perusing the avian-themed cocktail menu at Meadowlark, an old library-like spot in Chicagos Logan Hill neighbor… [+29401 chars]",
      category: "food",
    },

    {
      author: "Katy McGuinness",
      id: "30",
      heading:
        "Bramley review: ‘Michelin-star chef brings fine dining to Laois and I predict it won’t be long until the inspectors come calling’",
      description:
        "Abbeyleix is one of those rare, handsome Irish towns and, with the newly opened Bramley, it now has a smart restaurant worthy of its wide main street. When I phone chef-owner Sam Moody a few days after my visit to check some details, he is delighted by the re…",
      url: "https://www.independent.ie/life/food-drink/food-reviews/bramley-review-michelin-star-chef-brings-fine-dining-to-laois-and-i-predict-it-wont-be-long-until-the-inspectors-come-calling/a1460764418.html",
      image:
        "https://focus.independent.ie/thumbor/daeP1nq-CdCwInZeKsk4rKUWIU4=/155x0:1085x620/930x620/prod-mh-ireland/172c4774-df85-491e-816a-7b395f80856b/8e5b6043-e8e5-4d5a-afdd-26803273cf60/172c4774-df85-491e-816a-7b395f80856b.jpg",
      publishedAt: "2023-06-01T11:00:00Z",
      content:
        "Our food critic is impressed by the excellent food and friendly service at Abbeyleixs newest restaurant\r\nAbbeyleix is one of those rare, handsome Irish towns and, with the newly opened Bramley, it no… [+360 chars]",
      category: "food",
    },
    {
      author: "Julie Chiou",
      id: "31",
      description:
        "This crack pie is a homemade version and copycat recipe of Milk Bar's famous pie by Christina Tosi! It's irresistibly salty, sweet, and gooey!",
      url: "https://www.tablefortwoblog.com/crack-pie/",
      image:
        "https://www.tablefortwoblog.com/wp-content/uploads/2023/05/crack-pie-recipe-photo-tablefortwoblog-15-scaled.jpg",
      publishedAt: "2023-06-01T11:00:00Z",
      content:
        "Crack Pie has an oatmeal cookie crust that’s topped with the most incredible sweet and salty filling! This is a homemade copycat version of the famous Milk Bar pie and it always hits the spot. Serve … [+9455 chars]",
      category: "food",
    },

    {
      author: null,
      id: "32",
      heading: "3 smart ways Seattle is at the forefront of reuse",
      description:
        "The city and Washington state’s support of closed loop economic models through public-private partnerships and grant programs is inspiring entrepreneurs throughout the region.",
      url: "https://www.greenbiz.com/article/3-smart-ways-seattle-forefront-reuse",
      image:
        "https://www.greenbiz.com/sites/default/files/styles/og_image_1200x630/public/2023-05/shutterstock_161412803.jpg?itok=l4jysjyY",
      publishedAt: "2023-06-01T11:00:00Z",
      content:
        "Seattle is one of a growing number of cities globally embracing the principles of a circular economy one that prioritizes the reduction of wasteful consumption habits and lifts up models centered on … [+6681 chars]",
      category: "food",
    },
    {
      author: null,
      id: "33",
      heading:
        "【大好評】世界のトップクリエイターから世界基準のUIを学ぶ！6/26（月）無料セミナー「ゲーム、アプリ、Webサイト向けの優れたUIを作ろう！Vol.6」",
      description:
        "[株式会社クリーク・アンド・リバー社]\nOn June 26th,(Monday), Creek and River Co., Ltd.(C&R) will hold the seminar“ Outstanding UI for Games, Apps & Websites Vol.6 -Information design: information structure-”.\n*This webinar is available...",
      url: "https://prtimes.jp/main/html/rd/p/000002945.000003670.html",
      image:
        "https://prtimes.jp/i/3670/2945/ogp/d3670-2945-c03d4300dfeba4cbf9e1-0.jpg",
      publishedAt: "2023-06-01T11:00:00Z",
      content:
        "On June 26th,(Monday), Creek and River Co., Ltd.(C&amp;R) will hold the seminar Outstanding UI for Games, Apps &amp; Websites Vol.6 -Information design: information structure-.*This webinar is availa… [+5547 chars]",
      category: "food",
    },

    {
      author: "Νατάσα Στασινού",
      id: "34",
      heading: "Eurostat: Greek inflation slows at 4.1% in May",
      description:
        "The harmonized consumer price index in Greece slowed to 4.1% in May from 4.5% in April, 5.4% in March, 6.5% in February and 7.3% in January amidst food prices continuing…\nEurostat: Greek inflation slows at 4.1% in May - Η ΝΑΥΤΕΜΠΟΡΙΚΗ",
      url: "https://www.naftemporiki.gr/english/1478317/eurostat-greek-inflation-slows-at-4-1-in-may/",
      image:
        "https://www.naftemporiki.gr/wp-content/uploads/2022/11/inflation-1.jpg",
      publishedAt: "2023-06-01T10:57:00Z",
      content:
        "The harmonized consumer price index in Greece slowed to 4.1% in May from 4.5% in April, 5.4% in March, 6.5% in February and 7.3% in January amidst food prices continuing their upward trend and energy… [+443 chars]",
      category: "food",
    },

    {
      author: "Alex Woodward",
      id: "35",
      heading:
        "Anti-poverty groups and progressives blast work requirements for aid to poor Americans in debt ceiling deal",
      description:
        "‘We shouldn’t be playing politics with programs that help Americans meet their basic needs’",
      url: "https://www.independent.co.uk/news/world/americas/us-politics/debt-ceiling-deal-work-requirements-snap-b2349589.html",
      image:
        "https://static.independent.co.uk/2023/05/31/16/10634431.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-06-01T10:52:51Z",
      content:
        "Sign up for the daily Inside Washington email for exclusive US coverage and analysis sent to your inbox\r\nGet our free Inside Washington email\r\nAn agreement to raise the debt ceiling would expand the … [+6428 chars]",
      category: "food",
    },
    {
      author: "Mews",
      id: "36",
      heading:
        "Mews Open API enables hoteliers to build and connect 1,000 bespoke solutions to transform hotel operations",
      description:
        "Mews, the industry-leading hospitality cloud, is transforming the way hotels operate thanks to its open APIs, which have enabled customers to build and connect more than 1,000 of their custom applications to the hospitality management platform.",
      url: "https://www.hospitalitynet.org/news/4116669.html",
      image:
        "https://www.hospitalitynet.org/picture/social_153156699.jpg?t=1685609477",
      publishedAt: "2023-06-01T10:52:00Z",
      content:
        "PRAGUE - Mews, the industry-leading hospitality cloud, is transforming the way hotels operate thanks to its open APIs, which have enabled customers to build and connect more than 1,000 of their custo… [+3016 chars]",
      category: "food",
    },
    {
      author: "marca.com",
      id: "37",
      heading:
        "Maria Sharapova moves on from tennis to earn millions as a businesswoman: What is Sugarpova?",
      description:
        "Following her successful career as an athlete, Maria Sharapova has ventured into the business world by creating her own candy brand called Sugarpova, a candy line that includes cho",
      url: "https://www.marca.com/en/tennis/2023/06/01/64787801e2704e12318b45ce.html",
      image:
        "https://phantom-marca.unidadeditorial.es/97d119997738941291b68348009085b5/resize/1200/f/jpg/assets/multimedia/imagenes/2023/06/01/16856165259657.jpg",
      publishedAt: "2023-06-01T10:51:10Z",
      content:
        "Following her successful career as an athlete, Maria Sharapova has ventured into the business world by creating her own candy brand called Sugarpova, a candy line that includes chocolates, gummies, g… [+1758 chars]",
      category: "food",
    },
    {
      author: "Sabrina Gamrot",
      id: "38",
      heading:
        "How the 2023 RBC Canadian Open is shaping up to be Toronto's event of the summer",
      description:
        "Toronto in the summer means a schedule of great activities and shows ⁠— but one annual event in the city is shaping up to be one of the season's best.\r\nThe RBC Canadian Open is back once again and the tournament's mashup of sports, music, entertainment, and f…",
      url: "https://www.blogto.com/sponsored/2023/06/2023-rbc-canadian-open-toronto-concert-series/",
      image:
        "https://media.blogto.com/articles/20230529-rbc-canadian-open2.jpeg?w=1200&cmd=resize_then_crop&height=630&quality=70",
      publishedAt: "2023-06-01T10:50:45Z",
      content:
        "Toronto in the summer means a schedule of great activities and shows but one annual event in the city is shaping up to be one of the season's best.\r\nThe RBC Canadian Open is back once again and the t… [+2712 chars]",
      category: "food",
    },
    {
      author: "The Associated Press",
      id: "39",
      heading: "U.S. House passes debt ceiling deal as default threat looms",
      description:
        "Veering away from a default crisis, the U.S. House overwhelmingly approved a debt ceiling and budget cuts package, sending the deal that President Joe Biden and Speaker Kevin McCarthy negotiated to the Senate for swift passage in a matter of days, before a fa…",
      url: "https://www.cbc.ca/news/world/debt-ceiling-us-1.6861576",
      image:
        "https://i.cbc.ca/1.6861577.1685603826!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/debt-limit.jpg",
      publishedAt: "2023-06-01T10:50:14Z",
      content:
        "Veering away from a default crisis, the U.S. House overwhelmingly approved a debt ceiling and budget cuts package, sending the deal that President Joe Biden and Speaker Kevin McCarthy negotiated to t… [+6391 chars]",
      category: "food",
    },
    {
      author: "Zion Market Research",
      id: "40",
      heading:
        "UK Ceramic Tableware Market Size Is Expected to Surpass Around $562.7 Million Mark by 2030, Growing at a CAGR of 4.32%",
      description:
        "[217 + Pages Report] According to a market research study published by Zion Market Research, the demand analysis of UK Ceramic Tableware Market size & share revenue was valued at around USD 408.9 million in 2022 and is estimated to grow about USD 562.7 millio…",
      url: "https://www.globenewswire.com/news-release/2023/06/01/2680129/0/en/UK-Ceramic-Tableware-Market-Size-Is-Expected-to-Surpass-Around-562-7-Million-Mark-by-2030-Growing-at-a-CAGR-of-4-32.html",
      image:
        "https://ml.globenewswire.com/Resource/Download/1f4cf0ab-7d76-4136-a6dc-a5545f80f538",
      publishedAt: "2023-06-01T10:50:00Z",
      content:
        "New York, NY, June 01, 2023 (GLOBE NEWSWIRE) -- Zion Market Research has published a new research report titled UK Ceramic Tableware Market By Product Type (Porcelain, Stoneware, Bone China, Earthenw… [+19095 chars]",
      category: "food",
    },
    {
      author: "MarketScreener",
      id: "41",
      heading:
        "FDA Approves LYNPARZA® (olaparib) Plus Abiraterone and Prednisone or Prednisolone for Treatment of Adult Patients With BRCA-Mutated Metastatic Castration-Resistant Prostate Cancer (mCRPC)",
      description:
        "(marketscreener.com) \nLYNPARZA combination showed a clinically meaningful reduction in risk of disease progression or death in these patients in the Phase 3 PROpel trial\n\n\nFirst approval of a PARP inhibitor in combination with a new hormonal agent in mCRPC\n\nh…",
      url: "https://www.marketscreener.com/quote/stock/MERCK-CO-INC-13611/news/FDA-Approves-LYNPARZA-olaparib-Plus-Abiraterone-and-Prednisone-or-Prednisolone-for-Treatment-of-A-44014318/?utm_medium=RSS&utm_content=20230601",
      image: "https://www.marketscreener.com/images/twitter_MS_fdgris.png",
      publishedAt: "2023-06-01T10:46:02Z",
      content:
        "AstraZeneca and Merck (NYSE: MRK),known as MSD outside of the United States and Canada, today announced that LYNPARZA in combination with abiraterone and prednisone or prednisolone (abi/pred) has bee… [+28492 chars]",
      category: "food",
    },
    {
      author: null,
      id: "42",
      heading: "Statistics Finland: Inflation rate slows in May",
      description:
        "The prices of food and non-alcoholic beverages increased the most last month, according to the Harmonised Index of Consumer Prices published by Statistics Finland on Thursday.",
      url: "https://yle.fi/a/74-20034659",
      image:
        "https://images.cdn.yle.fi/image/upload/c_crop,x_0,y_250,w_5363,h_3016/w_1200,ar_1.91,c_fill/q_auto:eco,f_auto,fl_lossy/v1685615473/39-1118964646e02f001795",
      publishedAt: "2023-06-01T10:45:23Z",
      content:
        "Finland's inflation rate dropped to 5.2 percent year-on-year during May, having stood at 6.3 percent in April, according to preliminary data released by Statistics Finland on Thursday.\r\n\"We are going… [+1740 chars]",
      category: "food",
    },
    {
      author: "Prince Of Petworth",
      id: "43",
      heading: "Random Reader Rant and/or Revel",
      description:
        "photo by LaTur You can talk about whatever is on your mind – quality of life issues, a beautiful tree you spotted, scuttlebutt, or any random questions/thoughts you may have. But please no personal attacks and no need to correct people’s grammar. This is a pl…",
      url: "https://www.popville.com/2023/06/random-reader-rant-and-or-revel-1399/",
      image:
        "https://s26552.pcdn.co/wp-content/uploads/2023/05/dc_neighborhood_news-20.jpg",
      publishedAt: "2023-06-01T10:45:20Z",
      content:
        "Cherry Blossom Healing Arts is Washington DC’s best acupuncture and herbal medicine clinic. Located in Woodley Park, DC, we practice integrative medicine and take a personalized approach to your heal… [+725 chars]",
      category: "food",
    },
    {
      author: null,
      id: "44",
      heading: "Kabwe Port Lifts Cross-Border Trade",
      description:
        "[Daily News] AT a small Kabwe terminal, labourers are busy unloading cargo from trucks and loading onto vessels for shipment to the neighbouring DR Congo and other coastal towns along Lake Tanganyika, the world's longest freshwater body.",
      url: "https://allafrica.com/stories/202306010322.html",
      image:
        "https://cdn08.allafrica.com/static/images/structure/aa-logo-rgba-no-text-square.png",
      publishedAt: "2023-06-01T10:45:08Z",
      content:
        "AT a small Kabwe terminal, labourers are busy unloading cargo from trucks and loading onto vessels for shipment to the neighbouring DR Congo and other coastal towns along Lake Tanganyika, the world's… [+4683 chars]",
    },
    {
      author: "Duy Linh Tu",
      id: "45",
      heading:
        "Erosion and sea-level rise are coming for their Louisiana home. They’re staying anyway.",
      description:
        "For members of Louisiana's Pointe-au-Chien Tribe, relocating means a lot more than simply packing up and moving.",
      url: "http://grist.org/grist-video/erosion-sea-level-rise-and-storms-are-coming-for-their-home-theyre-staying-anyway/",
      image:
        "https://grist.org/wp-content/uploads/2023/05/dardar_thumbnail3.jpg",
      publishedAt: "2023-06-01T10:45:00Z",
      content:
        "Donald and Theresa Dardar live in Pointe-aux-Chenes, Louisiana, a small coastal community home to the Pointe-au-Chien Tribe. Rising seas, sinking land, and intense coastal storms all threaten this ar… [+768 chars]",
      category: "food",
    },
    {
      author: "newsfeedback@fool.com (David Jagielski)",
      id: "46",
      heading:
        "Is Sarepta Therapeutics' Gene Therapy in Danger of Not Obtaining FDA Approval?",
      description:
        "The stock has now given back all of its 2023 gains as investors' fears mount.",
      url: "https://www.fool.com/investing/2023/06/01/is-sarepta-therapeutics-gene-therapy-in-danger-of/",
      image:
        "https://g.foolcdn.com/editorial/images/734260/businessman-with-a-chart-looking-at-his-computer.jpg",
      publishedAt: "2023-06-01T10:45:00Z",
      content:
        "Shares of Sarepta Therapeutics(SRPT -0.98%) nosedived last week as the Food and Drug Administration (FDA) did not approve the company's gene therapy treatment, SRP-9001. Panic has been setting in, as… [+3722 chars]",
      category: "food",
    },
    {
      author: "Shivali Best",
      id: "47",
      heading:
        "Probability of a 'Terminator scenario' caused by AI is close to ZERO, Oxford professor claims",
      description:
        "Professor Sandra Wachter called a letter released by the San Francisco-based Centre for AI Safety - which warned that the technology could wipe out humanity - a 'publicity stunt'.",
      url: "https://www.dailymail.co.uk/sciencetech/article-12144995/Artificial-intelligence-warning-human-extinction-labelled-publicity-stunt.html",
      image:
        "https://i.dailymail.co.uk/1s/2023/06/01/11/71647931-0-image-a-108_1685615919287.jpg",
      publishedAt: "2023-06-01T10:41:56Z",
      content:
        "The probability of a 'Terminator scenario' caused by artificial intelligence (AI) is 'close to zero', a University of Oxford professor has said.\r\nSandra Wachter, professor of technology and regulatio… [+4046 chars]",
      category: "food",
    },
    {
      author: "MarketScreener",
      id: "48",
      heading: "Glanbia : Board Director appointment",
      description:
        "(marketscreener.com) \n \n Board Director appointment\n \n \n 4 May 2023, Glanbia, the better nutrition Company, is announcing the appointment of Ms Gabriella Parisse to its Board as an Independent Non-Executive Director effective 1 June 2023. On appointment Gabri…",
      url: "https://www.marketscreener.com/quote/stock/GLANBIA-PLC-1412376/news/Glanbia-Board-Director-appointment-44014218/?utm_medium=RSS&utm_content=20230601",
      image: "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
      publishedAt: "2023-06-01T10:39:03Z",
      content:
        "Board Director appointment\r\n4 May 2023, Glanbia, the better nutrition Company, is announcing the appointment of Ms Gabriella Parisse to its Board as an Independent Non-Executive Director effective 1 … [+2736 chars]",
      category: "food",
    },
    {
      author: "Research and Markets",
      id: "49",
      heading:
        "Global Stretch Packaging Market Report 2023: Sector is Expected to Reach $3.9 Billion by 2027 at a CAGR of 6.25%",
      description:
        'Dublin, June 01, 2023 (GLOBE NEWSWIRE) -- The "Global Stretch Packaging Market Size, Trends & Growth Opportunity, by Material, by Application, by Region and Forecast to 2027" report has been added to ResearchAndMarkets.com\'s offering.The global Stretch Packag…',
      url: "https://www.globenewswire.com/news-release/2023/06/01/2680118/28124/en/Global-Stretch-Packaging-Market-Report-2023-Sector-is-Expected-to-Reach-3-9-Billion-by-2027-at-a-CAGR-of-6-25.html",
      image:
        "https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7",
      publishedAt: "2023-06-01T10:38:00Z",
      content:
        'Dublin, June 01, 2023 (GLOBE NEWSWIRE) -- The "Global Stretch Packaging Market Size, Trends &amp; Growth Opportunity, by Material, by Application, by Region and Forecast to 2027" report has been adde… [+3566 chars]',
      category: "food",
    },
    {
      author: "Reuters",
      id: "50",
      heading: "El Nino may hammer Asian farms",
      description:
        "SINGAPORE: Early signs of hot, dry weather caused by El Nino are threatening food producers across Asia, while American growers are counting on heavier summer rains from the weather phenomenon to alleviate the impact of severe drought.",
      url: "https://www.bangkokpost.com/world/2583176/el-nino-may-hammer-asian-farms",
      image:
        "https://static.bangkokpost.com/media/content/20230601/c1_2583176_230601174249_700.jpeg",
      publishedAt: "2023-06-01T10:38:00Z",
      content:
        "SINGAPORE: Early signs of hot, dry weather caused by El Nino are threatening food producers across Asia, while American growers are counting on heavier summer rains from the weather phenomenon to all… [+4370 chars]",
      category: "food",
    },
    {
      author: "Eileen Bailey",
      id: "51",
      heading: "ALS: Parkinson's drug ropinirole may be an effective treatment",
      description:
        "In a clinical trial, researchers in Japan reported that the Parkinson's drug ropinirole slowed symptoms in people with ALS over a 6-month period",
      url: "https://www.medicalnewstoday.com/articles/parkinsons-disease-drug-ropinirole-safely-slowed-the-progression-of-als-in-clinical-trial",
      image:
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/06/ropinirole-drug-blister-pack-parkinsons-732x549-thumbnail.jpg",
      publishedAt: "2023-06-01T10:36:00Z",
      content:
        "<ul><li>Ropinirole is a medication already approved as a treatment for Parkinsons disease.</li><li>Researchers are now saying the drug may be an effective treatment for amyotrophic lateral sclerosis … [+5288 chars]",
      category: "food",
    },
    {
      author: "Kob Monney",
      id: "52",
      heading: "Majority Tru Bio",
      description:
        "Cheap doesn’t have to mean tacky as the Majority Tru Bio show with their clear and detailed, secure fit is reliable and ease of use",
      url: "https://www.trustedreviews.com/reviews/majority-tru-bio",
      image:
        "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/05/Majority-Tru-Bio-true-wireless-on-top.jpg",
      publishedAt: "2023-06-01T10:35:56Z",
      content:
        "Cheap doesnt have to mean tacky as the Majority Tru Bio show. The audio performance is clear and detailed, the secure fit is reliable and theyre simple to use. Those looking for an inexpensive noise-… [+10984 chars]",
      category: "food",
    },

    {
      author: "MarketScreener",
      id: "53",
      heading:
        "BJ's Wholesale Club Announces Opening Date for its First Club Location in Tennessee",
      description:
        "(marketscreener.com) \nThe brand-new club in La Vergne opens on Wednesday, June 14, marking the retailer’s first location in the state of Tennessee\n\nhttps://www.marketscreener.com/quote/stock/BJ-S-WHOLESALE-CLUB-HOLDI-44388554/news/BJ-s-Wholesale-Club-Announce…",
      url: "https://www.marketscreener.com/quote/stock/BJ-S-WHOLESALE-CLUB-HOLDI-44388554/news/BJ-s-Wholesale-Club-Announces-Opening-Date-for-its-First-Club-Location-in-Tennessee-44011335/?utm_medium=RSS&utm_content=20230601",
      image: "https://www.marketscreener.com/images/twitter_MS_fdgris.png",
      publishedAt: "2023-06-01T10:31:01Z",
      content:
        "BJ's Wholesale Club (NYSE: BJ) (“BJ’s”), a leading operator of membership warehouse clubs, announced today that its newest club in La Vergne, Tennessee will open on Wednesday, June 14, 2023. The club… [+8551 chars]",
      category: "food",
    },
    {
      author: "Lit Hub Daily",
      id: "54",
      heading: "Lit Hub Daily: June 1, 2023",
      description:
        "HAPPY PRIDE: 37 Drag Race contestants (and RuPaul) on drag as an art form and the show’s legacy • Jess deCourcy Hinds on building an LGBTQ picture book library for her queer family • Cat Sebastian on the unexpected power of Mary Renault’s The Charioteer, the …",
      url: "https://lithub.com/lit-hub-daily-june-1-2023/",
      image: "https://s26162.pcdn.co/wp-content/uploads/2023/05/june-1.jpg",
      publishedAt: "2023-06-01T10:30:49Z",
      content:
        "<li>HAPPY PRIDE: 37 Drag Race contestants (and RuPaul) on drag as an art form and the shows legacy Jess deCourcy Hinds on building an LGBTQ picture book library for her queer family  Cat Sebastian on… [+1573 chars]",
      category: "food",
    },
    {
      author: "Barry Ritholtz",
      id: "55",
      heading: "10 Thursday AM Reads",
      description:
        "My morning train WFH reads: • We Asked Workers Why They’re Not Coming Back to the Office: Terrible commutes. Expensive child care. Employees explain why they will keep working from home. (Wall Street Journal) • Short selling makes markets work better. So why …",
      url: "https://ritholtz.com/2023/06/10-thursday-am-reads-434/",
      image:
        "https://ritholtz.com/wp-content/uploads/2023/06/importantbanks.png",
      publishedAt: "2023-06-01T10:30:33Z",
      content:
        "We Asked Workers Why Theyre Not Coming Back to the Office: Terrible commutes. Expensive child care. Employees explain why they will keep working from home. (Wall Street Journal)\r\n Why Are Food Prices… [+2889 chars]",
      category: "food",
    },
    {
      author: "Fritz Hahn, Olivia McCormack, Sophia Solano",
      id: "56",
      heading: "D.C.’s 10 best bottomless brunches",
      description:
        "Whether you're celebrating a birthday, planning a weekend date or looking for a place to bring your pup, these all-you-can-drink brunches are the perfect fit.",
      url: "https://www.washingtonpost.com/dc-md-va/2023/06/01/best-bottomless-brunch-dc/",
      image:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HQTYJY2FSCHIJWDYZQBPI5KLM4.JPG&w=1440",
      publishedAt: "2023-06-01T10:30:33Z",
      content:
        "Return to menuLe Mont Royal, 1815 Adams Mill Rd. NW. lemontdc.com.\r\nWhen: Saturday and Sunday from noon to 4 p.m.\r\nWhats bottomless: $30 for mimosas; $50 for mimosas, Caesars (a.k.a. Canadian bloody … [+1860 chars]",
      category: "food",
    },
    {
      author: "Brad Botkin",
      id: "47",
      heading:
        "NBA Finals predictions: Expert picks for Nuggets vs. Heat and 2023 Finals MVP as Denver enters as favorite",
      description:
        "CBS Sports experts are siding with the Nuggets ahead of the 2023 NBA Finals",
      url: "https://www.cbssports.com/nba/news/nba-finals-predictions-expert-picks-for-nuggets-vs-heat-and-2023-finals-mvp-as-denver-enters-as-favorite/",
      image:
        "https://sportshub.cbsistatic.com/i/r/2023/05/31/3c239777-864d-428a-8d83-abaa61eed4eb/thumbnail/1200x675/9d856748d14dfa40c1d679dc3c0f84c7/jokic-getty-10.png",
      publishedAt: "2023-06-01T10:30:26Z",
      content:
        "The 2023 NBA Finals matchup is set, and for just the second time in history it will include a No. 8 seed. That would be the Miami Heat, who avoided becoming the first team in history to blow a 3-0 se… [+5004 chars]",
      category: "food",
    },
    {
      author:
        "Omer Awan, Contributor, \n Omer Awan, Contributor\n https://www.forbes.com/sites/omerawan/",
      id: "58",
      heading: "Why You Should Pay Attention To Diabetes",
      description:
        "This means that more than 1 in 3 Americans has prediabetes, which is more than the number of Americans that have cancer, heart disease, or stroke.",
      url: "https://www.forbes.com/sites/omerawan/2023/06/01/why-you-should-pay-attention-to-diabetes/",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/6475fd75630df26bf3996723/0x0.jpg?format=jpg&crop=2404,1603,x0,y0,safe&width=1200",
      publishedAt: "2023-06-01T10:30:03Z",
      content:
        "A woman with diabetes uses a glucometer to measure the glycemia in her blood in Paris on March 24, ... [+] 2020, on the eighth day of a strict lockdown in France aimed at curbing the spread of COVID-… [+3750 chars]",
      category: "food",
    },
    {
      author: "Paul du Quenoy",
      id: "69",
      heading:
        "Target Is the Latest Proof—Going Woke Means Going Broke | Opinion",
      description:
        "Across the corporate world, the lesson is clear. Messaging support for radical ideologies antagonizes far more Americans than it attracts.",
      url: "https://www.newsweek.com/target-latest-proofgoing-woke-means-going-broke-opinion-1803675",
      image:
        "https://d.newsweek.com/en/full/2241330/pride-merchandise-target.jpg",
      publishedAt: "2023-06-01T10:30:01Z",
      content:
        "\"I think those are just good business decisions, and it's the right thing for society, and it's the great thing for our brand.\" That's how Target CEO Brian Cornell described his company's diversity, … [+5501 chars]",
      category: "food",
    },
    {
      author: "Rosa Bertoli",
      id: "60",
      heading:
        "Zara Home and Vincent Van Duysen’s second collection is a hymn to conviviality",
      description:
        "Zara Home+ by Vincent Van Duysen Collection 02 is the second chapter of the sophisticated collaboration and is focused on dining, featuring furniture, tableware and accessories",
      url: "https://www.wallpaper.com/design-interiors/zara-home-vincent-van-duysen-dining-room-furniture-accessories",
      image:
        "https://cdn.mos.cms.futurecdn.net/jDizpnioRALkmYCjH5PVX6-1200-80.jpg",
      publishedAt: "2023-06-01T10:30:00Z",
      content:
        "Zara Home and Vincent Van Duysen launch a new collection, following their collaborative debut in 2022. The inaugural collection was based on the living room, with a focus on upholstered seating, tabl… [+3803 chars]",
      category: "food",
    },

    // Fitness
    {
      id: "61",
      author: "John Doe Bodybuilding",
      heading: "10 Tips to Transform Your Body",
      description:
        "When I say “transform your body” here, I'm talking about looking like a totally different person within a relatively short time period. This is definitely easier said than done, but not impossible if you're willing to put in the work and make your body transf…",
      url: "https://johndoebodybuilding.com/10-tips-to-transform-your-body/",
      image:
        "https://johndoebodybuilding.com/wp-content/uploads/2023/06/10-tips-to-transform-your-body.jpg",
      publishedAt: "2023-06-01T11:23:42Z",
      content:
        "Skip to content\r\nWhen I say “transform your body” here, I’m talking about looking like a totally different person within a relatively short time period. This is definitely easier said than done, but … [+26572 chars]",
      category: "fitness",
    },
    {
      id: "62",
      author: null,
      heading:
        "Miami Vice: The Complete Series on Blu-ray for $29 + free shipping",
      description: "You'd pay over $50 elsewhere. Buy Now at Best Buy",
      url: "https://www.dealnews.com/Miami-Vice-The-Complete-Series-on-Blu-ray-for-29-free-shipping/21227652.html",
      image:
        "https://c.dlnws.com/image/upload/f_auto,t_maximum,q_auto/content/xb2u9zhs1qrk4vjlaiwt.jpg",
      publishedAt: "2023-06-01T11:17:37Z",
      content:
        "moreThe first 500,000 subscribers in the U.S. can reserve a dual screen smart TV, which will be shipped beginning this summer. The catch is that the second, smaller screen shows ads 24/7. According t… [+401 chars]",
      category: "fitness",
    },
    {
      id: "63",
      author: "Mat Smith",
      heading: "The Morning After: What to expect from Apple’s WWDC 2023",
      description:
        "Apple’s big developer conference kicks off June 5th, and all the signs point to the company’s mixed reality headset making its first appearance. The tech giant has been acquiring headset-friendly startups\r\n for years, and if the rumors are true, Apple’s stand…",
      url: "https://www.engadget.com/the-morning-after-what-to-expect-from-apples-wwdc-2023-111535949.html",
      image:
        "https://s.yimg.com/uu/api/res/1.2/w5eokYEru719pqXSfleocA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/989f60f0-ce54-11ed-ae79-580cd063061e.cf.jpg",
      publishedAt: "2023-06-01T11:15:35Z",
      content:
        "Apples big developer conference kicks off June 5th, and all the signs point to the companys mixed reality headset making its first appearance. The tech giant has been acquiring headset-friendly start… [+3804 chars]",
      category: "fitness",
    },
    {
      id: "64",
      author: "Tporpora",
      heading:
        "She left a career in the cosmetics industry to open her own Staten Island Pilates studio",
      description:
        "'Pilates is a low impact exercise that focuses on making that mind-body connection. Doing Pilates daily can help improve mobility, flexibility, and most importantly, core strength.'",
      url: "https://www.silive.com/business/2023/06/she-left-a-career-in-the-cosmetics-industry-to-open-her-own-staten-island-pilates-studio.html",
      image:
        "https://www.silive.com/resizer/FHkstM8fmQtj0zz-pOnZmcrMMvA=/1280x0/filters:focal(413x48:423x38)/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ZZAXUNVUJJCLNCHFM3W6WACRFY.png",
      publishedAt: "2023-06-01T11:11:05Z",
      content:
        "STATEN ISLAND, N.Y. -- During the 2020 coronavirus (COVID-19) pandemic, Kristie Nunez, 33 -- who formerly worked in the cosmetic industry -- had time to reflect on her career and focus on her fitness… [+3190 chars]",
      category: "fitness",
    },
    {
      id: "65",
      author: "Genevieve Healey",
      heading:
        "Fourth Frontier X2 AI heart wearable tracks a continuous ECG & other heart health metrics",
      description:
        "Experience personalized, holistic heart health tracking with the Frontier X2 Smart Heart Monitor. Designed for use during any activity—sports, exercise, sleep, work, or leisure—the Frontier X2 measures a continuous ECG for 24 hours. It works on the go—anytime…",
      url: "https://thegadgetflow.com/portfolio/fourth-frontier-x2-ai-heart-wearable-tracks-a-continuous-ecg-other-heart-health-metrics/",
      image:
        "https://thegadgetflow.com/wp-content/uploads/2023/05/Fourth-Frontier-X2-Smart-Heart-ECG-Monitor-Wearable-001.jpg",
      publishedAt: "2023-06-01T11:00:23Z",
      content:
        "Limited-time offer: get $100 OFF retail price! \r\nExperience personalized, holistic heart health tracking with the Frontier X2 Smart Heart Monitor. Designed for use during any activitysports, exercise… [+808 chars]",
      category: "fitness",
    },
    {
      id: "66",
      author: "Nancy Collamer",
      heading: "How Your Hobbies Can Make You Money in Retirement",
      description:
        "After decades of hard work, you're nearing retirement age and looking forward to long days spent outdoors, online and on the road. But, maybe you haven't...",
      url: "https://finance.yahoo.com/news/hobbies-money-retirement-110003361.html",
      image:
        "https://s.yimg.com/ny/api/res/1.2/ytoTtMiEdznwP4bvwAJkNA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/b85a69b164b683e7f08094ea50d359b2",
      publishedAt: "2023-06-01T11:00:03Z",
      content:
        "DuxX / Getty Images/iStockphoto\r\nAfter decades of hard work, you're nearing retirement age and looking forward to long days spent outdoors, online and on the road. But, maybe you haven't decided how … [+7666 chars]",
      category: "fitness",
    },
    {
      author: "Julian Horsey",
      id: "67",
      heading:
        "Lindero gesture controlled wireless earphones with Siri support",
      description:
        "Lindero has created a new pair of rechargeable gesture controlled wireless earphones that not only allow you to easily control your audio playback but also support Apple Siri. Launched via Kickstarter this month the earphones can be used during calls and feat…",
      url: "https://www.geeky-gadgets.com/gesture-controlled-wireless-earphones-01-06-2023/",
      image:
        "https://www.geeky-gadgets.com/wp-content/uploads/2023/06/gesture-controlled-wireless-earphones.jpg",
      publishedAt: "2023-06-01T10:44:39Z",
      content:
        "Lindero has created a new pair of rechargeable gesture controlled wireless earphones that not only allow you to easily control your audio playback but also support Apple Siri. Launched via Kickstarte… [+2558 chars]",
      category: "fitness",
    },

    {
      id: "68",
      author: "Megan Maurice",
      heading:
        "Women’s State of Origin 2023 Game 1: NSW Sky Blues v Queensland Maroons – live updates",
      description:
        "<ul><li>Updates from the series opener at CommBank Stadium</li><li>Any thoughts? Email or tweet @meganmaurice</li></ul>6 mins: A much better start to the set for the Maroons this time, but on the fourth tackle, a loose pass from Upton heads over the sideline.…",
      url: "https://www.theguardian.com/sport/live/2023/jun/01/womens-state-of-origin-2023-game-1-live-score-updates-qld-maroons-vs-nsw-blues-team-list-what-time-is-kickoff-start-queensland-latest-news",
      image:
        "https://i.guim.co.uk/img/media/f4f6f596bde9aa780cf8b107d957d9e9b82b61e5/0_104_3132_1879/master/3132.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=d486cc1e85b8c6235205f7cf8a73cc85",
      publishedAt: "2023-06-01T10:16:10Z",
      content:
        "Well, that was a frenetic half from both teams, but it was Queensland who were able to pull ahead and take the lead into half time. Isabelle Kelly is in some distress and has gone straight to the she… [+75007 chars]",
      category: "fitness",
    },

    {
      id: "69",
      author: "newsfeedback@fool.com (Timothy Green)",
      heading: "1 Dow Jones Stock to Buy, and 1 to Avoid",
      description:
        "Intel looks like a good long-term bet right now. Apple, not so much.",
      url: "https://www.fool.com/investing/2023/06/01/1-dow-jones-stock-to-buy-and-1-to-avoid/",
      image:
        "https://g.foolcdn.com/editorial/images/734410/decision-which-way-what-to-do-decide-options-alternatives-choices.jpg",
      publishedAt: "2023-06-01T10:10:00Z",
      content:
        "Within the Dow Jones Industrial Average(^DJI), Intel(INTC 4.83%) has some of the best long-term potential. While times are tough for the chip giant right now, its push to become a contract manufactur… [+4413 chars]",
      category: "fitness",
    },
    {
      id: "70",
      author: "Anthony Robert",
      heading:
        "You Learn To Fly By Falling: Discover Nature’s Best Secret to Success",
      description:
        "Do you remember those school days when we had to learn about birds? One minute they’re these adorable, featherless puffballs, all snuggled up in their nest. And then… And for a heart-stopping second…",
      url: "https://betterhumans.pub/you-learn-to-fly-by-falling-discover-natures-best-secret-to-success-ebcc1dba250c",
      image: "https://miro.medium.com/v2/resize:fit:1200/0*ZPqNdMDv6WlAEkok",
      publishedAt: "2023-06-01T09:31:41Z",
      content:
        "You Learn To Fly By Falling: Discover Natures Best Secret to Success\r\nPhoto by Patrice Bouchard on Unsplash\r\nThe best teacher in life is Mother Nature\r\nDo you remember those school days when we had t… [+3815 chars]",
      category: "fitness",
    },
    {
      id: "71",
      author: null,
      heading:
        "‘It’s changed my life’: British and Israeli veterans compete at inspirational Veteran Games",
      description:
        "Over 60 British veterans travelled to Israel this week with their families to participate in the Veteran Games. The five-day trip also includes family time at the Dead Sea and visiting Jerusalem",
      url: "https://www.jewishnews.co.uk/its-changed-my-life-british-and-israeli-veterans-compete-at-inspirational-veteran-games/",
      image:
        "https://static.jewishnews.co.uk/jewishnews/uploads/2023/05/EGP_433661-1024x640.jpg",
      publishedAt: "2023-06-01T09:31:30Z",
      content:
        "“I was always proud of him.” Travis Eaglesham is watching his dad, Phillip, helping another British veteran with his skills at the shooting range in the Beit Halochem sports centre outside Tel Aviv. … [+6550 chars]",
      category: "fitness",
    },
    {
      id: "72",
      author: "Igor",
      heading:
        "Discover 90 Mind-blowing ChatGPT Prompts That Will Ignite Your Creativity!",
      description:
        "Last Updated on June 1, 2023 You’re about to enter a world of creative ideas that will spark your imagination and challenge your thinking – don’t worry, you’ll love it! ChatGPT prompts can help you explore the possibilities of co-editing,…\nThe post Discover 9…",
      url: "https://inspirationfeed.com/awesome-chatgpt-prompts/",
      image:
        "https://inspirationfeed.com/wp-content/uploads/2023/06/Awesome-ChatGPT-Prompts-min.jpg",
      publishedAt: "2023-06-01T09:23:59Z",
      content:
        "Last Updated on June 1, 2023\r\nYou’re about to enter a world of creative ideas that will spark your imagination and challenge your thinking – don’t worry, you’ll love it! ChatGPT prompts can help you … [+47867 chars]",
      category: "fitness",
    },
    {
      id: "73",
      author: "Luke Slater",
      heading:
        "England vs Ireland live: score and latest updates from day one of Lord's Test",
      description: "",
      url: "http://www.telegraph.co.uk/cricket/2023/06/01/england-vs-ireland-live-score-lords-test-day-1-stokes",
      image:
        "https://www.telegraph.co.uk/content/dam/cricket/2023/06/01/TELEMMGLPICT000337760880_16856096759240_trans_NvBQzQNjv4BqXNTeB5gro9ot_3zocZVbt-il7a1KV2STY3xRqqFt_No.jpeg?impolicy=logo-overlay",
      publishedAt: "2023-06-01T09:18:45Z",
      content:
        "Welcome to our live coverage of the first and only Test between England and Ireland at Lords. England have had a busy winter and have a busy summer ahead of them, with the Ashes kicking off later thi… [+1979 chars]",
      category: "fitness",
    },
    {
      id: "74",
      author: "USA TODAY, Kim Komando",
      heading:
        "Netflix and other subscriptions out of control? How to decide which apps are worth paying for",
      description:
        "Netflix or Hulu? When it comes to apps, quality, value and preference matter. How to figure out which apps are worth paying for and which are not.",
      url: "https://www.usatoday.com/story/tech/columnist/komando/2023/06/01/netflix-apple-music-spotify-which-apps-should-you-pay-for/70262460007/",
      image:
        "https://www.gannett-cdn.com/presto/2018/09/10/USAT/004ed4ec-2253-4482-a350-148c0615d13e-GettyImages-467023790.jpg?auto=webp&crop=2768,1545,x0,y0&format=pjpg&width=1200",
      publishedAt: "2023-06-01T09:13:35Z",
      content:
        "Seeing a charge come through for a streaming service you forgot you even subscribed to is a special kind of frustration.\r\nThis is bound to happen if you sign up for free trials but never set a remind… [+5663 chars]",
      category: "fitness",
    },
    {
      id: "75",
      author: "Lynn Kavanagh",
      heading: "A dairy cow’s sad, final days",
      description:
        "Today is World Milk Day, created by the United Nations to recognize the importance of milk as a global food. We must reduce animal-sourced foods with more plant-based ones, including milk replacements.",
      url: "https://www.nationalobserver.com/2023/06/01/opinion/dairy-cows-sad-final-days",
      image:
        "https://www.nationalobserver.com/sites/nationalobserver.com/files/styles/nat_social/public/img/2023/05/31/dairy_cow_will_full_udder_at_an_ontario_livestock_auction_photo_by_louise_jorgensen_-_animal_sentience_project_-_we_animal_media.jpg?itok=hkAJ-UiS",
      publishedAt: "2023-06-01T09:10:08Z",
      content:
        "When it comes to the life of a dairy cow, how much do Canadians really know? It might shock people to learn that most cows in Canada are kept indoors, confined to stalls and tethered at the neck. Whe… [+4932 chars]",
      category: "fitness",
    },

    // Technology news
    {
      id: "76",
      author: null,
      heading: "US, Japan modernising military alliance: Austin",
      description:
        "Tokyo (AFP) June 1, 2023\n\n\n The United States and Japan are working to modernise their military alliance in the face of threats from China, North Korea and Russia, US Defence Secretary Lloyd Austin said Thursday. \n\nAustin is in Tokyo on a brief trip for bilat…",
      url: "https://www.spacewar.com/reports/US_Japan_modernising_military_alliance_Austin_999.html",
      image: "https://www.spxdaily.com/images-hg/us-japan-flag-600-hg.jpg",
      publishedAt: "2023-06-01T11:23:53Z",
      content:
        "US, Japan modernising military alliance: Austinby AFP Staff WritersTokyo (AFP) June 1, 2023\r\nThe United States and Japan are working to modernise their military alliance in the face of threats from C… [+1600 chars]",
      category: "technology",
    },
    {
      id: "77",
      author: null,
      heading:
        "N. Korea will 'correctly' put spy satellite into orbit soon, Kim's sister says",
      description:
        'Seoul (AFP) June 1, 2023\n\n\n North Korean leader Kim Jong Un\'s powerful sister said Thursday that Pyongyang would "correctly" place a spy satellite into orbit soon, a day after their first attempt crashed. \n\nPyongyang has pitched its military satellite as a ne…',
      url: "https://www.spacewar.com/reports/N_Korea_will_correctly_put_spy_satellite_into_orbit_soon_Kims_sister_says_999.html",
      image:
        "https://www.spxdaily.com/images-hg/korea-kim-sister-marker-hg.jpg",
      publishedAt: "2023-06-01T11:23:53Z",
      content:
        "N. Korea will 'correctly' put spy satellite into orbit soon, Kim's sister saysby AFP Staff WritersSeoul (AFP) June 1, 2023\r\nNorth Korean leader Kim Jong Un's powerful sister said Thursday that Pyongy… [+2717 chars]",
      category: "technology",
    },
    {
      id: "78",
      author: null,
      heading:
        "N. Korea will 'correctly' put spy satellite into orbit soon, Kim's sister says",
      description:
        'Seoul (AFP) June 1, 2023\n\n\n North Korean leader Kim Jong Un\'s powerful sister said Thursday that Pyongyang would "correctly" place a spy satellite into orbit soon, a day after their first attempt crashed. \n\nPyongyang has pitched its military satellite as a ne…',
      url: "https://www.spacewar.com/reports/N_Korea_will_correctly_put_spy_satellite_into_orbit_soon_Kims_sister_says_999.html",
      image:
        "https://www.spxdaily.com/images-hg/korea-kim-sister-marker-hg.jpg",
      publishedAt: "2023-06-01T11:23:53Z",
      content:
        "China's Xi, officials call for tighter controls over AIby AFP Staff WritersBeijing (AFP) May 31, 2023\r\nChinese leader Xi Jinping and top officials have called for greater state oversight over artific… [+6175 chars]",
      category: "technology",
    },
    {
      id: "79",
      author: null,
      heading:
        "'Unfortunate' China declined talks says Austin; as Blinken urges China 'open lines'",
      description:
        'Tokyo (AFP) June 1, 2023\n\n Beijing\'s decision to decline a meeting between US and Chinese defence chiefs is "unfortunate", particularly given recent "provocative" Chinese behaviour, US Defense Secretary Lloyd Austin said Thursday. \n\nThe comments come days aft…',
      url: "https://www.spacewar.com/reports/Unfortunate_that_Chinese_counterpart_declined_talks_Austin_999.html",
      image: "https://www.spxdaily.com/images-hg/china-usa-butt-heads-hg.jpg",
      publishedAt: "2023-06-01T11:23:53Z",
      content:
        "'Unfortunate' China declined talks says Austin; as Blinken urges China 'open lines' By W.G. Dunlop, Sara HUSSEINTokyo (AFP) June 1, 2023\r\nBeijing's decision to decline a meeting between US and Chines… [+5526 chars]",
      category: "technology",
    },
    {
      id: "80",
      author: null,
      heading: "US, Japan modernising military alliance: Austin",
      description:
        "Tokyo (AFP) June 1, 2023\n\n\n The United States and Japan are working to modernise their military alliance in the face of threats from China, North Korea and Russia, US Defence Secretary Lloyd Austin said Thursday. \n\nAustin is in Tokyo on a brief trip for bilat…",
      url: "https://www.spacewar.com/reports/US_Japan_modernising_military_alliance_Austin_999.html",
      image: "https://www.spxdaily.com/images-hg/us-japan-flag-600-hg.jpg",
      publishedAt: "2023-06-01T11:23:53Z",
      content:
        "US, Japan modernising military alliance: Austinby AFP Staff WritersTokyo (AFP) June 1, 2023\r\nThe United States and Japan are working to modernise their military alliance in the face of threats from C… [+1600 chars]",
      category: "technology",
    },
    {
      id: "81",
      author: "Preslav Mladenov",
      heading:
        "Grab Samsung's stylish ANC, AKG-powered Galaxy Buds Live at an exceptional discount from Amazon",
      description:
        "The earbuds offer great sound, nice ANC, and can now be yours for even less",
      url: "https://www.phonearena.com/news/galaxy-buds-live-discount-amazon_id147866",
      image:
        "https://m-cdn.phonearena.com/images/article/147866-wide-two_1200/Grab-Samsungs-stylish-ANC-AKG-powered-Galaxy-Buds-Live-at-an-exceptional-discount-from-Amazon.jpg",
      publishedAt: "2023-06-01T11:22:32Z",
      content:
        "If you are on the hunt for a new pair of nice-looking and sounding wireless earbuds, then we have great news for you. Amazon is currently offering the amazing Samsung Galaxy Buds Live at a huge disco… [+1906 chars]",
      category: "technology",
    },

    {
      id: "82",
      author: "Godwin Isenyo",
      heading: "Kaduna governor vows to tackle banditry, ABU power outage",
      description:
        "Governor Uba Sani of Kaduna State said his administration is committed to providing logistics support to security agencies in the fight against banditry, terrorism and other related crimes in the state A statement by the governor’s Chief Press Secretary, Muha…",
      url: "https://punchng.com/kaduna-governor-vows-to-tackle-banditry-abu-power-outage/",
      image:
        "https://cdn.punchng.com/wp-content/uploads/2019/07/24000402/Mallam-Uba-Sani.jpg",
      publishedAt: "2023-06-01T11:20:35Z",
      content:
        "Governor Uba Sani of Kaduna State said his administration is committed to providing logistics support to security agencies in the fight against banditry, terrorism and other related crimes in the sta… [+2022 chars]",
      category: "technology",
    },
    {
      id: "83",
      author: null,
      heading:
        "N. Korea will 'correctly' put spy satellite into orbit soon, Kim's sister says",
      description:
        'Seoul (AFP) June 1, 2023\n\n\n North Korean leader Kim Jong Un\'s powerful sister said Thursday that Pyongyang would "correctly" place a spy satellite into orbit soon, a day after their first attempt crashed. \n\nPyongyang has pitched its military satellite as a ne…',
      url: "https://www.spacewar.com/reports/N_Korea_will_correctly_put_spy_satellite_into_orbit_soon_Kims_sister_says_999.html",
      image:
        "https://www.spxdaily.com/images-hg/korea-kim-sister-marker-hg.jpg",
      publishedAt: "2023-06-01T11:23:53Z",
      content:
        "China's Xi, officials call for tighter controls over AIby AFP Staff WritersBeijing (AFP) May 31, 2023\r\nChinese leader Xi Jinping and top officials have called for greater state oversight over artific… [+6175 chars]",
      category: "technology",
    },

    // Home news
    {
      id: "84",
      heading: "Alaya F reveals why she became an actor",
      description:
        "Alaya F opens up about why she decided to become an actor despite studying filmmaking.",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/heres-why-alaya-f-became-an-actor-despite-studying-film-direction/articleshow/100620126.cms",
      image:
        "https://static.toiimg.com/thumb/msid-100620126,width-1070,height-580,imgsize-944596,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-05-30T09:57:12Z",
      content:
        "As long as people are surprised and content with my work, Im happy says Alaya FAlaya F, a young Bollywood actress, is showcasing her acting abilities to the audience.",
      category: "home",
    },
    {
      id: "89",
      author: null,
      heading:
        "N. Korea will 'correctly' put spy satellite into orbit soon, Kim's sister says",
      description:
        'Seoul (AFP) June 1, 2023\n\n\n North Korean leader Kim Jong Un\'s powerful sister said Thursday that Pyongyang would "correctly" place a spy satellite into orbit soon, a day after their first attempt crashed. \n\nPyongyang has pitched its military satellite as a ne…',
      url: "https://www.spacewar.com/reports/N_Korea_will_correctly_put_spy_satellite_into_orbit_soon_Kims_sister_says_999.html",
      image:
        "https://www.spxdaily.com/images-hg/korea-kim-sister-marker-hg.jpg",
      publishedAt: "2023-06-01T11:23:53Z",
      content:
        "China's Xi, officials call for tighter controls over AIby AFP Staff WritersBeijing (AFP) May 31, 2023\r\nChinese leader Xi Jinping and top officials have called for greater state oversight over artific… [+6175 chars]",
      category: "home",
    },
    {
      id: "85",
      heading:
        "Ignore any lofty claims about the Bollywood hit The Kerala Story: this film will only incite hatred against Muslims | Asim Ali",
      description:
        "The controversial film championed by the BJP is an Islamophobic fantasyTwo weeks after I was born in the curfewed town of Aligarh, in Uttar Pradesh, the Aligarh riots of 1990 broke out. What began as skirmishes exploded into widespread bloodletting after thre…",
      url: "https://www.theguardian.com/commentisfree/2023/jun/01/bollywood-hit-kerala-story-islamophobic-bjp",
      image:
        "https://i.guim.co.uk/img/media/96410f45f554697fd8777fcb870157a462beb321/0_282_4236_2542/master/4236.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=594317a3a4f51c29fdc403fd87c13185",
      publishedAt: "2023-06-01T08:59:45Z",
      content:
        "Two weeks after I was born in the curfewed town of Aligarh, in Uttar Pradesh, the Aligarh riots of 1990 broke out. What began as skirmishes exploded into widespread bloodletting after three leading H… [+5225 chars]",
      category: "home",
    },
    {
      id: "86",
      heading: "Neom, Telfaz11 Set Nine Project Partnership",
      description:
        "Neom, the Saudi Arabian region that is aiming to become a major film and TV production hub, and prolific Middle East-focused studio Telfaz11, have revealed a partnership. The deal will see the creation of up to nine television and film productions over the ne…",
      url: "https://variety.com/2023/film/global/neom-telfaz11-partnership-1235630163/",
      image:
        "https://variety.com/wp-content/uploads/2023/06/Wael-Abumansour-Ibraheem-Alkhairallah-Wayne-Borg-Alaa-Fadan-Dania-Ismail-Mohammed-Alhamoud.jpg?w=1000&h=563&crop=1",
      publishedAt: "2023-06-01T08:20:41Z",
      content:
        "Neom, the Saudi Arabian region that is aiming to become a major film and TV production hub, and prolific Middle East-focused studio Telfaz11, have revealed a partnership.\r\nThe deal will see the creat… [+2186 chars]",
      category: "home",
    },
    {
      id: "87",
      heading:
        "As World Keeps Eye On WGA Strike, Indian Writers’ Survey Reveals Issues With Pay Levels, Credits & Training",
      description:
        "EXCLUSIVE: With the Writers Guild of America (WGA) strike entering its second month in the U.S., writers and filmmakers around the world are taking note of how these issues play out in their own countries. In India, home to several big film industries and an …",
      url: "https://deadline.com/2023/05/india-writers-survey-wga-strike-tulsea-ormax-media-1235383401/",
      image:
        "https://deadline.com/wp-content/uploads/2023/05/GettyImages-1249663413.jpg?w=1024",
      publishedAt: "2023-06-01T06:30:00Z",
      content:
        "EXCLUSIVE: With the Writers Guild of America (WGA) strike entering its second month in the U.S., writers and filmmakers around the world are taking note of how these issues play out in their own coun… [+4534 chars]",
      category: "home",
    },
    {
      id: "88",
      author: "Godwin Isenyo",
      heading: "Kaduna governor vows to tackle banditry, ABU power outage",
      description:
        "Governor Uba Sani of Kaduna State said his administration is committed to providing logistics support to security agencies in the fight against banditry, terrorism and other related crimes in the state A statement by the governor’s Chief Press Secretary, Muha…",
      url: "https://punchng.com/kaduna-governor-vows-to-tackle-banditry-abu-power-outage/",
      image:
        "https://cdn.punchng.com/wp-content/uploads/2019/07/24000402/Mallam-Uba-Sani.jpg",
      publishedAt: "2023-06-01T11:20:35Z",
      content:
        "Governor Uba Sani of Kaduna State said his administration is committed to providing logistics support to security agencies in the fight against banditry, terrorism and other related crimes in the sta… [+2022 chars]",
      category: "home",
    },
    {
      id: "90",
      author: null,
      heading:
        "N. Korea will 'correctly' put spy satellite into orbit soon, Kim's sister says",
      description:
        'Seoul (AFP) June 1, 2023\n\n\n North Korean leader Kim Jong Un\'s powerful sister said Thursday that Pyongyang would "correctly" place a spy satellite into orbit soon, a day after their first attempt crashed. \n\nPyongyang has pitched its military satellite as a ne…',
      url: "https://www.spacewar.com/reports/N_Korea_will_correctly_put_spy_satellite_into_orbit_soon_Kims_sister_says_999.html",
      image:
        "https://www.spxdaily.com/images-hg/korea-kim-sister-marker-hg.jpg",
      publishedAt: "2023-06-01T11:23:53Z",
      content:
        "China's Xi, officials call for tighter controls over AIby AFP Staff WritersBeijing (AFP) May 31, 2023\r\nChinese leader Xi Jinping and top officials have called for greater state oversight over artific… [+6175 chars]",
      category: "home",
    },
    {
      id: "91",
      heading:
        "As World Keeps Eye On WGA Strike, Indian Writers’ Survey Reveals Issues With Pay Levels, Credits & Training",
      description:
        "EXCLUSIVE: With the Writers Guild of America (WGA) strike entering its second month in the U.S., writers and filmmakers around the world are taking note of how these issues play out in their own countries.",
      url: "https://deadline.com/2023/05/india-writers-survey-wga-strike-tulsea-ormax-media-1235383401/",
      image:
        "https://deadline.com/wp-content/uploads/2023/05/GettyImages-1249663413.jpg?w=1024",
      publishedAt: "2023-06-01T06:30:00Z",
      content:
        "With the Writers Guild of America (WGA) strike in its second month, the global writing and filmmaking community is paying attention to the broader implications of the standoff. In India, a nation home to multiple significant film industries, a survey reveals issues with pay, credits, and training for writers. This offers a glimpse into the challenges faced by writers internationally, highlighting the need for fair compensation and recognition.",
      category: "home",
    },
    {
      author: null,
      id: "92",
      heading: "3 smart ways Seattle is at the forefront of reuse",
      description:
        "The city and Washington state’s support of closed loop economic models through public-private partnerships and grant programs is inspiring entrepreneurs throughout the region.",
      url: "https://www.greenbiz.com/article/3-smart-ways-seattle-forefront-reuse",
      image:
        "https://www.greenbiz.com/sites/default/files/styles/og_image_1200x630/public/2023-05/shutterstock_161412803.jpg?itok=l4jysjyY",
      publishedAt: "2023-06-01T11:00:00Z",
      content:
        "Seattle is one of a growing number of cities globally embracing the principles of a circular economy one that prioritizes the reduction of wasteful consumption habits and lifts up models centered on … [+6681 chars]",
      category: "home",
    },
  ]);

  return (
    <div>
      <Store.Provider value={[Data, setData]}>
        {/* Now all the components will get access to this data as props */}
        {props.children}
      </Store.Provider>
    </div>
  );
};

export default JsonStorage;
