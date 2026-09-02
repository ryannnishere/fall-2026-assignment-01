import fs from 'fs';

export type CommentSummary = {
  postId: number;
  id: number;
  commenterEmail: string;
};

type RawComment = {
  postId: number;
  id: number;
  email: string;
};

export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`);
  const rawComments = (await response.json()) as RawComment[];

  const summaries: CommentSummary[] = rawComments.map((c) => ({
    postId: c.postId,
    id: c.id,
    commenterEmail: c.email.trim(),
  }));

  const filtered = summaries.filter(
    (c) => !c.commenterEmail.endsWith('.org'),
  );
  
  await fs.promises.writeFile(outputPath, JSON.stringify(filtered));

  return filtered.length;
}
