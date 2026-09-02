export type PostItem = {
    id: string;
    title: string;
    body: string;
};

export async function fetchPostBatch(postIds: number[]): Promise<PostItem[]> {
  const responses = await Promise.all(postIds.map((id) => 
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)));
  const posts = await Promise.all(responses.map((response) => response.json()));

  return posts as PostItem[];
}
