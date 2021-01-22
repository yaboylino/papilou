module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    databaseUrl: process.env.DATABASE_URL || "mongodb://root:EzraJael19111950@85.215.82.240:27017/loveissue?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    URL: process.env.URL || "http://localhost:3000"
  },
  publicRuntimeConfig: {},
  images: {
    domains: ["www.loveissue.nl"]
  }
}
