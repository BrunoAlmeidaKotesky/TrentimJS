import { capitalizer, strFormatter, objFormatter } from '../utils/stringHelpers';

describe('String functions helpers tests', () => {
  it('Should capititalize any string', () => {
    expect(capitalizer('bruno')).toBe('Bruno');
  });

  it('Should apply capitalizer(), then remove whitespaces, remove special chars and remove accents', () => {
    expect(strFormatter(' brãI Né')).toBe('BraINe');
  });
});

describe('Object function: @objFormatter test',()=>{
  it('Should rename all objects key names to CamelCase without specialCharacters',()=>{
    const testDate = new Date('13/01/2020');
    const exArrObj = [{" gross sale  ": 200, " data de separação": testDate}];

    expect(objFormatter(exArrObj)).toStrictEqual([{"GrossSale": 200, "DataDeSeparacao": testDate}]);
  });
});