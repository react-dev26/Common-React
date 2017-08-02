const fs = require('fs');
const contentful = require('contentful');
const contentfulClient = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID
});
const CONTENTFUL_DUMP_FILE_PATH_AND_NAME = './contentful-data.json'

const contentfulMethods = {};


function makeTraverseAndStrip(findKey, replaceChildKey) {

  return function _recurse (o) {
    if (Object.keys(o).find(k => k === findKey)) {
      return _recurse(o[replaceChildKey])
    }

    if (!(o instanceof Object)) return o;

    for (var k in o) {
      const keys = Object.keys(o[k])
      if (Array.isArray(o[k])) {
        // Note: assums item is always an object here.
        o[k] = o[k].map(item => _recurse(item))
      } else if (keys.length > 0) {
        o[k] = _recurse(o[k])
      }
    }

    return o
  }
}

const traverseAndStripMetadata = (o) => {
  makeTraverseAndStrip('sys', 'fields')(o)
  makeTraverseAndStrip('file', 'file')(o)
  return o
}

contentfulMethods.dumpContentfulData = () => {
  return contentfulClient.getEntries({ content_type: 'orderedCollection', include: 10 })
  .then((response) => {
    let data = {};
    response.items.forEach((collection) => {
      const collectionName = collection['fields']['type']
      data[collectionName] = collection['fields']['collection']
    });


		// The stringy-parse is to turn the special contentful objects into a plain JS object
		// 	If we don't do this certain objects are not modifiable.

		data = traverseAndStripMetadata(JSON.parse(JSON.stringify(data)))
		data.cities.forEach(city => {
			city.homes = data.homes.filter((home) => {
				return home.neighborhood.city.name === city.name
			})
		})

    fs.writeFileSync(
			CONTENTFUL_DUMP_FILE_PATH_AND_NAME,
			JSON.stringify(data)
		)

		return data
  })
  .catch(err => {
    console.error('Issue cloning data from Contentful');
    console.error(err);
    throw new Error(err);
  });
};

contentfulMethods.getContentfulData = () => {
  return Promise.resolve()
  .then( () => {
    if (fs.existsSync(CONTENTFUL_DUMP_FILE_PATH_AND_NAME)) {
      return JSON.parse(fs.readFileSync(CONTENTFUL_DUMP_FILE_PATH_AND_NAME, 'utf8'));
    }
    return contentfulMethods.dumpContentfulData();
  })
  .catch(err => {
    console.error(err);
    throw new Error(err);
  });
}

module.exports = contentfulMethods
