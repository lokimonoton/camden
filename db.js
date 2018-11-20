const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  operatorsAliases: false,
logging:false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: 'app.db'
});

// Or you can simply use a connection uri
async function insert(parcel, assessed_tax, total_due, amount_due, tax_year, activity_description, amount, activity_date, payment_date, transaction){
const TaxMaricopa=require('./database/models/tax_maricopa')(sequelize,Sequelize)
const bugil =await TaxMaricopa.findOrCreate({where:{parcel:parcel,
assessed_tax:assessed_tax,
total_due:total_due,
amount_due:amount_due,
tax_year:tax_year,
activity_description:activity_description,
amount:amount,
activity_date:activity_date,
payment_date:payment_date,
transaction:transaction}})
return bugil
}
async function cariSemua(){
    const TaxMaricopa=require('./database/models/tax_maricopa')(sequelize,Sequelize)
    const bugil =await TaxMaricopa.findAll();
    return bugil
}
async function hapus(id){
    const TaxMaricopa=require('./database/models/tax_maricopa')(sequelize,Sequelize)
    const bugil =await TaxMaricopa.destroy({where:{id:id}});
    return bugil
}
module.exports={insert:insert,cariSemua:cariSemua,hapus:hapus}
// (async ()=>{
//     const haha=await cariSemua()
//     console.log(haha)
// })()