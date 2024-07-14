const bot = require(__kaviya + '/lib/smd')
const { VERSION } = require(__kaviya + '/config')

const start = async () => {
    Debug.info(`Suhail ${VERSION}`)
  try {
    await bot.init()
    bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
