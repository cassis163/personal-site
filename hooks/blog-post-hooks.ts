import { effect, Signal, signal } from "@preact/signals-core";

const DECODER = new TextDecoder("utf-8");

export type BlogPost = {
  title: string;
  date: string;
  content: string;
  slug: string;
};

export type BlogPostsResult = {
  posts: Signal<BlogPost[]>;
  isLoading: Signal<boolean>;
  isError: Signal<boolean>;
};

// Create the signals at module level so they persist across renders.
const posts = signal<BlogPost[]>([]);
const isLoading = signal(true);
const isError = signal(false);

// Do the asynchronous work only once.
const traverseBlogPosts = async () => {
  const loadedPosts: BlogPost[] = [];
  for await (const file of Deno.readDir("./static/blog-posts")) {
    if (file.isFile && file.name.endsWith(".md")) {
      const blogPost = getBlogPost(file.name);
      loadedPosts.push(blogPost);
    }
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

const getBlogPost = (fileName: string): BlogPost => {
  const contents = Deno.readFileSync(`./static/blog-posts/${fileName}`);
  const decodedContents = DECODER.decode(contents);
  const lines = decodedContents.split("\n");
  const title = lines[0];
  const date = lines[1];
  // Assuming markdown content starts after two newlines
  const content = lines.slice(4).join("\n");
  const slug = fileName.replace(".md", "");
  return { title, date, content, slug };
};

export const useBlogPosts = (): BlogPostsResult => {
  return { posts, isLoading, isError };
};

export const useBlogPost = (slug: string): Signal<BlogPost | null> => {
  const blogPost = signal<BlogPost | null>(null);
  effect(() => {
    blogPost.value = getBlogPost(`${slug}.md`);
  });

  return blogPost;
};
