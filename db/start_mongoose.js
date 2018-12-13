module.exports = (mongoose, dbConfig) => {
  mongoose.Promise = global.Promise;
  mongoose.set('useCreateIndex', true);
  mongoose.connect(dbConfig.url,  { useNewUrlParser: true }) .then(() => {    console.log("db:ok");}) .catch(err => {    console.log('db:false');});
  //    process.exit();
}
