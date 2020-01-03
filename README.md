# my-vue-ui-com

- 如何编写组件库打包上传npm

## 安装
- npm i my-vue-ui-com

## 使用
- 全局注册
- import myui from 'my-vue-ui-com'
- Vue.use(myui)

- 按需加载
-  import myui from 'my-vue-ui-com'
-  Vue.component(myUI.Button.name, myUI.Button)

## API:
-  | 参数     | 说明            | 类型    | 可选值                       |
-  | size     | 尺寸            | string  | medium / small / mini       |
-  | type     | 类型            | string  | primary / success / warning |
-  | disabled | 是否禁用状态	   | boolean |

