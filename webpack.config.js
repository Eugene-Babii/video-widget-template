import * as url from 'url'
import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export default (env) => {
  return {
    mode: "development",
    entry: {
      ["video-widget"]: "./completed_widget.js"
    },
    output: {
      filename: `${env.prefix || '[name]'}.bundle.js`,
      path: path.resolve(__dirname, "dist")
    },
    plugins: [
      new CleanWebpackPlugin(),
    ]
  }
}