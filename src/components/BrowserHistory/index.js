import "./index.css";

const BrowserHistory = (props) => {
  const { deleteHistory, historyItem } = props;
  const { id, timeAccessed, logoUrl, title, domainUrl } = historyItem;

  const onDelete = () => {
    deleteHistory(id);
  };

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="logo" alt="domain logo" />
      <p className="title">{title}</p>
      <div className="list-section">
        <p className="domain">{domainUrl}</p>
        <button
          type="button"
          className="button"
          testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  );
};

export default BrowserHistory;
