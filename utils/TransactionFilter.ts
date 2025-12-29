type TransactionFilter = {
  category?: string
  status?: string
  type?: string
}



export const filterTransactions = (
  data: any[],
  filter?: TransactionFilter
) => {
  if (!filter) return data

  return data.filter(item => {
    if (filter.category &&
        item.category.toLowerCase() !== filter.category.toLowerCase()) {
      return false
    }

    if (filter.status &&
        item.status.toLowerCase() !== filter.status.toLowerCase()) {
      return false
    }

    if (filter.type && item.type !== filter.type) {
      return false
    }

    return true
  })
}
