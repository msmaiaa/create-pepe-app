import { PackageManager } from "../const";

export interface CliOptions {
  projectName: string;
  templateName: string;
  templatePath: string;
  targetPath: string;
}

export interface Answers {
  packageManager: PackageManager;
  projectName: string;
  template: string;
}
