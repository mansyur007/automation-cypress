const { exec } = require('child_process');
const fs = require('fs');

// Load file configuration
const configPath = './test-config.json';
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Get test names from command-line arguments
const args = process.argv.slice(2);
const scriptsToRun = args.length > 0 ? args : Object.keys(config);

const runScript = (scriptName, index) => {
    const command = config[scriptName];
    console.log(`Running script ${index + 1}/${scriptsToRun.length}: ${command}`);

    const childProcess = exec(command);

    childProcess.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    childProcess.stderr.on('data', (data) => {
        console.error(data.toString());
    });

    childProcess.on('exit', (code) => {
        if (code !== 0) {
            console.error(`Test ${scriptName} failed with exit code ${code}.`);
        }

        if (index + 1 < scriptsToRun.length) {
            runScript(scriptsToRun[index + 1], index + 1);
        } else {
            console.log('All Test have been executed.');
            process.exit(0);
        }
    });
};

// Start running scripts
if (scriptsToRun.length > 0) {
    runScript(scriptsToRun[0], 0);
} else {
    console.error('No scripts provided.');
    process.exit(1);
}
