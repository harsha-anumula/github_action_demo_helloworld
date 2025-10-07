const core = require('@actions/core');

async function run() {
  try {
    const name = core.getInput('name');
    console.log(`👋 Hello, $Harsha! This is from custom action-repo1.`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
