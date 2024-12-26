import { client } from "./client";

export async function userAuthenticated(): Promise<boolean> {
  return await client.auth.getUser().then((data) => {
        console.log(data);
        return data.data.user !== null
    })


}