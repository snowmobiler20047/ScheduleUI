export class Lesson {
    constructor(
        public lessonId: string,
        public lessonType: string,
        public status: string,
        public students: Set<string>,
        public accountId: string,
        public lessonLink: string,
    ){ }
}