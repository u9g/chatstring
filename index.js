function init (mineflayer) {
  return inject
}

function inject (bot) {
  bot.on('message', msg => {
    bot.emit('msgstr', msg.toString())
  })
}

module.exports = init
