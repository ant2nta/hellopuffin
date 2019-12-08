import React from "react";
import "./registration.scss";
import Validate from "../Validate";
import Cookies from "universal-cookie";
// import WithOnlineRequire from "../WithOnlineRequire";
import axios from "axios";

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
      case "Pass":
        PassValid = value.length >= 6;
        fieldValidationErrors.Pass = PassValid ? "" : " is too short";
        break;
      case "SecondPass":
        SecondPassValid = SecondPass == Password;
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

    // axios.get("http://localhost:8000/users").then(function(response) {
    //   users = response.data;
    //   users.map(value => {
    //     if (state.login === value.login && state.pass === value.pass) {
    //       cookies.set("isLogin", state.login + "_loggined_now");
    //       props.history.push("/hellopuffin/profile");
    //     } else console.log("incorrect");
    //   });
    // });

    axios({
      method: "post",
      url: "http://localhost:8000/users",
      data: {
        login: state.login,
        pass: state.pass
      }
    }).then(() => {
      cookies.set("isLogin", state.login + "_loggined_now");
      props.history.push("/hellopuffin/profile");
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
    }).then(response => {
      if (response.status != 200) {
        alert("Такий логін або пароль вже зареєстрований");
        console.log("Такий логін або пароль вже зареєстрований");
      } else {
        cookies.set("isLogin", state.login + "_loggined_now");
        props.history.push("/hellopuffin/profile");
      }
    });
    // .catch(res => {
    //   if (res.status == 470) {
    //     alert("Email " + state.Email + " вже зареєстрована");
    //   }
    //   if (res.status == 471) {
    //     alert("Логін " + state.Name + " вже зареєстрований");
    //   }
    // });
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
          <a class="hiddenanchor" id="toregister"></a>
          <a class="hiddenanchor" id="tologin"></a>
          <div id="wrapper">
            <div id="login" class="animate form">
              <form
                action="mysuperscript.php"
                autocomplete="on"
                onSubmit={handleSubmit}
              >
                <h1>Вхід</h1>
                <p>
                  <label for="username" class="uname" data-icon="u">
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
                  <label for="password" class="youpasswd" data-icon="p">
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
                <p class="keeplogin">
                  <input
                    type="checkbox"
                    name="loginkeeping"
                    id="loginkeeping"
                    value="loginkeeping"
                  />
                  <label for="loginkeeping">Запам'ятати мене</label>
                </p>
                <p class="login button">
                  <input type="submit" value="Увійти" />
                </p>
                <p class="change_link">
                  Ще не зареєстровані?
                  <a href="#toregister" class="to_register">
                    Приєднуйтесь
                  </a>
                </p>
              </form>
            </div>

            <div id="register" class="animate form">
              <form
                action="mysuperscript.php"
                autocomplete="on"
                onSubmit={registerSubmit}
              >
                <div id="qwe">
                  <h1> Реєстрація </h1>

                  <p>
                    <label for="usernamesignup" class="uname" data-icon="u">
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
                    <label for="emailsignup" class="youmail" data-icon="e">
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
                    <label for="passwordsignup" class="youpasswd" data-icon="p">
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
                    <label
                      for="passwordsignup_confirm"
                      class="youpasswd"
                      data-icon="p"
                    >
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
                <p class="signin button">
                  <input
                    type="submit"
                    value="Зареєструватись"
                    // disabled={!this.state.formValid}
                  />
                </p>
                {/* <button class="btn-signup" disabled={!this.state.formValid}>
                  Зареєструватись
                </button> */}
                <p class="change_link">
                  Уже зареєстровані?
                  <a href="#tologin" class="to_register">
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
