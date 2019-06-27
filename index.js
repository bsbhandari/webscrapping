const cheerio = require('cheerio')
const axios = require('axios')


axios.get('https://www.personalcapital.com/company/news').then((response) => {
  const $ = cheerio.load(response.data);
  const elements = $('.articleRow');
  console.table(elements)
  for (let i = 0; i < elements.length; i++) {
    console.table(i)
    const titleObj = $(elements[i]).find('.articleInfo h3')[0];
    const descObj = $(elements[i]).find('.articleInfo h4')[0];
    if (titleObj) {
      const title = $(titleObj).text()
      console.log(title)
    }
  }
})