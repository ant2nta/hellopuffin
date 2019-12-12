import React from "react";
import "./info.scss";
import axios from "axios";
import Cookies from "universal-cookie";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      email: "",
      name: "",
      mobile: "",
      bday: "",
      profession: "",
      status: ""
    };
  }

  cookies = new Cookies();

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
      }
      //   () => {
      //     this.validateField(name, value);
      //   }
    );
  };
  handleSubmit = event => {
    const { props } = this;
    event.preventDefault();
    let userNamee = this.cookies.get("isLogin");
    console.log(this.state.email, this.state.status);
    axios({
      method: "post",
      url: "http://localhost:8000/edit",
      data: {
        login: userNamee,
        email: this.state.email,
        name: this.state.name,
        mobile: this.state.mobile,
        bday: this.state.bday,
        profession: this.state.profession,
        status: this.state.status
      }
    }).then(() => {
      props.history.push("/profile");
      alert("Зміни збережено");
    });
  };

  render() {
    const userInfo = () => {
      let userName = this.cookies.get("isLogin");
      axios({
        method: "post",
        url: "http://localhost:8000/user",
        data: {
          login: userName
        }
      }).then(response => {
        this.setState({
          login: response.data.login
        });
      });
    };

    const { email, name, mobile, profession, status, bday } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div id="editPage">
        {userInfo()}
        <form
          onSubmit={handleSubmit}
          className="contact_form"
          action="#"
          name="f"
        >
          <ul>
            <li>
              <h2>Edit profile</h2>
            </li>
            <li>
              <label htmlFor="name">Login:</label>
              <input type="text" placeholder={this.state.login} disabled />
            </li>
            <li>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="smallboy@hellopuffin.com"
                onChange={handleChange}
                value={email}
              />
              <span className="form_hint">
                Proper format "name@something.com"
              </span>
            </li>
            <li>
              <label htmlFor="name">Name:</label>
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                onChange={handleChange}
                value={name}
              />
            </li>
            <li>
              <label htmlFor="name">Phone number:</label>
              <input
                name="mobile"
                type="tel"
                placeholder="050-123-4567"
                onChange={handleChange}
                value={mobile}
              />
              <span className="form_hint">Proper format "012-345-6789"</span>
            </li>
            <li>
              <label htmlFor="name">Birthday:</label>
              <input
                name="bday"
                type="date"
                placeholder="John Doe"
                onChange={handleChange}
                value={bday}
              />
            </li>
            <li>
              <label htmlFor="name">Profession:</label>
              <input
                type="text"
                name="profession"
                placeholder="Programmer"
                onChange={handleChange}
                value={profession}
              />
            </li>
            <li>
              <label htmlFor="message">Status:</label>
              <textarea
                name="status"
                cols="40"
                rows="6"
                onChange={handleChange}
                value={status}
              ></textarea>
            </li>
            <li>
              <button className="submit" type="submit">
                Edit profile
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Info;
