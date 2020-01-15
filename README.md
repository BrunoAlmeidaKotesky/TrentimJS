# TrentimJS

**Please, contribute to provide a better documentation**

**Functions**:

```*capitalizer*```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION | DEFAULT |
|-----------|------|----------|-------------|---------|
| text | string | NO | The string to be capitalized | none |

*Example:*
```typescript 
capitalizer('hello world'); //output: "Hello World"
```

```*strFormatter*```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION | DEFAULT |
|-----------|------|----------|-------------|---------|
| str | string | NO | The string to aplly the format rules | none |
| nameConv | NameConventions | YES | The type of how the string will be formatted, see NameConvention type for available options | PascalCase |


*Examples:*
```typescript
  //If dont provide the second nameConv parameter, it'll use the PascalCase formatting.
  strFormatter(' bãd Ob*jÉct%;  '); //output: "BadObject"
  //Providing a second parameter:
  strFormatter(' bãd Ob*jéct%;', 'camelCase'); //output: "badObject"
  strFormatter(' bãd Ob*ject%;', 'underscore'); //output: "bad_object"
  strFormatter(' bãd Ob*jec t%;', 'lowercase'); //output: "badobject"
  strFormatter(' bãd Ob*jÉct%;  ', 'PascalCase'); //output: "BadObject"
```

```*objFormatter*```

| PARAMETER | TYPE | OPTIONAL | DESCRIPTION | DEFAULT |
|-----------|------|----------|-------------|---------|
| obj | object | NO | The collection of objects or a single object, it'll rename all the key names | none |
| nameConv | NameConventions | YES | The type of how the object key name will be formatted, see NameConvention type for available options | PascalCase |

*Examples:*
```typescript
  const testDate = new Date('13/01/2020');
  const exArrObj = [{ ' gross sale  ': 200, ' data de separação': testDate }];
  
  //If dont provide the second nameConv parameter, it'll use the PascalCase formatting.
  objFormatter(exArrObj); //output: [{ GrossSale: 200, DataDeSeparacao: testDate }]
  //Providing a second parameter:
  objFormatter(exArrObj, 'camelCase'); //output: [{ grossSale: 200, dataDeSeparacao: testDate }]
  objFormatter(exArrObj, 'under_score'); //output: [{ gross_sale: 200, data_de_separacao: testDate }]
  objFormatter(exArrObj, 'lowercase'); //output: [{ grosssale: 200, datadeseparacao: testDate }]
  objFormatter(exArrObj, 'PascalCase'); //output: [{ GrossSale: 200, DataDeSeparacao: testDate }]
```

**Types**

| TYPE | OPTIONS  | DESCRIPTION |
|------|----------|-------------|
| NameConventions | 'camelCase' , 'PascalCase' , 'lowercase' , 'under_score' or 'underscore' | The formatting types for strFormatter and objFormatter|


