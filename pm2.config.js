/* eslint-disable */
module.exports = {
  apps: [
    {
      name: 'shop',
      script: './dist/main.js',
      env: {
        NODE_ENV: 'production',
        PORT: 4006,
      },
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      log_file: './log/log_file.log',
      error_file: './log/error_file.log',
      out_file: './log/out_file.log',
    },
  ],
};
