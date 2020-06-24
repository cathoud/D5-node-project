import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
    // TODO
  }

  public getBalance(): Balance {
    const currentBalance = this.transactions.reduce(
      (balance, transaction) => {
        const newBalance = balance;
        newBalance[transaction.type] += transaction.value;
        return newBalance;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    currentBalance.total = currentBalance.income - currentBalance.outcome;
    // TODO
    return currentBalance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, type, value });

    this.transactions.push(transaction);

    return transaction;
    // TODO
  }
}

export default TransactionsRepository;
