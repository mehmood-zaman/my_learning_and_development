import React, { useState, useRef, useEffect } from "react";
export const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [filteredUser, setFilteredUser] = useState<
    { name: string; age: number } | undefined
  >();
  const inputRef = useRef<HTMLInputElement | null>(null);
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

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={findUser}>Find User</button>
      User Name: {filteredUser?.name}
      User age: {filteredUser?.age}
    </>
  );
};
