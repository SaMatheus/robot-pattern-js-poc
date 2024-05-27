import fs from 'fs';
import path from 'path';

const robotTemplate = fs.readFileSync(path.join('scripts', 'templates', 'robotTemplate_v1'), 'utf8');

const createRobot = (robotName) => {
  const robotFileName = `${robotName}Robot.js`;
  const robotFilePath = path.join('src', 'tests', 'robots', robotFileName);

  if (fs.existsSync(robotFilePath)) {
    console.log(`Robot ${robotFileName} already exists.`);
    return;
  }

  fs.writeFileSync(robotFilePath, robotTemplate);

  console.log(`Robot ${robotFileName} created successfully.`);
};

const robotName = process.argv[2] !== templateConfig && process.argv[2];
if (!robotName) {
  console.log('Please provide a robot name.');
  process.exit(1);
}

createRobot(robotName);
