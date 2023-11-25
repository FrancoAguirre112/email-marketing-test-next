'use client';

import { useEffect, useState } from "react";
import { supabase } from "../services/supabase.service";
import { emailsType } from "../types/types";
import { Table } from "./Table";

export const ShowEmails = () => {
  const [emails, setEmails] = useState<emailsType[]>([]);

  const getEmails = async () => {
    try {
      const { data } = await supabase.from("emails").select("*");
      setEmails(data || []);
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };

  useEffect(() => {
    getEmails();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <h1>Check emails table</h1>
      <Table items={emails} />
    </div>
  );
};
