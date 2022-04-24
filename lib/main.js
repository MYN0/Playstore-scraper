const cheerio = require("cheerio").default;
const req = require("html-get");

/**
 *
 * @param {String} query
    @return  
 */
async function getApp(query) {

    if (!query) throw new Error(`No query provided, You need to specify a query!`);
    var ScreenShotsArray = [];
    const adata = await req(`https://play.google.com/store/search?q=${query}&c=apps&hl=en&gl=US`, { getBrowserless: true });
    // https://play.google.com/store/search?q=discord&c=apps&hl=en&gl=US
    let v$ = await cheerio.load(adata.html);
    const err = await v$("p[class='fTwQgc']").text()
    if (err) throw new Error(`No result found, There was no result found for the given query ${query}`);
    const main = await v$('div[class="Ktdaqe  "]').map((i, data) => {
        return v$(data).find('a[class="JC71ub"]').attr("href")
    }).get();
    const data = await req(`https://play.google.com${main.join(" ")}&hl=en&gl=US`, { getBrowserless: true });
    let $ = await cheerio.load(data.html);
    var mappedata = await $('div[class="IxB2fe"] > div[class="hAyfc"] > span[class="htlgb"]').map((i, el) => {
        return $(el).text()
    }).get()
    var mainSs = $('div[class="SgoUSc"] > div[jsname="WR0adb"] > img').attr("src")
    await ScreenShotsArray.push(mainSs || null || undefined)
    var MappedSS = await $('button[class="Q4vdJd"] > img').each((i, el) => {
        return ScreenShotsArray.push($(el).attr("src") || null)
    }).get();
    const SplicedArray = ScreenShotsArray.splice(0, 3);
    var title = await $(`h1[class='AHFaub']`).text()
    var description = await $('div[jsname= "sngebd"]').text()
    var reviews = await $('div[class="BHMmbe"]').text()
    var trailer = await $("div[class='TdqJUe'] > button[class='MMZjL lgooh']").attr("data-trailer-url") || null;
    var updated = await $('div[class="IxB2fe"] > div[class="hAyfc"] > span[class="htlgb"]').children().first().text();
    var url = `https://play.google.com${main.join(" ")}&hl=en&gl=US`
    // mappedata[2] || null
    var total_installs = mappedata[2] || null
    var id = `${main.join(" ")}`
    var current_version = mappedata[3] || null
    var required_versions = mappedata[4] || null
    var content_ratings = mappedata[5] || null
    var screenshots = SplicedArray;
    var products = mappedata[7] || null;
    var developer = mappedata[8]
    var logo = await $(`img[class="T75of sHb2Xb"]`).attr("src")
    var genre = await $('a[itemprop = "genre"]').text()
    var total_ratings = await $('span[class="EymY4b"]').text().replace("total", "") || null
    var needed_permissions = await $('a[jsname="Hly47e"]').text() || null;
    var IsFree = await Boolean($('span[class="oocvOe"] > button').attr("data-is-free") || false);

    return {
        title,
        description,
        screenshots,
        reviews,
        trailer,
        total_installs,
        updated,
        id,
        url,
        current_version,
        required_versions,
        content_ratings,
        products,
        developer,
        logo,
        genre,
        IsFree,
        total_installs,
        total_ratings,
        needed_permissions
    }
}





module.exports = { getApp }