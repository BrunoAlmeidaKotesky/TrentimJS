import { capitalizer, strFormatter } from '../utils/stringHelpers';

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
