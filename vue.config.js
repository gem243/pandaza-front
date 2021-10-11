module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: "https://pandaza-backend.herokuapp.com"
  }
}
