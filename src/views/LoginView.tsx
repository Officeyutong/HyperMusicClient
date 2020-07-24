import * as React from 'react';
// import {StatelessComponent} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {StateType, makeLoginInfoUpdateAction} from '../manger';
import {connect} from 'react-redux';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
    width: 100,
  },
  box2: {
    flex: 2,
    backgroundColor: 'blue',
    width: 200,
  },
  box3: {
    flex: 1,
    backgroundColor: 'yellow',
    width: 300,
  },
});
type LoginViewStateType = StateType & {
  update: (token: string, server: string) => void;
};

const LoginView: React.FC<LoginViewStateType> = (props: LoginViewStateType) => {
  // props.
  const {login, update} = props;
  // React.useEffect(() => {
  //   ;
  // });
  console.log('rendering...');
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View>
          <Text>token: {login.token}</Text>
        </View>
        <View>
          <Text>server: {login.server}</Text>
        </View>
        <Button
          onPress={() => {
            console.log('Pressed!');
            update('my token', 'my server');
          }}
          title="qwq"
        />
      </View>
    </>
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
