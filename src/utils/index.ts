import * as shell from "shelljs";

import fse from "fs-extra";

import chalk from "chalk";
import { PackageManager, PM_COMMANDS } from "../const";
import path from "path";
import { CliOptions } from "../types";

export const CURR_DIR = process.cwd();

export const createProject = (projectPath: string) => {
  if (fse.existsSync(projectPath)) {
    console.log(
      chalk.red(
        `A pasta ${projectPath} já existe. Delete ou utilize outro nome.`
      )
    );
    return false;
  }
  fse.mkdirSync(projectPath);
  return true;
};

export const createDirContent = async (
  templatePath: string,
  projectName: string
) => {
  await fse.copy(templatePath, path.join(CURR_DIR, projectName));
};

export const postProcess = (
  options: CliOptions,
  packageManager: PackageManager
) => {
  const isNode = fse.existsSync(
    path.join(options.templatePath, "package.json")
  );
  if (isNode) {
    shell.cd(options.targetPath);
    const result = shell.exec(PM_COMMANDS.node[packageManager].install);
    if (result.code !== 0) {
      return false;
    }
  }

  return true;
};
