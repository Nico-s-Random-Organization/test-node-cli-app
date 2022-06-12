const getWorkflowEnvironment = require('./getWorkflowEnvironment');
const { Octokit } = require('octokit');

const run = async () => {
    const workflowEnv = getWorkflowEnvironment();
    
    const octokit = new Octokit({
        auth: process.env.GITHUB_ACCESS_TOKEN
    });

    await octokit.rest.actions.createWorkflowDispatch(
        {
            owner: 'Nico-s-Random-Organization',
            repo: 'test-node-cli-app',
            workflow_id: 'post-merge.yml',
            inputs: {
                target_environment: workflowEnv
            },
            ref: process.env.BRANCH_NAME || 'master'
        }
    );
};

run().then(
    () => {
        process.exit(0);
    }
).catch(
    (err) => {
        console.error(err);
        process.exit(1);
    }
);