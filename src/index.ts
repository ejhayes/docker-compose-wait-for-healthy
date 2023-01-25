import 'source-map-support/register';

import { exec, spawn } from 'child_process';
import { promisify } from 'util';
import { error, getInput, info } from '@actions/core';

const INPUTS = {
  services: getInput('services', { required: false }),
  path: getInput('path', { required: false }),
  timeout: Number(getInput('timeout', { required: false })),
};

async function main() {
  return new Promise<void>((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject('Timeout');
      return;
    }, INPUTS.timeout * 1000);

    const intervalId = setInterval(async () => {
      const services = await getServices(INPUTS.services, INPUTS.path);
      if (services.length == services.filter((i) => i[1]).length) {
        info('Status: All services HEALTHY');
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        resolve();
      } else {
        info(
          `Status: ${services.filter((i) => i[1]).length}/${
            services.length
          } services are HEALTHY`,
        );
      }
    }, 1000);
  });
}

async function getServices(services, cwd) {
  const res = await runCommand(`docker compose ps ${services}`, cwd);
  return res
    .trim()
    .split('\n')
    .slice(1)
    .map((i) => i.split(/\s{3,}/).slice(2, 4))
    .map((i) => [i[0], i[1].search(/healthy/i) >= 0]);
}

function streamCommand(command, args, cwd) {
  const cmd = spawn(command, args, {
    detached: true,
    cwd,
    stdio: ['pipe', process.stdout, process.stderr],
  });

  return cmd;
}

async function runCommand(command, cwd) {
  try {
    const { stdout } = await promisify(exec)(command, { cwd });
    return `${stdout}`;
  } catch (err) {
    throw err;
  }
}

const cmd = streamCommand(
  'docker',
  ['compose', 'logs', '-f', INPUTS.services],
  INPUTS.path,
);
main()
  .then(() => {
    // need to make sure all spawned processes are killed
    process.kill(-cmd.pid);
  })
  .catch((err) => {
    error(err);
    process.kill(-cmd.pid);
    process.exit(1);
  });
