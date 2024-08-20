import supabase from "./supbase";

export async function getPetService() {
  const { data, error } = await supabase.from("PetServices").select("*");

  if (error) {
    console.log(error);
    throw new Error("Failed to get Pet Services");
  }

  // console.log(data);

  return data;
}
