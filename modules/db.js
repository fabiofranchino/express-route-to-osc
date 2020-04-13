const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('dbs/db.json')
const db = low(adapter)

db.defaults({ signals: [] }).write()

const write = (p) => {
  db.get('signals').push(p).write()
}

module.exports = { write }
