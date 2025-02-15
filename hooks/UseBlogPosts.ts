import { effect, signal } from "@preact/signals-core";

const DECODER = new TextDecoder("utf-8");

export type BlogPost = {
  title: string;
  date: string;
  content: string;
};

export type BlogPostsResult = {
  posts: { value: BlogPost[] };
  isLoading: { value: boolean };
  isError: { value: boolean };
};

// Create the signals at module level so they persist across renders.
const posts = signal<BlogPost[]>([]);
const isLoading = signal(true);
const isError = signal(false);

// Do the asynchronous work only once.
const traverseBlogPosts = async () => {
  const loadedPosts: BlogPost[] = [];
  for await (const file of Deno.readDir("./static/blog-posts")) {
    const contents = Deno.readFileSync(`./static/blog-posts/${file.name}`);
    const decodedContents = DECODER.decode(contents);
    const lines = decodedContents.split("\n");
    const title = lines[0];
    const date = lines[1];
    // Assuming markdown content starts after two newlines
    const content = lines.slice(4).join("\n");
    loadedPosts.push({ title, date, content });
  }
  return loadedPosts;
};

effect(() => {
  // This effect will run once on module load.
  traverseBlogPosts()
    .then((blogPostsArr) => {
      posts.value = blogPostsArr;
    })
    .catch(() => {
      isError.value = true;
    })
    .finally(() => {
      isLoading.value = false;
    });
});

const useBlogPosts = (): BlogPostsResult => {
  return { posts, isLoading, isError };
};

export default useBlogPosts;
