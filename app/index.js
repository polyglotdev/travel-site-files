const name = 'Dom'
console.log({ name: name })

const fileSystem = require('fs')
fileSystem.writeFile(__dirname, './slap.js', (error) => {
  error && console.log(error)
  console.log('slap was created')
})

const https = require('https')
const link =
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/04/12185602/Lagotto-Romangolo-Tongue-Out.jpg'
https.get(link, (response) => {
  return response.pipe(
    fileSystem.createWriteStream(__dirname + '/myfashion.jpg'),
  )
})
