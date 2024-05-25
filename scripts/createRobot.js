import fs from 'fs';
import path from 'path';

// Armazena o arquivo de template do robot numa variavel
const robotTemplate = fs.readFileSync(
  path.join('scripts', 'templates', 'robotTemplate.js'),
  'utf8'
);

const createRobot = (robotName) => {
  // Define o nome do arquivo
  const robotFileName = `${robotName}Robot.js`;

  // Busca um arquivo na pasta testes/robots
  const robotFilePath = path.join('src', 'tests', 'robots', robotFileName);

  //  Caso o arquivo buscado na variavel 'robotFilePath'tenha sido encontrado, significa que
  //  um arquivo com o mesmo nome do que está sendo criado já existe,
  //  então retorna, interrompendo a criação do robot.
  if (fs.existsSync(robotFilePath)) {
    console.log(`Robot ${robotFileName} already exists.`);
    return;
  }

  // O modificador '/g' procura todo lugar do arquivo que tiver __ROBOT_NAME__.
  // Então, o replace vai substituir essa informação pelo nome do robot recebido no
  // parametro dessa função
  const robotContent = robotTemplate.replace(/__ROBOT_NAME__/g, robotName);

  // Cria o robot no 'robotFilePath' com o conteúdo formatado no 'robotContent'
  fs.writeFileSync(robotFilePath, robotContent);
  console.log(`Robot ${robotFileName} created successfully.`);
};

// Por se tratar de um script, esse process.argv pega o index 2 do argv pois
// é nesse index que deve estar o nome do arquivo robot na hora de rodar o script
// o script a ser rodado é: 'node scripts/createRobot.js newRobotName'
// sendo assim, process.argv é: ['node', 'scripts/createRobot.js', 'newRobotName']
//                       index:    0                 1                    2
const robotName = process.argv[2];
// Se o usuário não prover o nome do robot o processo será finalizado
if (!robotName) {
  console.log('Please provide a robot name.');
  process.exit(1);
}

// Informação importante, o objeto process da acesso a todos os processos
// que estão sendo executados no node.

createRobot(robotName);
