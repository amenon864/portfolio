import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

const outputDirectory = resolve("out");
const portFlagIndex = process.argv.findIndex((argument) => argument === "-l" || argument === "--port");
const requestedPort = portFlagIndex >= 0 ? Number(process.argv[portFlagIndex + 1]) : Number(process.env.PORT);
const port = Number.isInteger(requestedPort) && requestedPort > 0 ? requestedPort : 3000;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function resolveFile(pathname) {
  const decodedPath = decodeURIComponent(pathname);
  const relativePath = normalize(decodedPath).replace(/^[/\\]+/, "");
  const candidate = resolve(join(outputDirectory, relativePath));

  if (candidate !== outputDirectory && !candidate.startsWith(`${outputDirectory}${sep}`)) {
    return null;
  }

  try {
    const fileStat = await stat(candidate);
    return fileStat.isDirectory() ? join(candidate, "index.html") : candidate;
  } catch {
    return null;
  }
}

const server = createServer(async (request, response) => {
  const pathname = new URL(request.url ?? "/", "http://localhost").pathname;
  const requestedFile = await resolveFile(pathname);
  const filePath = requestedFile ?? join(outputDirectory, "404.html");
  const statusCode = requestedFile ? 200 : 404;

  try {
    await stat(filePath);
    response.writeHead(statusCode, {
      "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream",
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Preview build not found. Run npm run build first.\n");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Static preview: http://localhost:${port}`);
});
