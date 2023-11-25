'use client';

import { SyntheticEvent, useEffect, useState } from "react";
import { addToDB, lastID } from "../services/supabase.service";

export const SubscriberForm = () => {
  const [formData, setFormData] = useState({
    sub_id: 0,
    name: "",
    email: "",
  });

  const [currentID, setCurrentID] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      sub_id: currentID,
      [name]: value,
    });
  };

  const submitForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    await addToDB({ table: "subscribers", dbData: formData });

    // Adding it to the general group
    await addToDB({
      table: "subscribers_groups",
      dbData: { sub_id: formData.sub_id, group_id: 1 },
    });

    // Adding it to the marketing group
    await addToDB({
      table: "subscribers_groups",
      dbData: { sub_id: currentID, group_id: 2 },
    });

    // Reload page to update values
    window.location.reload();
  };

  useEffect(() => {
    lastID("subscribers", "sub_id").then((count) => {
      setCurrentID(count + 1);
    });
  }, [currentID]);

  return (
    <form className="flex w-full flex-col gap-2" onSubmit={submitForm}>
      <h1>Add subscriber</h1>

      <input
        className="border-2 border-black px-4 py-2"
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        className="border-2 border-black px-4 py-2"
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="bg-green-500 px-4 py-2 font-bold text-white"
      >
        Submit
      </button>
    </form>
  );
};
