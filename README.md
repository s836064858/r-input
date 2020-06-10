<!--
 * @Author: your name
 * @Date: 2020-06-09 16:35:34
 * @LastEditTime: 2020-06-10 10:35:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\README.md
--> 
# 安装
```
npm install @raozi83/r-input
```
#使用
```
import '@raozi83/r-input'
```
```
<Rinput v-model="inputvalue" placeholder="密码" type='password' color="red" size="large"></Rinput>
```
#参数说明
- *placeholder（必选）:占位字符串
- type:输入框类型
- color:边框及文本颜色（默认blue，支持十六进制）
- size:输入框大小（默认large，支持large、small、数值）
