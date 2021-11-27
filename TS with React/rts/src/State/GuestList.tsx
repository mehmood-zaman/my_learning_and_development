import React, { useState } from "react";
export const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guestList, setGuestList] = useState<string[]>([]);

  const addGuest = (): void => {
    setGuestList([...guestList, name]);
  };
  return (
    <>
      <h3>Guest List</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addGuest}>Add</button>
    </>
  );
};
