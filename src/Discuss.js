import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';

export default class Discuss extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputMessage: '',
            allMessages: []
        }
    }

    txtChangedHandler = (event) => {
        const inputValue = event.target.value;
        this.setState({ inputMessage: inputValue })
    }

    messageSubmit = (event) => {
        const messages = [...this.state.allMessages, this.state.inputMessage];
        this.setState({ allMessages: messages })
    }

    render() {
        return (
            <Route
                path="/discuss"
                exact
                render={() => (
                    <div className="discussion">
                        <h1>Discuss {this.props.chatAbout}</h1>
                        <Link className="discussion_back" to="/">Go back</Link>
                        <div className="discussion_chatbox">
                            <div className="discussion_chatbox_message">
                                {this.state.allMessages < 1 ?
                                    <p className="discussion_chatbox_message_none">It appears that there are no messages yet. Post the first comment below!</p>
                                    : (
                                        this.state.allMessages.map((message, i) => {
                                            return (
                                                <p key={i} className="discussion_chatbox_message-m">{message}</p>
                                            )
                                        })
                                    )
                                }
                            </div>


                            <div className="discussion_chatbox_bar">
                                <input onChange={this.txtChangedHandler} type="text" placeholder="send message" />
                                <button onClick={this.messageSubmit}>&#8594;</button>
                            </div>

                        </div>
                    </div>
                )}
            />
        )
    }
}


