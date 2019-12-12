import React from "react";
import "./profile.scss";
import WithOnlineRequire from "../WithOnlineRequire";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import axios from "axios";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
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

  render() {
    const logOut = () => {
      this.cookies.remove("isLogin");
    };

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
          id: response.data._id,
          login: response.data.login,
          email: response.data.email,
          name: response.data.name,
          mobile: response.data.mobile,
          bday: response.data.bday,
          profession: response.data.profession,
          status: response.data.status
        });
      });
    };

    const {
      id,
      login,
      email,
      name,
      mobile,
      bday,
      profession,
      status
    } = this.state;

    return (
      <div id="qweq">
        <div className="container emp-profile">
          {userInfo()}
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                    width="240px"
                    height="150px"
                  />
                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h1>{login}</h1>
                  <h3>{name}</h3>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab">
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <Link id="but" to="/login" onClick={logOut}>
                  <input
                    type="submit"
                    className="profile-edit-btn but"
                    name="logout"
                    value="Log Out"
                  />
                </Link>
                <Link id="but" to="/profile/edit">
                  <input
                    type="submit"
                    className="profile-edit-btn qwe"
                    name="btnAddMore"
                    value="Edit Profile"
                  />
                </Link>
              </div>
            </div>
            <div className="row">
              <div id="status" className="col-md-4">
                {status}
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div className="col-md-6 new">
                        <p>id{id}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Birthday</label>
                      </div>
                      <div className="col-md-6 new">
                        <p>{bday}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6 new">
                        <p>{email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6 new">
                        <p>{mobile}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6 new">
                        <p>{profession}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default WithOnlineRequire(Profile);
