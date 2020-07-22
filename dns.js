const scrape = require('website-scraper');
const options = {
  urls: [
    'https://paypal.com/',	// Will be saved with default filename 'index.html'
    {url: 'https://paypal.com/us/signin', filename: 'ussignin.html'},
    {url: 'https://paypal.com/uk/signin', filename: 'uksignin.html'},
	{url: 'https://paypal.com/es/signin', filename: 'essignin.html'},
	{url: 'https://paypal.com/it/signin', filename: 'itsignin.html'}
  ],
  directory: '/'
};

scrape({
  urls: ['https://paypal.com/'],
  urlFilter: (url) => url.startsWith('https://paypal.com'),
  recursive: true,
  maxRecursiveDepth: 10,
  filenameGenerator: 'bySiteStructure',
  directory: '/'
});

class MyPlugin {
    apply(registerAction) {
        registerAction('beforeStart', async ({options}) => {});
        registerAction('afterFinish', async () => {});
        registerAction('error', async ({error}) => {console.error(error)});
        registerAction('beforeRequest', async ({resource, requestOptions}) => ({requestOptions}));
        registerAction('afterResponse', async ({response}) => response.body);
        registerAction('onResourceSaved', ({resource}) => {});
        registerAction('onResourceError', ({resource, error}) => {});
        registerAction('saveResource', async ({resource}) => {});
        registerAction('generateFilename', async ({resource}) => {})
        registerAction('getReference', async ({resource, parentResource, originalReference}) => {})
    }
}
 
scrape({
  urls: ['https://paypal.com'],
  directory: '/',
  plugins: [ new MyPlugin() ]
});