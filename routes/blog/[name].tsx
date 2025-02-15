import { PageProps } from "$fresh/server.ts";
import { useBlogPost } from "../../hooks/blog-post-hooks.ts";
import { marked } from "marked";

const BlogPost = (props: PageProps) => {
  const { name } = props.params;
  const post = useBlogPost(name);

  if (!post.value) {
    return (
      <div className="min-h-screen font-inter bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 py-24">
          <h1 className="text-4xl font-bold">Post not found</h1>
          <a
            href="/"
            className="mt-4 inline-block text-primary-400 hover:text-primary-300 transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </div>
    );
  }

  const parsedHtml = marked.parse(post.value.content, { async: false });

  return (
    <div className="min-h-screen font-inter bg-black text-white">
      <article className="max-w-3xl mx-auto px-4 py-24">
        <header className="mb-16">
          <a
            href="/"
            className="text-primary-400 hover:text-primary-300 transition-colors mb-8 inline-block"
          >
            ← Back to home
          </a>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            {post.value.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400">
            <time dateTime={post.value.date} className="text-sm">
              {new Date(post.value.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:text-white
          prose-h1:text-4xl prose-h1:font-bold
          prose-h2:text-3xl prose-h2:font-semibold
          prose-p:text-gray-300
          prose-a:text-primary-400 prose-a:no-underline hover:prose-a:text-primary-300
          prose-strong:text-white
          prose-code:text-primary-300 prose-code:bg-gray-800 prose-code:rounded prose-code:px-1
          prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700
          prose-blockquote:border-primary-400 prose-blockquote:bg-gray-800/50
          prose-img:rounded-lg
          prose-ul:text-gray-300
          prose-ol:text-gray-300">
          <div dangerouslySetInnerHTML={{ __html: parsedHtml }} />
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <a
              href="/"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              ← Back to home
            </a>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
