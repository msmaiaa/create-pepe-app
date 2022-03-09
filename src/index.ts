import * as path from "path";
import * as inquirer from "inquirer";
import { QUESTIONS } from "./const";
import {
  createDirContent,
  createProject,
  CURR_DIR,
  postProcess,
} from "./utils";
import { Answers, CliOptions } from "./types";

const main = async () => {
  const { packageManager, projectName, template }: Answers =
    await inquirer.prompt(QUESTIONS);

  const templatePath = path.join(__dirname, "templates/node/", template);
  const targetPath = path.join(CURR_DIR, projectName);
  console.log(`templatePath: ${templatePath}`);
  console.log(`targetPath: ${targetPath}`);
  const options: CliOptions = {
    projectName,
    templateName: template,
    templatePath,
    targetPath,
  };

  if (!createProject(targetPath)) {
    return;
  }
  console.log(`template path: ${templatePath}`);
  console.log(`projectName: ${projectName}`);
  await createDirContent(templatePath, projectName);

  postProcess(options, packageManager);
};

main();
