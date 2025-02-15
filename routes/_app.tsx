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
        >
        </link>
      </head>
      <body className="m-0 min-h-screen flex flex-col">
        <main className="flex-grow">
          <Component />
        </main>
        <footer className="py-8 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()}{" "}
              Casper Aangeenbrug. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
