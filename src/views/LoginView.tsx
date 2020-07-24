import * as React from 'react';
import {useState} from 'react';
import {
  Container,
  Header,
  Form,
  Content,
  Input,
  Item,
  Label,
  Title,
  Body,
  Button,
} from 'native-base';
import {StateType, makeLoginInfoUpdateAction} from '../manger';
import {connect} from 'react-redux';
type LoginViewStateType = StateType & {
  update: (token: string, server: string) => void;
};

const LoginView: React.FC<LoginViewStateType> = (props: LoginViewStateType) => {
  const {login, update} = props;
  let [loading, changeLoading] = useState(false);
  return (
    <Container>
      <Header>
        <Body>
          <Title>HyperMusicClient 登录</Title>
        </Body>
      </Header>
      <Content>
        <Form>
          <Item fixedLabel>
            <Label>服务器地址</Label>
            <Input
              value={login.server}
              placeholder="http[s]://[server]:[port]"
              onChangeText={(str: string) => update(login.token, str)}
            />
          </Item>
          <Item fixedLabel>
            <Label>认证密钥</Label>
            <Input
              value={login.token}
              onChangeText={(str: string) => update(str, login.server)}
            />
          </Item>
          <Item>
            <Button disabled={loading} />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default connect(
  (state: StateType) => state,
  (dispatch) => ({
    update(token: string, server: string) {
      dispatch(makeLoginInfoUpdateAction(token, server));
    },
  }),
)(LoginView);
