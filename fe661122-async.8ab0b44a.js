(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["fe661122"],{fe661122:function(a,e,n){"use strict";n.d(e,"__esModule",{value:!0}),n.d(e,"texts",{enumerable:!0,get:function(){return p;}}),n("828674c6");let p=[{value:"\u6CE8\u610F\uFF1AReact \u5B98\u65B9\u5DF2\u7ECF\u5E9F\u5F03 ",paraId:0},{value:"create-react-app",paraId:0},{value:" \u811A\u624B\u67B6\uFF0C\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\u3002\n\u8BE6\u7EC6\u4FE1\u606F\u53C2\u8003 ",paraId:0},{value:"\u5B98\u65B9\u4ED3\u5E93",paraId:0},{value:"create-react-app",paraId:1},{value:" \u662F\u4E1A\u754C\u66FE\u7ECF\u6700\u4F18\u79C0\u7684 React \u5E94\u7528\u5F00\u53D1\u5DE5\u5177\u4E4B\u4E00\uFF0C\u672C\u6587\u4F1A\u5C1D\u8BD5\u4F7F\u7528 ",paraId:1},{value:"create-react-app",paraId:1},{value:" \u521B\u5EFA\u4E00\u4E2A ",paraId:1},{value:"TypeScript",paraId:1},{value:" \u9879\u76EE\uFF0C\u5E76\u5F15\u5165 antd\u3002",paraId:1},{value:"antd",paraId:2},{value:" \u57FA\u4E8E\u6700\u65B0\u7A33\u5B9A\u7248\u672C\u7684 TypeScript\uFF08",paraId:2},{value:">=5.0.0",paraId:2},{value:"\uFF09\uFF0C\u8BF7\u786E\u4FDD\u9879\u76EE\u4E2D\u4F7F\u7528\u5339\u914D\u7684\u7248\u672C\u3002",paraId:2},{value:"\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5B89\u88C5 ",paraId:3,tocIndex:0},{value:"yarn",paraId:3,tocIndex:0},{value:" \u6216\u8005 ",paraId:3,tocIndex:0},{value:"pnpm",paraId:3,tocIndex:0},{value:" \u6216\u8005 ",paraId:3,tocIndex:0},{value:"bun",paraId:3,tocIndex:0},{value:"\u3002",paraId:3,tocIndex:0},{value:"\u5DE5\u5177\u4F1A\u81EA\u52A8\u521D\u59CB\u5316\u4E00\u4E2A\u811A\u624B\u67B6\u5E76\u5B89\u88C5 React \u9879\u76EE\u7684\u5404\u79CD\u5FC5\u8981\u4F9D\u8D56\uFF0C\u5982\u679C\u5728\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u7F51\u7EDC\u95EE\u9898\uFF0C\u8BF7\u5C1D\u8BD5\u914D\u7F6E\u4EE3\u7406\u6216\u4F7F\u7528\u5176\u4ED6 npm registry\u3002",paraId:4},{value:"\u7136\u540E\u6211\u4EEC\u8FDB\u5165\u9879\u76EE\u5E76\u542F\u52A8\u3002",paraId:5},{value:"$ cd antd-demo\n$ npm run start\n",paraId:6},{value:"\u6B64\u65F6\u6D4F\u89C8\u5668\u4F1A\u8BBF\u95EE ",paraId:7},{value:"http://localhost:3000/",paraId:7},{value:" \uFF0C\u770B\u5230 ",paraId:7},{value:"Welcome to React",paraId:7},{value:" \u7684\u754C\u9762\u5C31\u7B97\u6210\u529F\u4E86\u3002",paraId:7},{value:"\u8FD9\u662F create-react-app \u751F\u6210\u7684\u9ED8\u8BA4\u76EE\u5F55\u7ED3\u6784\u3002",paraId:8,tocIndex:1},{value:"\u251C\u2500\u2500 README.md\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 public\n\u2502\xa0\xa0 \u251C\u2500\u2500 favicon.ico\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.html\n\u251C\u2500\u2500 src\n\u2502\xa0\xa0 \u251C\u2500\u2500 App.css\n\u2502\xa0\xa0 \u251C\u2500\u2500 App.js\n\u2502\xa0\xa0 \u251C\u2500\u2500 App.test.js\n\u2502\xa0\xa0 \u251C\u2500\u2500 index.css\n\u2502\xa0\xa0 \u251C\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 logo.svg\n\u2514\u2500\u2500 yarn.lock\n",paraId:9,tocIndex:1},{value:"\u73B0\u5728\u4ECE yarn \u6216 npm \u6216 pnpm \u5B89\u88C5\u5E76\u5F15\u5165 antd\u3002",paraId:10,tocIndex:1},{value:"\u4FEE\u6539 ",paraId:11},{value:"src/App.js",paraId:11},{value:"\uFF0C\u5F15\u5165 antd \u7684\u6309\u94AE\u7EC4\u4EF6\u3002",paraId:11},{value:"import React from 'react';\nimport { Button } from 'antd';\n\nconst App: React.FC = () => (\n  <div className=\"App\">\n    <Button type=\"primary\">Button</Button>\n  </div>\n);\n\nexport default App;\n",paraId:12},{value:"\u597D\u4E86\uFF0C\u73B0\u5728\u4F60\u5E94\u8BE5\u80FD\u770B\u5230\u9875\u9762\u4E0A\u5DF2\u7ECF\u6709\u4E86 antd \u7684\u84DD\u8272\u6309\u94AE\u7EC4\u4EF6\uFF0C\u63A5\u4E0B\u6765\u5C31\u53EF\u4EE5\u7EE7\u7EED\u9009\u7528\u5176\u4ED6\u7EC4\u4EF6\u5F00\u53D1\u5E94\u7528\u4E86\u3002\u5176\u4ED6\u5F00\u53D1\u6D41\u7A0B\u4F60\u53EF\u4EE5\u53C2\u8003 create-react-app \u7684",paraId:13},{value:"\u5B98\u65B9\u6587\u6863",paraId:13},{value:"\u3002",paraId:13},{value:"\u53C2\u8003 ",paraId:14,tocIndex:2},{value:"\u914D\u7F6E\u4E3B\u9898",paraId:15,tocIndex:2},{value:"\uFF0C\u901A\u8FC7 ConfigProvider \u8FDB\u884C\u4E3B\u9898\u914D\u7F6E\uFF1A",paraId:14,tocIndex:2},{value:"import React from 'react';\nimport { ConfigProvider } from 'antd';\n\nconst App: React.FC = () => (\n  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>\n    <MyApp />\n  </ConfigProvider>\n);\n\nexport default App;\n",paraId:16,tocIndex:2},{value:"antd",paraId:17,tocIndex:2},{value:" \u4F7F\u7528 TypeScript \u4E66\u5199\u5E76\u63D0\u4F9B\u4E86\u5B8C\u6574\u7684\u5B9A\u4E49\uFF0C\u4F60\u53EF\u4EE5\u4EAB\u53D7\u7EC4\u4EF6\u5C5E\u6027\u8F93\u5165\u5EFA\u8BAE\u548C\u5B9A\u4E49\u68C0\u67E5\u7684\u529F\u80FD\u3002",paraId:17,tocIndex:2},{value:"\u6CE8\u610F\u4E0D\u8981\u5B89\u88C5 ",paraId:18,tocIndex:2},{value:"@types/antd",paraId:18,tocIndex:2},{value:"\u3002",paraId:18,tocIndex:2},{value:"\u6211\u4EEC\u73B0\u5728\u5DF2\u7ECF\u628A antd \u7EC4\u4EF6\u6210\u529F\u8FD0\u884C\u8D77\u6765\u4E86\uFF0C\u5F00\u59CB\u5F00\u53D1\u4F60\u7684\u5E94\u7528\u5427\uFF01",paraId:19,tocIndex:2}];}}]);