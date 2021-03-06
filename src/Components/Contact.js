import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  state = {
    formData: {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
      formFeedbackMsg: ""
    },
    isFormOnline: false
  };

  async componentDidMount() {
    const formResponse = (await axios(""))
        .data;

    if (formResponse) {
      this.setState({ isFormOnline: true });
    }
  }

  updateForm = e => {
    e.preventDefault();

    switch (e.target.name) {
      case "contactName":
        this.setState({ contactName: e.target.value });
        break;
      case "contactEmail":
        this.setState({ contactEmail: e.target.value });
        break;
      case "contactSubject":
        this.setState({ contactSubject: e.target.value });
        break;
      default:
        this.setState({ contactMessage: e.target.value });
        break;
    }
  };

  sendEmail = e => {
    e.preventDefault();

    const {
      contactName,
      contactEmail,
      contactSubject,
      contactMessage
    } = this.state;

    if (!contactName || !contactEmail || !contactMessage) {
      this.setState({
        formFeedbackMsg: "Required field missing!"
      });
      return;
    }

    axios
        .post("", {
          toEmail: "an_kalinina@mail.ru",
          fromEmail: contactEmail,
          sender: contactName,
          subject: contactSubject,
          message: contactMessage
        })
        .then(({ data }) => {
          // if error
          if (data.error) {
            this.setState({ formFeedbackMsg: data.message });
            return;
          }

          this.setState({
            formFeedbackMsg: "Email Sent Successfully. Thanks!",
            contactName: "",
            contactEmail: "",
            contactSubject: "",
            contactMessage: ""
          });
        });
  };

  render() {
    const message = this.props.data.contactmessage;
    const { formFeedbackMsg, isFormOnline } = this.state;

    return (
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>

          <div className="row">
            <div className="eight columns">
              <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingLeft: "15%"
                  }}
              >
                <div style={{ color: "#ffffff" }}>{formFeedbackMsg}</div>
              </div>
              <form onSubmit={this.sendEmail}>
                {!isFormOnline && (
                    <div style={{ textAlign: "center", color: "#ff0000" }}>
                      Form is currently offline, email me instead!
                    </div>
                )}
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                        disabled={!isFormOnline}
                        type="text"
                        size="35"
                        id="contactName"
                        name="contactName"
                        value={this.state.contactName}
                        onChange={this.updateForm}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                        disabled={!isFormOnline}
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactEmail"
                        name="contactEmail"
                        value={this.state.contactEmail}
                        onChange={this.updateForm}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                        disabled={!isFormOnline}
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactSubject"
                        name="contactSubject"
                        value={this.state.contactSubject}
                        onChange={this.updateForm}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                        disabled={!isFormOnline}
                        style={{ resize: "none" }}
                        cols="50"
                        rows="15"
                        id="contactMessage"
                        name="contactMessage"
                        value={this.state.contactMessage}
                        onChange={this.updateForm}
                    />
                  </div>

                  <div>
                    <button
                        className="submit"
                        type="submit"
                        disabled={!isFormOnline}
                    >
                      Submit
                    </button>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error </div>
              <div id="message-success">
                <i className="fa fa-check" />
                Your message was sent, thank you!
                <br />
              </div>
            </div>

            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Anastasiya Kalinina</h4>
                <p className="address">
                  <br />
                  Minsk, Belarus
                  <br />
                  <a href={`mailto:an_kalinina@mail.ru`}>an_kalinina@mail.ru</a>
                  <br />
                </p>
              </div>
            </aside>
          </div>
        </section>
    );
  }
}

export default Contact;
