import { ResultType } from './../models/types';
import { mockArr } from './../models/interfaces';
import { objFormatter, convertArrayToObject } from '../utils/stringHelpers';

describe('Object function: @objFormatter test', () => {
  const testDate = new Date('13/01/2020');
  const exArrObj = [{ ' gross sale  ': 100, ' data de separação': testDate }];

  it('Should rename all objects key names to CamelCase without specialCharacters', () => {
    expect(objFormatter(exArrObj)).toStrictEqual([{ GrossSale: 100, DataDeSeparacao: testDate }]);
  });
  //Strings naming convertions tests:
  it('Should apply the strFormatter with the paramns to the object', () => {
    expect(objFormatter(exArrObj, 'under_score')).toStrictEqual([{ gross_sale: 100, data_de_separacao: testDate }]);
  });
  it('Should apply the strFormatter with the paramns to the object', () => {
    expect(objFormatter(exArrObj, 'lowercase')).toStrictEqual([{ grosssale: 100, datadeseparacao: testDate }]);
  });
  it('Should apply the strFormatter with the paramns to the object', () => {
    expect(objFormatter(exArrObj, 'camelCase')).toStrictEqual([{ grossSale: 100, dataDeSeparacao: testDate }]);
  });
  it('Should apply the strFormatter with the paramns to the object', () => {
    expect(objFormatter(exArrObj, 'PascalCase')).toStrictEqual([{ GrossSale: 100, DataDeSeparacao: testDate }]);
  });
});

describe('Testing function: convertArrayToObject in a typescript enviroment', () => {
  let mockArray: mockArr[] = [
    { ID: 1, Date: new Date('01/01/2020'), name: 'Bruno' },
    { ID: 2, Date: new Date('01/01/2020'), name: 'Jony' },
    { ID: 3, Date: new Date('01/01/2020'), name: 'Gustavo' },
  ];
  it('Should converts an array to an object, using the first object value as its name', () => {
    let result: ResultType<mockArr> = convertArrayToObject(mockArray, 'name');

    expect(result.Bruno).toStrictEqual({ ID: 1, Date: new Date('01/01/2020'), name: 'Bruno' });
    expect(result.Jony).toStrictEqual({ ID: 2, Date: new Date('01/01/2020'), name: 'Jony' });
    expect(result.Gustavo).toStrictEqual({ ID: 3, Date: new Date('01/01/2020'), name: 'Gustavo' });
    expect(result.Bruno.ID).toBe(1);
    expect(result.Jony.ID).toBe(2);
    expect(result.Gustavo.ID).toBe(3);
  });

  it('Should converts an array to an object using the second object valye as its name', () => {
    let result2: ResultType<mockArr> = convertArrayToObject(mockArray, 'ID');
    let firstReturnPosition = result2[1];
    expect(firstReturnPosition).toStrictEqual({ ID: 1, Date: new Date('01/01/2020'), name: 'Bruno' });
    expect(firstReturnPosition.ID).toBe(1);
  });
});
