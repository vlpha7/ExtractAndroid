var express = require('express');
var router = express.Router();
const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "123"));
const session = driver.session();

/* GET home page. */
router.get('/', function(req, res, next) {
  const resultPromise = session.run(
    'MATCH (t:Tag) RETURN t LIMIT 10'
  );
  
  resultPromise.then(result => {
    session.close();
    const singleRecord = result.records[0];
    console.log(singleRecord);
    const node = singleRecord.get(0);
    console.log(node);
  
    // on application exit:
    driver.close();
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
