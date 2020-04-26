/* eslint-disable */
module.exports = {
  apps: [
    {
      name: 'shop',
      script: './dist/main.js',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        NODE_HOST: '127.0.0.1',
        NODE_PORT: 4006,
      },
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      log_file: './log/pm2log.txt',
      error_file: './log/pm2error.txt',
      out_file: './log/pm2out.txt',
    },
  ],
};
