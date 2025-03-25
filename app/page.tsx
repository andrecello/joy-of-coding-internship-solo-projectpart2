import { getTasks } from "@/lib/getTasks"; // Import function

export default async function Home() {
  const posts = await getTasks(); // Fetch posts from database

  return (
    <div>
      <h1>My Tasks</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
