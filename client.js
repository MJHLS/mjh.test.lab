const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: '0vv8moc6',
  dataset: 'diag_imaging',
  useCdn: false,
  apiVersion: '2021-05-04'
})

module.exports = client
