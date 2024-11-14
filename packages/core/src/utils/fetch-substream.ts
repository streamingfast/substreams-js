import { semver } from "semver";
import { createSubstream } from "./create-substream.js";

const REGISTRY_URL = "https://spkg.io";

export async function fetchSubstream(...args: Parameters<typeof fetch>) {
  if (args.length === 1 && !args[0].toString().includes("http")) {
    try {
      const parsedInput = parseStandardPackageAndVersion(args[0].toString());

      if (!(parsedInput instanceof Error)) {
        args[0] = `${REGISTRY_URL}/v1/packages/${parsedInput.packageName}/${parsedInput.version}`;
      }
    } catch  (error: any) {
      // do nothing in the case of an error
    }
  }
  
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Failed to fetch substream (code ${response.status}): ${response.statusText}`);
  }

  const blob = await response.blob();
  const buffer = await blob.arrayBuffer();

  return createSubstream(buffer);
}

const moduleNameRegexp = /^([a-zA-Z][a-zA-Z0-9_-]{0,63})$/;

function parseStandardPackageAndVersion(input: string): { packageName: string; version: string } | Error {
  const parts = input.split("@");
  if (parts.length > 2) {
    throw new Error(`too many '@' in package name: ${input}`);
  }

  const packageName = parts[0];
  if (!moduleNameRegexp.test(packageName)) {
    throw new Error(`package name ${packageName} does not match regexp ${moduleNameRegexp.source}`);
  }

  let version = "latest";
  if (parts.length === 2 && parts[1] !== "" && parts[1] !== "latest") {
    if (!semver.valid(parts[1].replace("v", ""))) {
      throw new Error(`version "${parts[1]}" is not valid Semver format`);
    }
    version = parts[1];
  }

  return { packageName, version };
}
