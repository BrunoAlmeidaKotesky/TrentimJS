import { capitalizer, strFormatter, objFormatter } from '../utils/stringHelpers';

describe('String functions helpers tests', () => {
  it('Should capititalize any string', () => {
    expect(capitalizer('bruno kot')).toBe('Bruno Kot');
  });
  //Strings naming convertions tests:
  it('Should apply capitalizer(), then remove whitespaces, remove special chars and remove accents', () => {
    //Erro segunda coluna manten uma letra maiscula se existir após o começo
    expect(strFormatter(' bãd Ob*jéct%;')).toBe('BadObject');
  });

  it('Should format to camelCase', () => {
    expect(strFormatter(' bãd Ob*ject%;', 'camelCase')).toBe('badObject');
  });

  it('Should format to underscore', () => {
    expect(strFormatter('  bãd Ob*ject%;', 'underscore')).toBe('bad_object');
  });

  it('Should format to lowercase', () => {
    expect(strFormatter(' bãd Ob*jec t%;', 'lowercase')).toBe('badobject');
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
