export class Person { 
  constructor(
    public name: string,
    public lastname: string,
    public surname: string,
    public secondSurname: string,
    public marriedSurname: string,
    public birth: string,
    public religion: string,
    public email: Array<string>,
    public gender: string,
    public address: object,
    public department: string,
    public municipality: string,
    public zone: string,
    public residential: string,
    public avenue: string,
    public street: string,
    public sector: string,
    public addressComplete: string,
    public number: number,
    public phones: object,
    public cellphone: number,
    public house: number,
    public other: Array<number>,
    public status: string
){}
}