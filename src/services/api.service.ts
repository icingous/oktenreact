const baseUrl = "https://jsonplaceholder.typicode.com";

// export const userService = {
//   getAll(): Promise<IUser[]> {
//     return fetch(`${baseUrl}/users`).then((res) => res.json());
//   },
// };

// export const postService = {
//   getAll(): Promise<IPost[]> {
//     return fetch(`${baseUrl}/posts`).then((res) => res.json());
//   },
// };

// export const commentService = {
//   getAll(): Promise<IComment[]> {
//     return fetch(`${baseUrl}/comments`).then((res) => res.json());
//   },
// };

export const service = {
  getAll<T>(endpoint: string): Promise<T[]> {
    return fetch(`${baseUrl}${endpoint}`).then((res) => res.json());
  },
  getById<T>(endpoint: string, id: number): Promise<T> {
    return fetch(`${baseUrl}${endpoint}/${id}`).then((res) => res.json());
  },
};
