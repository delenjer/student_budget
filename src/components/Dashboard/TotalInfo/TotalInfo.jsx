
export const TotalInfo = ({ uah, usd, eur }) => (
  <div className="dashboard__info">
    Available savings:

    <div className="dashboard__row">UAH: <strong>{uah}</strong></div>
    <div className="dashboard__row">USD: <strong>{usd}</strong></div>
    <div className="dashboard__row">EUR: <strong>{eur}</strong></div>
  </div>
);
