import React, { useState } from "react";
import Cards from "./Cards";

import Form from "./Form";

export default function App() {
  const style = "w-full h-screen flex items-center justify-center flex-col";
  const [user, setUser] = useState([]);
  const handleFormSubmitData = (data) => {
    setUser((prevUsers) => [...prevUsers, data]);
  };
  const handleRemove = (id) => {
    setUser(() => user.filter((item, index) => index != id));
  };
  return (
    <div className={style}>
      <Cards user={user} handleRemove={handleRemove} />
      <Form handleFormSubmitData={handleFormSubmitData} />
    </div>
  );
}
