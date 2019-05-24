const path = require('path');

module.exports = {
  entry: './context/jsx/app.jsx',
  output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'dist')
  },
  module:{
   rules:[
	  {
		 test:/\.(js|jsx)$/, // 모든 .js,jsx파일에 babel-loader(.babelrc에 설정한 파일)을 적용합니다.
		 exclude: /node_modules/, // node_moudules 폴더 하위는 제외 한다.
		 use:{
			loader:"babel-loader" // babel-loader를 사용한다.
		 }
	  }
   ]
  }
};