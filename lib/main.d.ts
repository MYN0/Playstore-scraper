export type ArrayMetadata = {

    /** 
    * @default  
    * @Property ★ Shows the title/name of the app.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You also can modify the String value accordingly to you needs.
     * @returns {string}
     */
    title?: String
   
    /** 
    * @default  
    * @Property ★ Shows the description/about of the app.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You also can slice the description text if the text exceeds the limit.
     * @returns {string}
     */
    description?: String

    /** 
    * @default  
    * @Property ★ Shows the total ratings/reviews of the app.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a Number, So you cannot do much with the property.
     * @returns {Number}
     */
    reviews?: Number

        /** 
    * @default  
    * @Property ★ Returns the a trailer link of the app
     * @throws {Error} Will return null if their is any error while fetching the metadata/Returns null if the app doesn't have any trailers
     * @This property is a String, You can change the String value accordingly to as your needs.
     * @returns {String}
     */

    trailer?: String

            /** 
    * @default 
    * @Property ★ Shows the app last updated date.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You can change the String value accordingly to as your needs.
     * @returns {String}
     */

    updated?: String

     /** 
    * @default 
    * @Property ★ Returns the app playstore's id.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You can change the String value accordingly to as your needs.
     * @returns {String}
     */

    id?: String;

 /** 
    * @default 
    * @Property ★ Returns the app playstore's url.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You can change the String value accordingly to as your needs.
     * @returns {String}
     */

    url? : String

     /** 
    * @default 
    * @Property ★ Shows the current version of the app.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You can change the String value accordingly to as your needs.
     * @returns {String}
     */

    current_version?: String

         /** 
    * @default 
    * @Property ★ Shows the needed required version of the app.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You can change the String value accordingly to as your needs.
     * @returns {String}
     */
    required_versions? : String


         /** 
    * @default 
    * @Property ★ Shows the content ratings of the app.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You can change the String value accordingly to as your needs.
     * @returns {String}
     */

    content_ratings?: String

             /** 
    * @default 
    * @Property ★ Shows the in app purchase item prices of the app.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You can change the String value accordingly to as your needs.
     * @returns {String}
     */

    products?: String

         /** 
    * @default 
    * @Property ★ Returns the developer name of the app.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You can change the String value accordingly to as your needs.
     * @returns {String}
     */
    developer?: String

    /** 
    * @default 
    * @Property ★ Returns the logo url of the app.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You can change the String value accordingly to as your needs.
     * @returns {String}
     */
    logo? : String;

    /** 
    * @default 
    * @Property ★ Shows the genre of the app.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You can change the String value accordingly to as your needs.
     * @returns {String}
     */
    genre?: String;

    /** 
    * @default 
    * @Property ★ Shows the total listed ratings of the app.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You can change the String value accordingly to as your needs.
     * @returns {String}
     */
    total_ratings?: String

     /** 
    * @default 
    * @Property ★ Returns the screenshots of the app.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a Array, So you map the images accordingly to your needs.
     * @returns {Array}
     */

      screenshots? : []

         /** 
    * @default 
    * @Property ★ Shows the total installs of the app.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You can change the String value accordingly to as your needs.
     * @returns {String}
     */
      total_installs?: String
    /** 
    * @default 
    * @Property ★ Returns the needed permissions of the app.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a String, You can change the String value accordingly to as your needs.
     * @returns {String}
     */

    needed_permissions?: String;


    /** 
    * @default 
    * @Property ★ Returns whether the app is free or not.
     * @throws {Error} Will return null if their is any error while fetching the metadata.
     * @This property is a Boolean, So you cannot do much with that.
     * @returns {Boolean}
     */
    
     IsFree?: Boolean

  };

  /**
 * @default
 * @function ★ Get information on a playstore app NO API KEY NEEDED! 
 * @param query Specify a query to fetch the data, Example - Instagram, Discord, YouTube, League of Legends, etc
  * @throws {Error} Throws an error if the specified query is invalid!
  * @PS You need to use "await" everytime when you use this function, And if you don't use await then it will return a undefined everytime.
  * @Usage ```await``` getApp("app-name") Returns the metadata of the app/You can also choose a specific option like if you want only the name/title of the app then choose the option "title"
  @SampleExample
```
    // CommonJS
    const { getApp } = require("@myno_21/playstore-scraper");

    // EcmaScript/ESM
    import { getApp } from "@myno_21/playstore-scraper";
    
    const data = await getApp("discord");
    console.log(data);
    // Result
// {
//   title: 'Discord - Chat, Talk & Hangout',
//   description: 'Discord is where you can make a home for your communities and friends. Where you can stay close and have fun over text, voice, and video chat. Whether you’re part of a school club, a gaming group, a worldwide art community, or just a handful of friends who want to spend time together, Discord makes it easy to talk every day, and hang out more often.CREATE AN INVITE-ONLY PLACE•  Discord servers are organized into topic-based channels where you can collaborate, share, have meetings, or just talk to friends about your day without clogging up a group chat.•  Send a message directly to a friend or call them up with our voice chat feature•  Voice channels make hanging out easy. Got a free moment? Grab a seat in a voice channel so friends can see you’re around and pop in to talk without having to call. You can even watch videos together!•  Reliable tech for staying close with friends. Low-latency voice and video chat feels like you’re meeting in the same room.•  Easily talk with friends while gaming and steam roll the competition.•  Be a meme messenger with easy image sharing STAY CLOSE WITH TEXT, VIDEO, AND VOICE CHAT•  Wave hello over video, watch friends stream their games, share stories over voice calls, or gather up and have a drawing session with screen share.•  Snap a photo and turn it into your own custom emojis and share them with friends.•  Share anything from funny videos and stories to your latest group photos, and pin your favorites to remember those moments later.•  Hang out in group channels or talk privately with direct messages•  Zoom through convos with friends using topic-specific channels! FOR A FEW OR A FANDOM•  Custom moderation tools and permission levels can group up your friends or teams, organize meetings for your local book club, or bring together music fans from around the world.•  Create moderators, give special members access to private channels, and much more.',
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
//   total_ratings: '4,309,609 ',
//   needed_permissions: 'View details'
// }
```
  @return {any}

*/


export function getApp(query?: String):  ArrayMetadata