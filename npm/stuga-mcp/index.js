#!/usr/bin/env node
process.stderr.write(`stuga-mcp is a placeholder.

Stuga's MCP server runs on your Stuga node. Connect your client to
<your node's address>/mcp, or open Settings → Your own AI in Stuga
for a setup made for your node. A client that starts local servers
runs @stuga/mcp instead: npx -y @stuga/mcp, with STUGA_URL set to
your node's address.

https://github.com/stuga-dev/stuga/blob/main/docs/agents.md
`);
process.exitCode = 1;
