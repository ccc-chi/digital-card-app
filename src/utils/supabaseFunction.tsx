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

export const addUser = async (
  user_id: string,
  name: string,
  description: string,
  github_id: string,
  qiita_id: string,
  x_id: string,
  user_skill: number
): Promise<Users> => {
  // userテーブル
  const { data: userData, error: userError } = await supabase
    .from("users")
    .insert({
      user_id: user_id,
      name: name,
      description: description,
      github_id: github_id,
      qiita_id: qiita_id,
      x_id: x_id,
    })
    .select()
    .single();

  if (userError) {
    console.error("Error:", userError.message);
    throw userError;
  }

  // user_skillテーブル
  const { error: skillError } = await supabase.from("user_skill").insert({
    user_id: user_id,
    skill_id: user_skill,
  });

  if (skillError) {
    console.error("Error:", skillError.message);
    throw skillError;
  }
  return userData;
};