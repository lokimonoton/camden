const conf = {};
conf.environment = 'development';
conf.sequelize = {};
// conf.sequelize.username = 'root';
// conf.sequelize.password = '';
// conf.sequelize.database = 'sequelize_train';
// conf.sequelize.host = '127.0.0.1';
conf.sequelize.dialect= 'sqlite';
conf.sequelize.storage = 'app.db';
// conf.sequelize.port = 3306;
conf.sequelize.define = {
  charset: 'utf8mb4',
    dialectOptions: {
    collate: 'utf8mb4_unicode_ci'
  },
  dialect:"sqlite"
}
conf.ROUND_SALT = 8;
module.exports = conf;