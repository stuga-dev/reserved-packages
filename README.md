# reserved-packages

Package names reserved for Stuga on public package registries. Stuga is not installed from any of
them: each one prints where to get the real thing and exits with status 1. They read no environment
variables and no files, and have no dependencies or install scripts.

| Registry | Name | Prints |
|---|---|---|
| npm | [`stuga-mcp`](npm/stuga-mcp) | How to connect an MCP client to your Stuga node |
| npm | [`stuga`](npm/stuga) | How to install Stuga |
| PyPI | [`stuga-mcp`](pypi/stuga-mcp) | How to connect an MCP client to your Stuga node |

Stuga's own packages on npm are under the `@stuga` scope, such as
[`@stuga/dsh-plugin`](https://www.npmjs.com/package/@stuga/dsh-plugin).

PyPI versions, and npm versions after 0.0.1, are published from
[`publish.yml`](.github/workflows/publish.yml) through trusted publishing and carry a provenance
record that points back to a commit here.

To report a security problem, see Stuga's [SECURITY.md](https://github.com/stuga-dev/stuga/blob/main/SECURITY.md).
