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
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-secondary-50 to-primary-50">
        <main className="flex-grow">
          <Component />
        </main>
        <footer className="py-8 bg-white/80 backdrop-blur-sm border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()}{" "}
              <span className="text-primary-600">Casper Aangeenbrug</span>. All
              rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
