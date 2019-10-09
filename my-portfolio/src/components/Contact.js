import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div id="contact">
        <h2 className="contact-title">Contact</h2>
        <p>Have a question or interested in partnering? Drop me a message!</p>
        <form
          className="section-sm contact"
          onSubmit={this.submitForm}
          action="https://formspree.io/mzngvdam"
          method="POST"
        >
          <label>Email:</label>
          <input type="email" name="email" />
          <label>Message:</label>
          <input type="text" name="message" id="message" />
          {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
