### Demo地址：
http://umi2x-antd4x.ixiewei.com/

### umiJS2.X结合antd4.x版本项目，源自 https://github.com/HeavyShell/umijs2.x-project 升级antd版本到4.x

因此项目来源于已有项目，则单独安装对应的包即可：

"@ant-design/icons": "^4.2.2",

"antd": "^4.8.0",


#### antd升级到4.x版本后，有很多配置和写法有所不同，具体参考官网：https://ant.design/index-cn

本项目列举所用的部分：

1 Form.create()已移除，使用hook属性Form.useForm()代替，Form.Item和onFinish使用也有不同

2 Icon已移除，直接使用import { UserOutlined,LockOutlined } from '@ant-design/icons';

需动态创建icon组件可使用如下方式：

（1）引入import  * as Icon from '@ant-design/icons';

（2）
	{
	  React.createElement(
		Icon['UserOutlined'],
		{
		  style:{ marginRight: '8px' }
		}
	  )
	}


### 使用：

1 下载包解压，进入目录

2 安装 npm i 或 cnpm i

3 运行 npm start启动后访问http://localhost:8000/

4 打包 npm run build
