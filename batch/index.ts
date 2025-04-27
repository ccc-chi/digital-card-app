import 'dotenv/config';
import { supabase } from '../src/utils/supabase';
import { Users } from '../src/domain/users';

const fetchData = async ():Promise<Users[]> => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    console.error("Error:", error.message);
  }
  if (!data) {
    return [];
  }
  console.log(data);
  return data;
};
fetchData();

  