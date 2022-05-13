export class Task {
    constructor(
        public id:number,
        public statut:boolean,
        public title:string,
        public date= new Date()
    )
    {}
}