import React, { Component } from "react";

interface User {
  name: string;
  age: number;
}
interface UserSearchProps {
  users: User[];
}

interface UserSearchStateTypes {
  name: string;
  user: User | undefined;
}

export default class UserSearch extends Component<UserSearchProps> {
  state: UserSearchStateTypes = {
    name: "",
    user: undefined,
  };

  findUser = (): void => {
    const user = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({ user });
  };

  render() {
    return (
      <div>
        User Search
        <input
          value={this.state.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            this.setState({ name: e.target.value })
          }
        />
        <button onClick={this.findUser}>Find User</button>
        User Name: {this.state.user?.name}
        User age: {this.state.user?.age}
      </div>
    );
  }
}
