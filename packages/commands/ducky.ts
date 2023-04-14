import { exec } from "child_process";
import { Command } from "commander";
import { cwd } from "process";

const program = new Command();

program
  .name("ducky")
  .description("A pond full of Ducky's tools!")
  .version("1.0.0");

program
  .command("launch-bot")
  .description("Spins up the DuckyBot client and server locally.")
  .action(() => {
    const duckyBotPath = `${cwd()}/packages/ducky-bot`;

    exec(
      `cd ${duckyBotPath}/client && npm run dev`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error:\n`, error);
        }

        console.error(stderr);
        console.log(stdout);
      }
    );
    exec(
      `cd ${duckyBotPath}/server && npm run dev`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error:\n`, error);
        }

        console.error(stderr);
        console.log(stdout);
      }
    );
  });

program.parse();
