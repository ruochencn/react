
#### react-input-groups 组件是手机输入密码或者验证码的组件

######  来源
[SCDN](https://blog.csdn.net/Lifestyles_/article/details/85335605)

#### 使用方法

#### 引入
- ```
    import reactInputGroups from 'reactInputGroups';

    export class Inputarea extends React.Component {
        constructor(props) {
            super(props);
            this.state = {

            };
            this.getValue = this.getValue.bind(this)
        }
        getValue(value) {
            console.log(value)
        }
        render() {
            return (
              <div>
                <reactInputGroups
                    getValue={this.getValue}
                    length={4}
                    type={'box'}
                />
                <reactInputGroups
                    getValue={this.getValue}
                    length={4}
                    type={'line'}
                />
              </div>
            );
        }
    }
```
