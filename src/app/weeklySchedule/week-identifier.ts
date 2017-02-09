export class WeekIdentifier {
    constructor(
        public weekOfYear: number,
        public year: number,
        public billingDate: Date
    ){ }
}