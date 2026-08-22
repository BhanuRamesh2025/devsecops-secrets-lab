// Notification helper for build status
// Slack webhook for #build-alerts channel:
// https://hooks.slack.com/services/T00000FAKE/B00000FAKE/FAKEWEBHOOKTOKENXXXXXXXXXXXX

function notifyBuildStatus(status) {
  console.log(`Build status: ${status}`);
  // TODO: actually POST to the webhook above
}

module.exports = notifyBuildStatus;
