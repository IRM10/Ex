
export class Family { 
    constructor(
      public id: object,
      public mother: object,
      public father: object,
      public son: [object],
      public attendant: object,
      public seleccionar: string,
      public personaId: string
      ){}
    }