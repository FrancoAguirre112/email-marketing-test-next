import { createClient } from "@supabase/supabase-js";
import * as dbTypes from "../types/types";

interface addToDBType {
  table: string;
  dbData:
    | dbTypes.UsersType
    | dbTypes.campaignsType
    | dbTypes.emailsType
    | dbTypes.entityType
    | dbTypes.groupsType
    | dbTypes.subscribersType
    | dbTypes.user_entityType
    | dbTypes.entity_groupsType
    | dbTypes.entity_campaignsType
    | dbTypes.subscribers_groupsType
    | dbTypes.groups_campaingsType
    | dbTypes.campaings_emailsType;
}

export const supabase = createClient(
  "https://wffmhjktuhknwtzpqzer.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmZm1oamt0dWhrbnd0enBxemVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzMjAyMjgsImV4cCI6MjAxNTg5NjIyOH0.uiV-OOBg89Kdk1-gC5Twq0tfCq5uM93k4uujmqbEpAQ"
);

export const addToDB = async ({ table, dbData }: addToDBType) => {
  try {
    const { data, error } = await supabase.from(table).insert(dbData);
    if (error) {
      throw error;
    }
    console.log("Data inserted:", data);
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

export const readAllDB = async (table: string) => {
  try {
    const { data } = await supabase.from(table).select("*");
    return data;
  } catch (error) {
    console.error("Error fetching subscribers:", error);
  }
};

export const lastID = async (table: string, idCol: string) => {
  try {
    const { data, error } = await supabase
      .from(table)
      .select(idCol)
      .order(idCol, { ascending: false })
      .limit(1);
    if (error) {
      throw error;
    }

    if (data.length > 0) {
      const lastID = data[0][idCol];
      return lastID;
    } else {
      return 0;
    }
  } catch (error) {
    console.error("Error fetching row count:", error);
    return 0;
  }
};
