const Font = require('ascii-art-font')
const asciify = require('asciify-image')

const link = 'https://w7.pngwing.com/pngs/919/555/png-transparent-super-mario-yoshi-mario-yoshi-super-mario-world-2-yoshi-s-island-paper-mario-the-thousand-year-door-paper-mario-sticker-star-yoshi-leaf-nintendo-video-game.png'

const options = {
  fit:    'box',
  width:  35,
  height: 35
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question(`What's your name? `, name => {
  Font.create(`WELCOME`, 'Doom', function (err, rendered) {
    console.log("\x1b[36m", rendered)
  })

  name = name.split(' ')

  Font.create(`${name[0].toUpperCase()}  !`, 'Doom', function (err, rendered) {
    console.log("\x1b[36m", rendered)
  })

  asciify(link, options, (err, asciified) => {
    if (err) {
      throw err
    }
  
    console.log(asciified);
  })

  readline.close()
})

