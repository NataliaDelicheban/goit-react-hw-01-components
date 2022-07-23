import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return <table className={css.transactionHistory}>
    <thead className={css.header}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
        <tbody className={css.body}>
            {items.map(({ id, type, amount, currency, }) => {
                return (
                    <tr key={id}>
                        <td className={css.text}>{type}</td>
                        <td className={css.text}>{amount}</td>
                        <td className={css.text}>{currency}</td>
                    </tr>
                );
            })}
    </tbody>
  </table>
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
}