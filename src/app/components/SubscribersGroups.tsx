'use client';

import { useState, useEffect } from "react";
import { subscribersType, groupsType } from "../types/types";
import { supabase } from "../services/supabase.service";
import { Table } from "./Table";

export const SubscribersGroups = () => {
  const [subscribers, setSubscribers] = useState<subscribersType[]>([]);
  const [groups, setGroups] = useState<groupsType[]>([]);

  const getSubscribers = async () => {
    try {
      const { data } = await supabase.from("subscribers").select("*");
      setSubscribers(data || []);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
    }
  };

  const getGroups = async () => {
    try {
      const { data } = await supabase
        .from("groups")
        .select("*, subscribers (sub_id, email)");
      setGroups(data || []);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
    }
  };

  useEffect(() => {
    getSubscribers();
    getGroups();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <h1>Check subscribers table and groups table</h1>
      <h2 className="text-center">For testing: Can only send to francoaguirre112@gmail.com</h2>
      <div className="flex flex-col justify-center">
        <h1>Subscribers</h1>
        <Table items={subscribers} />
      </div>

      <div className="flex flex-col justify-center">
        <h1>Groups</h1>
        <Table items={groups} />
      </div>
    </div>
  );
};
