import React from "react";
import $ from "jquery";
import "./findUsers.scss";
import axios from "axios";

const FindUsers = () => {
  function GetUsers() {
    axios({
      method: "get",
      url: "http://localhost:8000/users"
    }).then(newObj => {
      let rows = "";
      let users = newObj.data;
      $.each(users, function(index, user) {
        rows += row(parseInt(index) + 1, user);
      });
      $("table tbody").append(rows);
    });
  }

  var row = function(index, user) {
    return (
      "<tr data-rowid='" +
      index +
      "'><td>" +
      index +
      "</td>" +
      "<td>" +
      user +
      "</td>"
    );
  };
  GetUsers();

  return (
    <div>
      <table className="table table-condensed table-striped table-bordered">
        <caption>Пошук користувачів</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Имя</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default FindUsers;
