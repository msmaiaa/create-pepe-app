import * as fs from "fs";
import * as path from "path";
import chalk from "chalk";

const SRC_DIR = path.join(__dirname, "../");
const CHOICES_TEMPLATE = fs.readdirSync(path.join(SRC_DIR, "templates/node/"));
const CHOICES_PM = ["yarn", "npm"];

export const M_YARN_OR_NPM = chalk.cyan("Yarn") + " ou " + chalk.green("NPM");
export const M_PROJECT_NAME = "Qual o nome do projeto?";

interface PM_COMMANDS {
  node: {
    yarn: {
      install: string;
    };
    npm: {
      install: string;
    };
  };
}
export const PM_COMMANDS: PM_COMMANDS = {
  node: {
    yarn: {
      install: "yarn install",
    },
    npm: {
      install: "npm install",
    },
  },
};

export const QUESTIONS = [
  {
    name: "template",
    type: "list",
    message: "Escolha um template",
    choices: CHOICES_TEMPLATE,
  },
  {
    name: "packageManager",
    type: "list",
    message: M_YARN_OR_NPM,
    choices: CHOICES_PM,
  },
  {
    name: "projectName",
    type: "input",
    message: M_PROJECT_NAME,
  },
];

export type PackageManager = "yarn" | "npm";
