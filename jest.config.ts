import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  roots: ["packages"],
  setupFiles: ["dotenv-flow/config"],
  testEnvironment: "node",
};

export default config;
