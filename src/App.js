import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      Users: [{
        UserName: "Shariful Islam",
        UserEmail: "Shariful.mis@gmail.com",
        Address: "gandaria"
      },
      {
        UserName: "Teddy Re",
        UserEmail: "dsa",
        Address: "ds"
      },
      {
        UserName: "Rudy Rango",
        UserEmail: "rudy121@gmail.com",
        Address: "CS 1.6"
      }
      ],
      IsEditAddBtnClick: false,
      IsUserListClick: false,
      IsUpdateEnable: false,
      inpUser: '',
      inpEmail: '',
      inpAddress: '',
      indexPa: ''

    }


    this.AddUserForm = this.AddUserForm.bind(this);
    this.UserList = this.UserList.bind(this);

    this.EnableAdd = this.EnableAdd.bind(this);

    this.EnableList = this.EnableList.bind(this);

    this.AddUserToList = this.AddUserToList.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.EnableUpdate = this.EnableUpdate.bind(this);
    this.disableUpdateDiv = this.disableUpdateDiv.bind(this);
  }


  AddUserForm() {

    return (
      <div>

        <input type="text" placeholder="Enter User Name" ref={(value) => this.userName = value} />
        <input type="text" placeholder="Enter User Email" ref={(value) => this.UserEmail = value} />
        <input type="text" placeholder="Enter User Address" ref={(value) => this.userAddress = value} />
        <button
          onClick={() => this.AddUserToList()}
        >
          Add
            </button>

      </div>

    )
  }

  AddUserToList() {

    debugger;
    let userName = this.userName.value;
    let email = this.UserEmail.value;
    let address = this.userAddress.value;




    let user = {
      UserName: userName,
      UserEmail: email,
      Address: address
    }

    let Users = [...this.state.Users, user];

    this.setState({
      Users,
      IsUserListClick: true,
      IsEditAddBtnClick: false
    })

  }


  EnableUpdate(index) {
    this.setState({
      IsUpdateEnable: true
    })

    let Users = this.state.Users;
    let user = Users[index];
    this.setState({
      inpUser: user.UserName,
      inpEmail: user.UserEmail,
      inpAddress: user.Address,
      indexPa: index
    })

  }

  disableUpdateDiv() {
    this.setState({
      IsUpdateEnable: false
    })
  }


  deleteUser(index) {
    debugger;
    let Users = this.state.Users;
    Users.splice(index, 1)
    this.setState({
      Users
    })


  }


  UpdateUserData = (index) => {
    let userName = this.userNameUpdate.value
    let userEmail = this.UserEmailUpdate.value
    let userAddress = this.userAddressUpdate.value

    let Users = this.state.Users;
    let user = Users[index];
    user.UserName = userName;
    user.UserEmail = userEmail;
    user.Address = userAddress;

    this.setState({
      Users,
      IsUpdateEnable: false
    })


  }


  updateDiv() {
    return (

      <div>

        <input type="text" placeholder="Enter User Name" ref={(value) => this.userNameUpdate = value} defaultValue={this.state.inpUser} />
        <input type="text" placeholder="Enter User Email" ref={(value) => this.UserEmailUpdate = value} defaultValue={this.state.inpEmail} />
        <input type="text" placeholder="Enter User Address" ref={(value) => this.userAddressUpdate = value} defaultValue={this.state.inpAddress} />
        <button
          onClick={() => this.UpdateUserData(this.state.indexPa)}
        >
          Update
            </button>
        <button
          onClick={() => this.disableUpdateDiv()}
        >
          Cancel
            </button>

      </div>
    )
  }





  UserList() {


    const listItems = this.state.Users.map((item) =>
      <tr key={item.UserName}>
        <td>{item.UserName}</td>
        <td>{item.UserEmail}</td>
        <td>{item.Address}</td>
      </tr>
    );

    return (
      <section>


        <div>
          <table className="table table-border">
            <thead>
              <tr>
                <td>User Name</td>
                <td>User Email</td>
                <td>User Address</td>
                <td>Action</td>
                <td>Action</td>

              </tr>
            </thead>
            <tbody>
              {
                this.state.Users.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.UserName}</td>
                      <td>{item.UserEmail}</td>
                      <td>{item.Address}</td>
                      <td><button
                        onClick={() => this.deleteUser(index)}
                      > Delete </button></td>
                      <td><button
                        onClick={() => this.EnableUpdate(index)}
                      > Edit </button></td>
                    </tr>
                  )

                })
              }
            </tbody>
          </table>
        </div>

        <hr />
        <div>
          {
            this.state.IsUpdateEnable ? this.updateDiv() : ''
          }

          {/*{
                listItems
              }*/}

        </div>



      </section>
    )
  }



  EnableAdd() {
    this.setState({
      IsEditAddBtnClick: true, IsUserListClick: false
    })
  }
  EnableList() {
    this.setState({
      IsEditAddBtnClick: false,
      IsUserListClick: true


    })
  }

  render() {


    return (
      <div className="App">
        <p className="App-intro">
          My Static Crud
               <button onClick={() => this.EnableAdd()}>
            Add User
        </button>
          <button onClick={() => this.EnableList()}>
            User List
        </button>


        </p>

        {
          this.state.IsEditAddBtnClick ? this.AddUserForm() : ''
        }
        {
          this.state.IsUserListClick ? this.UserList() : ''
        }





      </div>
    );
  }
}

export default App;
