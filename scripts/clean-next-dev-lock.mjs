import fs from "node:fs/promises";
import path from "node:path";

const lockPath = path.join(process.cwd(), ".next", "dev", "lock");

try {
  await fs.rm(lockPath, { force: true });
  console.log(`Cleaned Next dev lock: ${lockPath}`);
} catch (error) {
  const code = /** @type {any} */ (error)?.code;

  if (code === "EPERM" || code === "EBUSY") {
    console.error(
      `Cannot remove lock (still in use): ${lockPath}\n` +
        "Another `next dev` is likely still running. Stop it and retry.",
    );
    process.exitCode = 1;
  } else if (code === "ENOENT") {
    console.log(`No Next dev lock present: ${lockPath}`);
  } else {
    throw error;
  }
}

