#!/usr/bin/env node
process.stderr.write(`Stuga is not installed from npm.

Mac:              https://stuga.dev
Linux, in Docker: https://github.com/stuga-dev/stuga/blob/main/docs/install/docker.md
`);
process.exitCode = 1;
