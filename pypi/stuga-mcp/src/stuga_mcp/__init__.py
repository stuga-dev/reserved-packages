import sys

MESSAGE = """stuga-mcp is not installed from PyPI.

Stuga's MCP server runs on your Stuga node. Connect your client to
<your node's address>/mcp, or open Settings → Your own AI in Stuga
for a setup made for your node.

https://github.com/stuga-dev/stuga/blob/main/docs/agents.md
"""


def main() -> int:
    sys.stderr.write(MESSAGE)
    return 1
