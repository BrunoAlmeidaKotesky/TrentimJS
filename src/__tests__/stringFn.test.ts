import { capitalizer, strFormatter, objFormatter } from '../utils/stringHelpers';

describe('String functions helpers tests', () => {
  it('Should capititalize any string', () => {
    expect(capitalizer('bruno')).toBe('Bruno');
  });
  //Strings naming convertions tests:
  it('Should apply capitalizer(), then remove whitespaces, remove special chars and remove accents', () => {
    expect(strFormatter(' brãI Né')).toBe('BraINe');
  });

  it('Should format to camelCase', () => {
    expect(strFormatter(' brãI Né', 'camelCase')).toBe('braINe');
  });

  it('Should format to underscore', () => {
    expect(strFormatter(' brãI Né', 'underscore')).toBe('brai_ne');
  });

  it('Should format to lowercase', () => {
    expect(strFormatter(' brãI N  é     ', 'lowercase')).toBe('braine');
  });
});

describe('Object function: @objFormatter test', () => {
  const testDate = new Date('13/01/2020');
  const exArrObj = [{ ' gross sale  ': 200, ' data de separação': testDate }];

  it('Should rename all objects key names to CamelCase without specialCharacters', () => {
    expect(objFormatter(exArrObj)).toStrictEqual([{ GrossSale: 200, DataDeSeparacao: testDate }]);
  });
  //Strings naming convertions tests:
  it('Should apply the strFormatter with the paramns to the object', () => {
    expect(objFormatter(exArrObj, 'under_score')).toStrictEqual([{ gross_sale: 200, data_de_separacao: testDate }]);
  });
  it('Should apply the strFormatter with the paramns to the object', () => {
    expect(objFormatter(exArrObj, 'lowercase')).toStrictEqual([{ grosssale: 200, datadeseparacao: testDate }]);
  });
  it('Should apply the strFormatter with the paramns to the object', () => {
    expect(objFormatter(exArrObj, 'camelCase')).toStrictEqual([{ grossSale: 200, dataDeSeparacao: testDate }]);
  });
  it('Should apply the strFormatter with the paramns to the object', () => {
    expect(objFormatter(exArrObj, 'PascalCase')).toStrictEqual([{ GrossSale: 200, DataDeSeparacao: testDate }]);
  });
});
