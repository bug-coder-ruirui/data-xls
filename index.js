
/**
 * 数据转excel文件下载，伪excel xls
 * @param {Object[]} data 需要进行导出的数据
 * @param {Object} map 导出数据的字典
 * @param {string} name 导出文件名称
 */

const downloadExcel = function(data,map,name){
    let str = `<tr><td colspan="${Object.keys(map).length}" style="text-align:center;font-size:20px;">${name}</td></tr><tr>`
    for(let key in map){
        str += `<td style="font-size:16px;">${map[key]}</td>`
    }
    str += "</tr>"
    data.map((item)=>{
        str += '<tr>'
        for(let key in map){
            str += `<td>${item[key]}</td>`
        }
        str += '</tr>'
    })
    const tableHtml = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
    xmlns:x="urn:schemas-microsoft-com:office:excel" 
    xmlns="http://www.w3.org/TR/REC-html40">
    <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
      <x:Name>${name || 'sheet1'}</x:Name>
      <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
      </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
      <meta charset="UTF-8">
      </head><body><table>${str}</table></body></html>`
    const excelBlob = new Blob([tableHtml], {type: 'application/vnd.ms-excel'});

    const a = document.createElement('a')
    const url = URL.createObjectURL(excelBlob)
    a.download = name || '统计表' + '.xls'
    a.href = url
    document.body.appendChild(a)
    a.click()
    URL.revokeObjectURL(url)

    document.body.removeChild(a)
}

export default downloadExcel