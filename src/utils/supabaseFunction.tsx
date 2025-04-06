import { supabase } from "./supabase";
import { Users } from "../domain/users";
import { User_skill } from "../domain/user_skill";
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
    .select("*")
    .eq("user_id", id)
    .single();
  if (error) {
    console.error("Error:", error.message);
  }
  if (!data) {
    return null;
  }
  return data;
};

export const getSkillByUserId = async (
  id: string
): Promise<User_skill | null> => {
  const { data, error } = await supabase
    .from("user_skill")
    .select("*")
    .eq("user_id", id)
    .single();
  if (error) {
    console.error("Error:", error.message);
  }
  if (!data) {
    return null;
  }
  return data;
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