

export const RecentActivityHeaders = [
    'Date',
    'Description',
    'Type',
    'Amount',
    'Status'
]
export const transactionData = [
  // Transfers
  {
    id: 'TXN001',
    date: '2025-12-12',
    description: 'Transfer to Friend',
    type: 'Debit',
    amount: '-$500.00',
    currency: 'USD',
    status: 'Completed',
    receiver: 'henry smith',
    account: '**** **** **** 1234',
    paymentMethod: 'Bank Transfer',
    category: 'Transfer',
  },
  {
    id: 'TXN002',
    date: '2025-12-11',
    description: 'Transfer from Savings',
    type: 'Credit',
    amount: '+$2,000.00',
    currency: 'USD',
    status: 'Completed',
    sender: 'My Savings',
    receiver: 'Mubarak M Hamisu',
    account: '**** **** **** 5678',
    paymentMethod: 'Internal Transfer',
    category: 'Transfer',
  },

  // Payments (Bills, Shopping)
  {
    id: 'TXN003',
    date: '2025-12-10',
    description: 'Electricity Bill',
    type: 'Debit',
    amount: '-$120.00',
    currency: 'USD',
    status: 'Completed',
    receiver: 'PowerGrid',
    paymentMethod: 'Auto Debit',
    category: 'Payment',
  },
  {
    id: 'TXN004',
    date: '2025-12-09',
    description: 'Online Shopping',
    type: 'Debit',
    amount: '-$250.00',
    currency: 'USD',
    status: 'Completed',
    receiver: 'Amazon NG',
    paymentMethod: 'Credit Card',
    category: 'Payment',
  },

  // Credits / Deposits
  {
    id: 'TXN005',
    date: '2025-12-08',
    description: 'Salary',
    type: 'Credit',
    amount: '+$3,000.00',
    currency: 'USD',
    status: 'Completed',
    sender: 'Tech Solutions Ltd',
    receiver: 'My Account',
    paymentMethod: 'Direct Deposit',
    category: 'Deposit',
  },
  {
    id: 'TXN006',
    date: '2025-12-07',
    description: 'Refund',
    type: 'Credit',
    amount: '+$50.00',
    currency: 'USD',
    status: 'Completed',
    sender: 'Amazon NG',
    receiver: 'My Account',
    paymentMethod: 'PayPal',
    category: 'Deposit',
  },

  // Fees / Charges
  {
    id: 'TXN007',
    date: '2025-12-06',
    description: 'Monthly Account Fee',
    type: 'Debit',
    amount: '-$10.00',
    currency: 'USD',
    status: 'Completed',
    paymentMethod: 'Bank Fee',
    category: 'Fee',
  },
  {
    id: 'TXN008',
    date: '2025-12-05',
    description: 'Transaction Fee',
    type: 'Debit',
    amount: '-$1.00',
    currency: 'USD',
    status: 'Completed',
    paymentMethod: 'Bank Fee',
    category: 'Fee',
  },

  // Pending or Failed Transactions
  {
    id: 'TXN009',
    date: '2025-12-04',
    description: 'Transfer to Mike',
    type: 'Debit',
    amount: '-$200.00',
    currency: 'USD',
    status: 'Pending',
    receiver: 'Mike Johnson',
    account: '**** **** **** 7890',
    paymentMethod: 'Zelle',
    category: 'Transfer',
  },
  {
    id: 'TXN010',
    date: '2025-12-03',
    description: 'Water Bill',
    type: 'Debit',
    amount: '-$60.00',
    currency: 'USD',
    status: 'Failed',
    receiver: 'Water Company',
    paymentMethod: 'Auto Debit',
    category: 'Payment',
  },
];


/*type ARH*/


export const TransferHeaders = [
    'Date',
    'Recipient',
    'Account',
    'Amount',
    'Status'
]