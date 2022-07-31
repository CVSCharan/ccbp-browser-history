import { Component } from "react";

import BrowserHistory from "./components/BrowserHistory";

import "./App.css";

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: "07:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/instagram-img.png",
    title: "Instagram",
    domainUrl: "instagram.com",
  },
  {
    id: 1,
    timeAccessed: "05:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/twitter-img.png",
    title: "Twitter. It’s what’s happening / Twitter",
    domainUrl: "twitter.com",
  },
  {
    id: 2,
    timeAccessed: "04:35 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/facebook-img.png",
    title: "Facebook – log in or sign up",
    domainUrl: "facebook.com",
  },
  {
    id: 3,
    timeAccessed: "04:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/linkedin-img.png",
    title: "LinkedIn: Log In or Sign Up",
    domainUrl: "linkedin.com",
  },
  {
    id: 4,
    timeAccessed: "04:00 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/hashnode-img.png",
    title: "Hashnode: Everything you need to start blogging as a developer!",
    domainUrl: "hashnode.com",
  },
  {
    id: 5,
    timeAccessed: "03:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/github-img.png",
    title: "GitHub: Where the world builds software · GitHub",
    domainUrl: "github.com",
  },

  {
    id: 6,
    timeAccessed: "02:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/react-img.png",
    title: "React – A JavaScript library for building user interfaces",
    domainUrl: "reactjs.org",
  },
  {
    id: 7,
    timeAccessed: "01:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png",
    title: "Stack Overflow - Where Developers Learn, Share, & Build Careers",
    domainUrl: "stackoverflow.com",
  },

  {
    id: 8,
    timeAccessed: "09:25 AM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/gmail-img.png",
    title: "Gmail",
    domainUrl: "mail.google.com",
  },
  {
    id: 9,
    timeAccessed: "09:00 AM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/google-img.png",
    title: "Google",
    domainUrl: "google.com",
  },
];

// Replace your code here
class App extends Component {
  state = {
    searchInput: "",
    historyList: initialHistoryList,
  };

  onChangeInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  deleteHistory = (id) => {
    const { historyList } = this.state;
    const newList = historyList.filter((each) => each.id !== id);

    this.setState({ historyList: newList });
  };

  render() {
    const { searchInput, historyList } = this.state;
    const updatedHistoryList = historyList.filter((eachItem) =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    const element =
      historyList.length === 0 ? (
        <div className="no-history-section">
          <h1 className="no-history">There is no history to show</h1>
        </div>
      ) : (
        <ul className="section">
          {updatedHistoryList.map((eachHistory) => (
            <BrowserHistory
              key={eachHistory.id}
              historyItem={eachHistory}
              deleteHistory={this.deleteHistory}
            />
          ))}
        </ul>
      );

    return (
      <div className="app-container">
        <div className="header-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="search-div">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
            <input
              type="search"
              className="input-element"
              placeholder="Search History"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        <div className="history-section">{element}</div>
      </div>
    );
  }
}
export default App;
