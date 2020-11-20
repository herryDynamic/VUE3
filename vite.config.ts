const fs = require("fs");
const dotenv = require("dotenv");
const envFiles = [
  // /** default file */ `.env`,
  // /** mode file */ `.env.${process.env.NODE_ENV}`,
];
// for (const file of envFiles) {
//   const envConfig = dotenv.parse(fs.readFileSync(file));
//   for (const k in envConfig) {
//     // process.env[k] = envConfig[k];
//   }
// }

console.log(process.env);


module.exports = {
  alias: {},
  // hostname: import.met.env.VITE_HOST,
  // port: import.met.env.VITE_PORT,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
   * Base public path when served in production.
   * @default '/'
   */
  // base: process.env.VITE_BASE_URL,
  /**
   * Directory relative from `root` where build output will be placed. If the
   * directory exists, it will be removed before the build.
   * @default 'dist'
   */
  // outDir: import.met.env.VITE_OUTPUT_DIR,
  // 反向代理
  proxy: {
    api: {
      target: "http://www.skillnull.com",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
};
