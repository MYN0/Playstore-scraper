# Playstore scraper! [![Version](https://img.shields.io/npm/v/@myno_21/playstore-scraper.svg)](https://www.npmjs.com/package/@myno_21/playstore-scraper)

[![@myno_21/time](https://nodei.co/npm/@myno_21/playstore-scraper.png?downloads=true&downloadRank=true)](http://npmjs.org/package/@myno_21/playstore-scraper)

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](http://npmjs.org/package/@myno_21/playstore-scraper)

> 🎟️ Scrape information of a playstore app without having any sort of API key!

# Installation 🪄

```bash
$ npm install @myno_21/playstore-scraper
```

# SampleExample 📣

```js
// CommonJS
const { getApp } = require("@myno_21/playstore-scraper");

//ECMAScript/ESM
import { getApp } from "@myno_21/playstore-scraper";

async function scraper(query) {
  const data = await getApp(query); // Make sure to use the async/await or else it'll return undefined
  console.log(data);
}
data("discord");

// Results
// {
//   title: 'Discord - Chat, Talk & Hangout',
//   description: 'Discord is where you can make a home for your communities and friends. Where you can stay close and have fun over text, voice, and video chat. Whether you’re part of a school club, a gaming group, a worldwide art community, or just a handful of friends who want to spend time together, Discord makes it easy to talk every day, and hang out more often.CREATE AN INVITE-ONLY PLACE•  Discord servers are organized into topic-based channels where you can collaborate, share, have meetings, or just talk to friends about your day without clogging up a group chat.•  Send a message directly to a friend or call them up with our voice chat feature•  Voice channels make hanging out easy. Got a free moment? Grab a seat in a voice channel so friends can see you’re around and pop in to talk without having to call. You can even watch videos together!•  Reliable tech for staying close with friends. Low-latency voice and video chat feels like you’re meeting in the same room.•  Easily talk with friends while gaming and steam roll the competition.•  Be a meme messenger with easy image sharing STAY CLOSE WITH TEXT, VIDEO, AND VOICE CHAT•  Wave hello over video, watch friends stream their games, share stories over voice calls, or gather up and have a drawing session with screen share.•  Snap a photo and turn it into your own custom emojis and share them with friends.•  Share anything from funny videos and stories to your latest group photos, and pin your favorites to remember those moments later.•  Hang out in group channels or talk privately with direct messages•  Zoom through convos with friends using topic-specific channels! FOR A FEW OR A FANDOM•  Custom moderation tools and permission levels can group up your friends or teams, organize meetings for your local book club, or bring together music fans from around the world.•  Create moderators, give special members access to private channels, and much more.',
//   screenshots: [
//     'https://play-lh.googleusercontent.com/d-q7pPnuPjD8pTamdbF7VCC-rjZTBAOreMk7TIT8kjOt7us8pY32-g4I8DRYhdzA2iHu=w720-h310',
//     'https://play-lh.googleusercontent.com/85W8SSlu7z62P5uqatGOxdhX8JJJ7c_p11I_982xaPxMptsE9z4QeZr78Ua_E7A8OQ=w720-h310',
//     'https://play-lh.googleusercontent.com/2PVGkQ_E2JRC4c_E2owwQTupVtqAl5Yn1yoka_7Xa-WT4pkz4ku1kzCQQrnzqW1Tkg=w720-h310'
//   ],
//   reviews: '4.5',
//   trailer: 'https://www.youtube.com/embed/XoCvEM0Ah6E?ps=play&vq=large&rel=0&autohide=1&showinfo=0',
//   total_installs: '100,000,000+',
//   updated: 'April 21, 2022',
//   id: '/store/apps/details?id=com.discord',
//   url: 'https://play.google.com/store/apps/details?id=com.discord&hl=en&gl=US',
//   current_version: '123.7 - Stable',
//   required_versions: '5.0 and up',
//   content_ratings: 'TeenLearn more',
//   products: '$4.99 - $274.94 per item',
//   developer: 'Discord Inc.',
//   logo: 'https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ=s180',
//   genre: 'Communication',
//   IsFree: true,
//   total_ratings: '4,310,080 ',
//   needed_permissions: 'View details'
// }
```

## 📝 Important

#### You're not getting your response?, Well if that's the case then you need to wait for a while because while scraping [Google Play](https://play.google.com/store?hl=en&gl=US) their needs to be a delay. There are also highly chances of getting null as the response if you're too quick then their will be a 503 response status then it'll start confirming whether you're a human or not. So please make sure to make a delay after a making request.

#### Thanks

## ★ Previous Packages

- [@myno_21/time](https://www.npmjs.com/package/@myno_21/formatted-duration) _(Get a unix timestamps, timezone, humanreadable-time without struggling a bit!)_

- [@myno_21/formatted-duration](https://www.npmjs.com/package/@myno_21/formatted-duration) _(Format seconds/milliseconds to a date/duration without struggling a bit!)_

- [@myno_21/password-generator](https://www.npmjs.com/package/@myno_21/password-generator)_(Generates random passwords with some really cool options such as limit,includes etc.)_
