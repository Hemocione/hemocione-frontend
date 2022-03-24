import { GoogleSpreadsheet } from 'google-spreadsheet'

const getSheetsData = async () => {
  const sheets = new GoogleSpreadsheet(process.env.SHEETS_ID)
  await sheets.useApiKey(process.env.SHEETS_API_KEY)
  await sheets.loadInfo()
  const sheet = sheets.sheetsByIndex[0]
  await sheet.loadCells('A2:H2')

  return (
    {
      bigNumbers: {
        aviao: sheet.getCellByA1('A2').value,
        bolsas: sheet.getCellByA1('D2').value,
        carros: sheet.getCellByA1('C2').value,
        onibus: sheet.getCellByA1('B2').value,
        pessoas: sheet.getCellByA1('E2').value,
      },
      speakDonator: [
        sheet.getCellByA1('F2').value, 
        sheet.getCellByA1('G2').value,
        sheet.getCellByA1('H2').value,
      ],
    }
  )
}

export { getSheetsData }
