"use client";

import { SyntheticEvent, useEffect, useState } from "react";
import {
  addToDB,
  lastID,
  readAllDB,
  supabase,
} from "../services/supabase.service";
import { emailsType, groupsType } from "../types/types";

export const CampaignForm = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const formattedTime = today.toTimeString().split("")[0];

  const [formData, setFormData] = useState({
    campaign_id: 0,
    name: "",
    sched_time: formattedTime,
    status: "sent",
    data: "",
  });

  const [selectedEmail, setSelectedEmail] = useState<emailsType>();
  const [emailList, setEmailList] = useState<emailsType[]>([]);

  const [selectedGroup, setSelectedGroup] = useState<groupsType>();
  const [groupList, setGroupList] = useState<groupsType[]>([]);

  const [currentID, setCurrentID] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      campaign_id: currentID,
      [name]: value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    const selectedEmail = emailList.find(
      (email) => email.email_id === selectedId
    );
    setSelectedEmail(selectedEmail);
  };

  const handleGroupSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedID = parseInt(e.target.value);
    const selectedGroup = groupList.find(
      (group) => group.group_id === selectedID
    );
    setSelectedGroup(selectedGroup);
  };

  const submitForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    await addToDB({ table: "campaigns", dbData: formData });

    try {
      const { data } = await supabase
        .from("groups")
        .select("*, subscribers(email)")
        .eq("group_id", selectedGroup?.group_id);

      const subscribers = data[0]?.subscribers.map(
        (subscriber: {email: ""}) => subscriber.email
      );

      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: subscribers,
          subject: selectedEmail?.subject || "Subject failed",
          html: selectedEmail?.content || "<p>HTML failed</p>",
        }),
      });

    } catch (error) {
      console.error("Error fetching subscribers or sending emails:", error);
    }
  };

  useEffect(() => {
    lastID("campaigns", "campaign_id").then((count) => {
      setCurrentID(count + 1);
    });
  }, [currentID]);

  useEffect(() => {
    readAllDB("emails").then((emails) => {
      setEmailList(emails);
    });
    readAllDB("groups").then((groups) => {
      setGroupList(groups);
    });
  }, []);

  return (
    <form className="flex w-full flex-col gap-2" onSubmit={submitForm}>
      <h1>Create Campaign</h1>

      <input
        className="border-2 border-black px-4 py-2"
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <select
        className="border-2 border-black px-4 py-2"
        name="selectedEmail"
        value={selectedEmail ? selectedEmail.email_id : ""}
        onChange={handleSelectChange}
      >
        <option value="">Select Email</option>
        {emailList.map((email) => {
          return (
            <option key={email.email_id} value={email.email_id}>
              {email.subject}
            </option>
          );
        })}
      </select>
      <select
        className="border-2 border-black px-4 py-2"
        name="selectedGroup"
        value={selectedGroup ? selectedGroup.group_id : ""}
        onChange={handleGroupSelect}
      >
        <option value="">Select Destination Group</option>
        {groupList.map((group) => {
          return (
            <option key={group.group_id} value={group.group_id}>
              {group.name}
            </option>
          );
        })}
      </select>
      <button
        type="submit"
        className="bg-green-500 px-4 py-2 font-bold text-white"
      >
        Send
      </button>
    </form>
  );
};
