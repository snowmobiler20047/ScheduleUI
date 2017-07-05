
import {Transaction} from './transaction'

export class Account {
    constructor (
        public accountId: string,
        public name: string,
        public balance: number,
        public transactionHistory: Map<string, Set<Transaction>>
    ) { }

}