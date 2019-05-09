export class Person { 
  constructor(
    public Name: string,
    public Lastname: string,
    public Surname: string,
    public SecondSurname: string,
    public MarriedSurname: string,
    public Birth: string,
    public Religion: string,
    public email: Array<string>,
    public Gender: string,
    public Address: object,
    public Department: string,
    public Municipality: string,
    public Zone: string,
    public Residential: string,
    public Avenue: string,
    public Street: string,
    public Sector: string,
    public AddressComplete: string,
    public Number: number,
    public Phones: object,
    public Cellphone: number,
    public House: number,
    public Other: number,
    public Status: string
){}
}
