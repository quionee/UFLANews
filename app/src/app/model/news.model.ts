export class NewsModel {
    constructor(
        public id: number,
        public title: string,
        public likes: number,
        public comments: number,
        public publishedAt: Date,
        public image: string,
        public content: string,
        public id_publisher: number
    ) {}
}