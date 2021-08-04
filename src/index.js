import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from "./reportWebVitals";
/*
function Avatar(props) {
    return <image className="Avatar"
                  src={props.user.avatarUrl}
                  alt={props.user.name}
    />;
}

function UserInfo(props) {
    return <div className={UserInfo}>
        <Avatar user={props.user}/>
        <div className="UserInfo-name">
            {props.user.name}
        </div>
    </div>;
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function formatDate(date) {
    return date.toLocaleTimeString();
}

ReactDOM.render(Comment({
    author: {
        name: 'hj',
        avatarUrl: 'none',
    },
    text: 'what it is',
    date: new Date(),
}), document.getElementById('root'));
*/
//Welcome example
/*
class Welcome extends React.Component {
    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
}

const element = <Welcome name='HJ'/>;
ReactDOM.render(element, document.getElementById('root'));
*/

//tick time
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>);
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
