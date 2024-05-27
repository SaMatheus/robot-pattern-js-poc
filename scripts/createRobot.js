import fs from 'fs';
import path from 'path';

const templateConfig = process.argv[3] || 'without_config';
const defaultTemplateName = 'robotTemplate_v1'

const defineTemplate = {
  without_config: `${defaultTemplateName}.js`,
  variables: `${defaultTemplateName}-variables.js`,
}

const robotTemplate = fs.readFileSync(path.join('scripts', 'templates', defineTemplate[templateConfig]), 'utf8');

const createRobot = (robotName) => {
  const robotFileName = `${robotName}Robot.js`;
  const robotFilePath = path.join('src', 'tests', 'robots', robotFileName);

  if (fs.existsSync(robotFilePath)) {
    console.log(`Robot ${robotFileName} already exists.`);
    return;
  }

  const robotWithVariables = robotTemplate.replace(/__ROBOT_NAME_WITH_VARIABLES__/g , `${robotName}`)

  templateConfig === 'variables'
    ? fs.writeFileSync(robotFilePath, robotWithVariables)
    : fs.writeFileSync(robotFilePath, robotTemplate);

  console.log(`Robot ${robotFileName} created successfully.`);
};

const robotName = process.argv[2] !== templateConfig && process.argv[2];
if (!robotName) {
  console.log('Please provide a robot name.');
  process.exit(1);
}

createRobot(robotName);
