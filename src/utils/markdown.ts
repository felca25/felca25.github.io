export interface ParsedMarkdown {
  attributes: Record<string, unknown>;
  body: string;
}

function parseScalar(value: string): unknown {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);
  return trimmed.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
}

export function parseFrontmatter(raw: string): ParsedMarkdown {
  const normalized = raw.replace(/\r\n?/g, "\n");

  if (!normalized.startsWith("---\n")) {
    return { attributes: {}, body: normalized.trim() };
  }

  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) {
    return { attributes: {}, body: normalized.trim() };
  }

  const frontmatter = normalized.slice(4, end);
  const body = normalized.slice(end + 5).trim();
  const attributes: Record<string, unknown> = {};

  let currentArrayKey: string | null = null;
  for (const line of frontmatter.split("\n")) {
    if (!line.trim()) continue;

    if (/^\s*-\s+/.test(line) && currentArrayKey) {
      const item = line.replace(/^\s*-\s+/, "");
      const current = (attributes[currentArrayKey] as unknown[]) ?? [];
      current.push(parseScalar(item));
      attributes[currentArrayKey] = current;
      continue;
    }

    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;

    const [, key, rest] = match;
    if (rest.trim() === "") {
      attributes[key] = [];
      currentArrayKey = key;
    } else {
      attributes[key] = parseScalar(rest);
      currentArrayKey = null;
    }
  }

  return { attributes, body };
}
