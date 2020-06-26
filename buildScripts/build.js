import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. this will take a moment.'));
webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }
  else {
    console.log(chalk.green(`Webpack stats: ${stats}`));
    console.log(chalk.green('you app has been built for production!'))
    return 0;
  }
})
