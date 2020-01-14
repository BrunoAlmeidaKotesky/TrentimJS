import { capitalizer, strFormatter, objFormatter } from '../utils/stringHelpers';

describe('String functions helpers tests', () => {
  it('Should capititalize any string', () => {
    expect(capitalizer('bruno')).toBe('Bruno');
  });
  //Strings naming convertions tests:
  it('Should apply capitalizer(), then remove whitespaces, remove special chars and remove accents', () => {
    expect(strFormatter(' brãI Né')).toBe('BraINe');
  });

  it('Should format to camelCase', ()=>{
    expect(strFormatter(' brãI Né', 'camelCase')).toBe('braINe');
  });

  it('Should format to underscore', ()=>{
    expect(strFormatter(' brãI Né', 'underscore')).toBe('braI_ne');
  });

  it('Should format to lowercase', ()=>{
    expect(strFormatter(' brãI Né', 'lowercase')).toBe('braI ne');
  });
});


describe('Object function: @objFormatter test', () => {
  it('Should rename all objects key names to CamelCase without specialCharacters', () => {
    const testDate = new Date('13/01/2020');
    const exArrObj = [{ ' gross sale  ': 200, ' data de separação': testDate }];

    expect(objFormatter(exArrObj)).toStrictEqual([{ GrossSale: 200, DataDeSeparacao: testDate }]);
  });
});
