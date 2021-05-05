const client = require('./client')
const imageUrlBuilder = require('@sanity/image-url')
const builder = imageUrlBuilder(client)
function urlFor(source, imageWidth = null, imageHeight = null, imageMaxHeight = null, imageFit = null) {
  let url = builder.image(source)
  if (imageWidth) url = url.width(imageWidth)
  if (imageHeight) url = url.height(imageHeight)
  if (imageMaxHeight) url = url.maxHeight(imageMaxHeight)
  if (imageFit) url = url.fit(imageFit)
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
  
  url = urlFor(thumbnail, 480, null, 270, 'crop')
  console.log('3. url with crop: ' + `\n- `, url)

  console.log('4. thumbnail info: ' + `\n- `, thumbnail)
}

main()