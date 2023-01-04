const defaultCountry = (): string => {
  const date: string = new Date().toString()
  const regex = /\b\w+\sStandard\sTime/

  const result: RegExpMatchArray | null = date.match(regex)
  if (!result) return 'Londres'

  const country = result[0].replace('Standard Time', '')
  return country
}

export default defaultCountry