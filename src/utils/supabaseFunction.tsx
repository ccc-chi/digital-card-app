import { supabase } from "./supabase";
import { Users } from "../domain/users";
import { Skills } from "../domain/skills";

export const getAllUsers = async (): Promise<Users[]> => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    console.error("Error:", error.message);
  }
  if (!data) {
    return [];
  }
  return data;
};

export const getUserById = async (id: string): Promise<Users | null> => {
  const { data, error } = await supabase
    .from("users")
    .select("*,user_skill(skill_id)")
    .eq("user_id", id)
    .single();
  if (error) {
    console.error("Error:", error.message);
  }
  if (!data) {
    return null;
  }
  return Users.newUsers(data);
};

export const getSkillTable = async (): Promise<Skills[] | null> => {
  const { data, error } = await supabase.from("skills").select("id,name");
  if (error) {
    console.error("Error:", error.message);
  }
  if (!data) {
    return null;
  }
  return data;
};