const path = require('path');
const glob = require('glob');

module.exports = {
  title: '@ox2/toggle',
  template: './docs/template.html',
  serverPort: 12333,
  updateWebpackConfig: webpackConfig => {
    webpackConfig.module.loaders.push(
      {
        test: [/\.js$/],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel',
      }
    );
    return webpackConfig;
  },
  sections: [
    {
      name: 'Get Started',
      sections: [
        {
          name: 'About',
          content: 'docs/introduction.md',
        },
        {
          name: 'Installation',
          content: 'docs/installation.md',
        },
        {
          name: 'Usage',
          content: 'docs/usage.md',
        },
        {
          name: 'Redux Form',
          content: 'docs/redux-form.md',
        },
      ],
    },
    // {
    //   name: 'Get Started',
    //   content: './README.md',
    // },
    {
      name: 'Components',
      components() {
        return glob.sync(path.resolve(__dirname, 'src/Toggle/*.js'))
          .filter( module => {
            return /\/[A-Z]\w*\.js$/.test(module);
          });
      },
    },
    {
      name: 'History',
      content: './CHANGELOG.md',
    },
    {
      name: 'License',
      content: './LICENSE',
    },
  ],
  getExampleFilename: componentpath => componentpath.replace(/\.js$/, '.examples.md'),
  getComponentPathLine: componentPath => {
    const name = path.basename(componentPath, '.js');
    const dir = path.dirname(componentPath.replace(/src\//i, ''));
    return `import ${name} from '@ox2/toggle/${dir}';`;
  },
};

