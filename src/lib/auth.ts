export interface User {
  name: string
  avatar: string
}

export async function getCurrentUser(): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 300))

  return {
    name: "Current User",
    avatar: "CU",
  }
}
