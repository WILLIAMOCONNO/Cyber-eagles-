import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const directory = fileURLToPath(new URL(".", import.meta.url));
const environment = { ...process.env };
if (environment.HTTPS_PROXY || environment.https_proxy) {
  environment.NODE_USE_ENV_PROXY ??= "1";
}
environment.WRANGLER_LOG_PATH ??= resolve(directory, ".cloudflare/logs");
environment.CF_SEND_TELEMETRY ??= "false";
environment.WRANGLER_SEND_METRICS ??= "false";

const child = spawn(
  process.execPath,
  [resolve(directory, "node_modules/cf/bin/cf"), ...process.argv.slice(2)],
  { cwd: directory, env: environment, stdio: "inherit" },
);
child.once("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
child.once("exit", (code) => { process.exitCode = code ?? 1; });
process.once("SIGINT", () => child.kill("SIGINT"));
process.once("SIGTERM", () => child.kill("SIGTERM"));
