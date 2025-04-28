import 'dotenv/config';
import { supabase } from "../src/utils/supabase";

const userSkillDelete = async (): Promise<void[]> => {
  const { data, error } = await supabase
    .from("user_skill")
    .delete()
    .neq("user_id", "")
    .select("*");
  if (error) {
    console.error("userSkillError:", error.message);
  }
  if (!data) {
    return [];
  }
  console.log("userSkillDelete", data);
  return data;
};

const usersDelete = async (): Promise<void[]> => {
  const { data, error } = await supabase
    .from("users")
    .delete()
    .neq("user_id", "")
    .select("*");
  if (error) {
    console.error("UsersError:", error.message);
  }
  if (!data) {
    return [];
  }
  console.log("usersDelete", data);
  return data;
};

const deleteAll = async () => {
  await userSkillDelete();
  await usersDelete();
};

deleteAll();