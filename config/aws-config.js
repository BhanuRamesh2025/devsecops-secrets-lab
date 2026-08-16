// AWS configuration for the backup service
// TODO: move this to environment variables before we ship this

const awsConfig = {
  region: "us-east-1",
  accessKeyId: "AKIA2E0A8F3B9C1D4E5F",
  secretAccessKey: "9fT2mK8pQxR4vL6nW1zY3bH5cJ7dG0sA2eU4iO6k",
  bucket: "devsecops-fall2026-backups",
};

module.exports = awsConfig;
