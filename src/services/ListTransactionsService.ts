import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface ListTransactions {
  transactions: Transaction[];
  balance: Balance;
}

class ListTransactionsService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): ListTransactions {
    const transactions = this.transactionsRepository.all();
    const balance = this.transactionsRepository.getBalance();
    const listTransactions = {
      transactions,
      balance,
    };
    return listTransactions;
  }
}

export default ListTransactionsService;
