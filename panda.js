function createFirst(){
const Excel=require('exceljs')
var workbook = new Excel.Workbook();
var worksheet = workbook.addWorksheet('TAX');
worksheet.getCell('A1').value = 'No';
worksheet.getCell('B1').value = 'Parcel';
worksheet.getCell('A2').value = '1';
worksheet.getCell('B2').value = '10128136';
workbook.xlsx.writeFile("excel/sembi.xlsx")
}

async function lihat(){
const Excel=require('exceljs')
var workbook = new Excel.Workbook();
return new Promise(async (resolve,reject)=>{
const haha=await workbook.xlsx.readFile("sembi.xlsx")
// console.log(haha.getWorksheet(1).getRow())
var sampan=[]
haha.getWorksheet(1).eachRow({ includeEmpty: true }, function(row, rowNumber) {
          sampan.push(row.values);
        });
resolve(sampan.pop())

})

}

module.exports={createFirst:createFirst,lihat:lihat}


