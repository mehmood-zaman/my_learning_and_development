import React, { useState } from "react";
export const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [filteredUser, setFilteredUser] = useState<
    { name: string; age: number } | undefined
  >();
  const users = [
    { name: "Mehmood", age: 52 },
    { name: "rabeel", age: 25 },
  ];

  const findUser = (): void => {
    const user = users.find((user) => {
      return user.name === name;
    });
    setFilteredUser(user);
  };

  return (
    <>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={findUser}>Find User</button>
      User Name: {filteredUser?.name}
      User age: {filteredUser?.age}
    </>
  );
};
