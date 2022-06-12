const activeEnvs = require('./activeEnvs.json');

const getWorkflowEnvironment = () => {
    const branchName = process.env.BRANCH_NAME;
    const currentEnv = activeEnvs[branchName] || 'Staging';
    if (!currentEnv) {
        process.exit(1);
    }
    return currentEnv;
};

module.exports = getWorkflowEnvironment;