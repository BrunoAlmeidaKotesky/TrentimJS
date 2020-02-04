import { ResultType } from './../models/types';
import { mockArr } from './../models/interfaces';
import { objKeyFormatter, convertArrayToObject } from '../utils/objectHelpers';

describe('Object function: @objKeyFormatter test', () => {
  const testDate = new Date('13/01/2020');
  interface IPrevExArrObj {
    ' gross sale  ': number;
    ' data de separação': Date;
  }
  interface IExpectExArrObj {
    GrossSale: number;
    DataDeSeparacao: Date;
  }
  const exArrObj: IPrevExArrObj[] = [{ ' gross sale  ': 100, ' data de separação': testDate }];

  it('Should rename all objects key names to PascalCase without specialCharacters', () => {
    expect(objKeyFormatter<IPrevExArrObj[], IExpectExArrObj[]>(exArrObj)).toStrictEqual([
      { GrossSale: 100, DataDeSeparacao: testDate },
    ]);
  });
  it('Should rename all objects key names to PascalCase without specialCharacters but with SPECIAL CHARACTERS', () => {
    expect(objKeyFormatter([{ 'Obj*': 1, Obj2: 'aa' }], { extraChar: '*' })).toStrictEqual([{ Obj: 1, Obj2: 'aa' }]);
  });
  //Strings naming convertions tests:
  it('Should apply the strFormatter with the paramns to the object', () => {
    expect(objKeyFormatter(exArrObj, { nameConv: 'under_score' })).toStrictEqual([
      { gross_sale: 100, data_de_separacao: testDate },
    ]);
  });
  it('Should apply the strFormatter with the paramns to the object', () => {
    expect(objKeyFormatter(exArrObj, { nameConv: 'lowercase' })).toStrictEqual([
      { grosssale: 100, datadeseparacao: testDate },
    ]);
  });
  it('Should apply the strFormatter with the paramns to the object', () => {
    expect(objKeyFormatter(exArrObj, { nameConv: 'camelCase' })).toStrictEqual([
      { grossSale: 100, dataDeSeparacao: testDate },
    ]);
  });
  it('Should apply the strFormatter with the paramns to the object', () => {
    expect(objKeyFormatter(exArrObj, { nameConv: 'PascalCase' })).toStrictEqual([
      { GrossSale: 100, DataDeSeparacao: testDate },
    ]);
  });
  it('Should apply the strFormatter to different object types', () => {
    const apply = function() {};
    const _apply = (x: string) => x;
    function apply_() {}
    let result1 = objKeyFormatter(apply, { nameConv: 'under_score' });
    let result2 = objKeyFormatter(_apply, { nameConv: 'under_score' });
    let result3 = objKeyFormatter(apply_, { nameConv: 'under_score' });
    //console.log(result1, result2, result3);
  });
  expect(objKeyFormatter([{ 'Obj*': 1, Obj2: 'aa' }], { nameConv: 'PascalCase', extraChar: '*' })).toStrictEqual([
    { Obj: 1, Obj2: 'aa' },
  ]);

  it('Should apply a strong and weak typings to the return objects', () => {
    let retorno1 = objKeyFormatter(exArrObj, { nameConv: 'PascalCase' });
    let retorno2 = objKeyFormatter<IPrevExArrObj[], IExpectExArrObj[]>(exArrObj, { nameConv: 'PascalCase' });
    expect(retorno1).toStrictEqual([{ GrossSale: 100, DataDeSeparacao: testDate }]);
    expect(retorno2).toStrictEqual([{ GrossSale: 100, DataDeSeparacao: testDate }]);
    console.log(retorno1[0].GrossSale);
    console.log(retorno1[0].GrossSale);
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

it('Should convert an array to object, but not all array values exist', () => {});
