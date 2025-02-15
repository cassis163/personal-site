import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Casper Aangeenbrug</title>
        <link rel="stylesheet" href="/styles.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-black">
        <main className="flex-grow">
          <Component />
        </main>
        <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/yourusername"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  GitHub
                </a>
                <span className="text-gray-700">•</span>
                <a
                  href="https://linkedin.com/in/yourusername"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>

              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()}{" "}
                <span className="text-primary-400">Casper Aangeenbrug</span>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
