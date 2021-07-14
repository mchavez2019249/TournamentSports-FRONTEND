export class Team{
    constructor(
        public _id: string,
        public name: string,
        public icon: string,
        public points: Number,
        public gf: Number,
        public gc: Number,
        public diference: Number,
        public matches: Number,
        public admin: String,
    ){}
}