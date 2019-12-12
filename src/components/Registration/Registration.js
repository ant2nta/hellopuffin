import React from "react";
import "./registration.scss";
import Validate from "../Validate";
import Cookies from "universal-cookie";
// import WithOnlineRequire from "../WithOnlineRequire";
import axios from "axios";
import $ from "jquery";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Password: "",
      SecondPass: "",
      formErrors: { Email: "", Name: "", Password: "", SecondPass: "" },
      EmailValid: false,
      NameValid: false,
      PassValid: false,
      SecondPassValid: false,
      formValid: false,
      login: "",
      pass: ""
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
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let EmailValid = this.state.EmailValid;
    let NameValid = this.state.NameValid;
    let PassValid = this.state.PassValid;
    let SecondPassValid = this.state.SecondPassValid;
    let { Password, SecondPass } = this.state;

    switch (fieldName) {
      case "Email":
        EmailValid =
          value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
          value.length > 0;
        fieldValidationErrors.Email = EmailValid ? "" : " is invalid";
        break;
      case "Name":
        NameValid = value.length >= 3;
        fieldValidationErrors.Name = NameValid ? "" : " is too short";
        break;
      case "Password":
        PassValid = value.length >= 6;
        fieldValidationErrors.Password = PassValid ? "" : " is too short";
        break;
      case "SecondPass":
        SecondPassValid = SecondPass === Password;
        fieldValidationErrors.SecondPass = SecondPassValid
          ? ""
          : " is incorrect";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        EmailValid: EmailValid,
        NameValid: NameValid,
        PassValid: PassValid,
        SecondPassValid: SecondPassValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.EmailValid &&
        this.state.NameValid &&
        this.state.PassValid &&
        this.state.SecondPassValid
    });
  }

  handleSubmit = event => {
    const { state, cookies, props } = this;
    event.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8000/users",
      data: {
        login: state.login,
        pass: state.pass
      }
    })
      .then(() => {
        cookies.set("isLogin", state.login);
        props.history.push("/profile");
      })
      .catch(() => {
        console.log("Не правильний логін та/або пароль");
        $("#logreq").removeClass("delme");
      });
  };

  registerSubmit = event => {
    const { state, cookies, props } = this;
    event.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8000/new",
      data: {
        login: state.Name,
        pass: state.Password,
        email: state.Email
      }
    })
      .then(() => {
        cookies.set("isLogin", state.login);
        props.history.push("/profile");
      })
      .catch(() => {
        $("#regreq").removeClass("delme2");
      });
  };

  render() {
    const { handleSubmit, handleChange, registerSubmit } = this;
    const {
      login,
      pass,
      Email,
      name,
      formErrors,
      password,
      secondPass
    } = this.state;

    return (
      <div id="reg">
        <div id="container_demo">
          <a className="hiddenanchor" id="toregister"></a>
          <a className="hiddenanchor" id="tologin"></a>
          <div id="wrapper">
            <div id="login" className="animate form">
              <form
                action="mysuperscript.php"
                autoComplete="on"
                onSubmit={handleSubmit}
              >
                <h1>Вхід</h1>
                <p>
                  <label className="uname" data-icon="u">
                    {" "}
                    Логін
                  </label>
                  <input
                    id="username"
                    name="login"
                    required="required"
                    type="text"
                    placeholder="наприклад puffin"
                    value={login}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <label className="youpasswd" data-icon="p">
                    {" "}
                    Пароль{" "}
                  </label>
                  <input
                    id="password"
                    name="pass"
                    required="required"
                    type="password"
                    placeholder="наприклад 123456"
                    value={pass}
                    onChange={handleChange}
                  />
                </p>
                <p className="keeplogin">
                  <input
                    type="checkbox"
                    name="loginkeeping"
                    id="loginkeeping"
                    value="loginkeeping"
                  />
                  <label>Запам'ятати мене</label>
                </p>
                <p className="login button">
                  <span
                    id="logreq"
                    className="delme"
                    style={{ marginRight: 30 + "px" }}
                  >
                    Неправильний логін та/або пароль{" "}
                  </span>
                  <input type="submit" value="Увійти" />
                </p>
                <p className="change_link">
                  Ще не зареєстровані?
                  <a href="#toregister" className="to_register">
                    Приєднуйтесь
                  </a>
                </p>
              </form>
            </div>

            <div id="register" className="animate form">
              <form
                action="mysuperscript.php"
                autoComplete="on"
                onSubmit={registerSubmit}
              >
                <div id="qwe">
                  <h1> Реєстрація </h1>

                  <p>
                    <label className="uname" data-icon="u">
                      Ваш логін
                    </label>
                    <input
                      id="usernamesignup"
                      name="Name"
                      required="required"
                      type="text"
                      placeholder="puffin1"
                      onChange={handleChange}
                      value={name}
                    />
                  </p>
                  <p>
                    <label className="youmail" data-icon="e">
                      {" "}
                      Ваш e-mail
                    </label>
                    <input
                      id="emailsignup"
                      name="Email"
                      required="required"
                      type="email"
                      placeholder="hellopuffin@my.com"
                      onChange={handleChange}
                      value={Email}
                    />
                  </p>
                  <p>
                    <label className="youpasswd" data-icon="p">
                      Ваш пароль{" "}
                    </label>
                    <input
                      id="passwordsignup"
                      name="Password"
                      required="required"
                      type="password"
                      placeholder="123456"
                      onChange={handleChange}
                      value={password}
                    />
                  </p>
                  <p>
                    <label className="youpasswd" data-icon="p">
                      Підтвердіть пароль{" "}
                    </label>
                    <input
                      id="passwordsignup_confirm"
                      name="SecondPass"
                      required="required"
                      type="password"
                      placeholder="123456"
                      onChange={handleChange}
                      value={secondPass}
                    />
                  </p>
                </div>
                <Validate formErrors={formErrors} />
                <p className="signin button">
                  <span
                    id="regreq"
                    className="delme2"
                    style={{ marginRight: 100 + "px" }}
                  >
                    Логін або email зайнятий
                  </span>
                  <input
                    style={{ fontSize: 21 + "px" }}
                    type="submit"
                    value="Зареєструватись"
                    // disabled={!this.state.formValid}
                  />
                </p>
                {/* <button className="btn-signup" disabled={!this.state.formValid}>
                  Зареєструватись
                </button> */}
                <p className="change_link">
                  Уже зареєстровані?
                  <a href="#tologin" className="to_register">
                    {" "}
                    Увійдіть на сайт{" "}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
