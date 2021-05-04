const client = require('./client')
const imageUrlBuilder = require('@sanity/image-url')
const builder = imageUrlBuilder(client)
function urlFor(source, imageWidth = null, imageHeight = null) {
  let url = builder.image(source)
  if (imageWidth) url = url.width(imageWidth)
  if (imageHeight) url = url.height(imageHeight)
  return url.auto('format').url()
}

const main = () => {
  const thumbnail = {
    "_type": "mainImage",
    "asset": {
      "_ref": "image-5c92bc189b9ed414409f2538f91e3fd607ee2cc6-817x371-png",
      "_type": "reference"
    }
  }

  let url = urlFor(thumbnail, 480, 270)
  console.log('1. URL with width & height:' + `\n- `, url)
  url = urlFor(thumbnail)
  console.log('2. url without width or height: ' + `\n- `, url)
  console.log('3. thumbnail info: ' + `\n- `, thumbnail)
}

main()