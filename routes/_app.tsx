import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>personal-site</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class={"m-0"}>
        <main style={{ minHeight: "100vh" }}>
          <Component />
        </main>
        <footer
          style={{
            textAlign: "center",
            padding: "1rem",
            background: "#f2f2f2",
          }}
        >
          © {new Date().getFullYear()} personal-site. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
