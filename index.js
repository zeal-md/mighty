const bot = require(Jazzy '/lib/smd')
const { VERSION } = require( _dirname + '/config')

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
