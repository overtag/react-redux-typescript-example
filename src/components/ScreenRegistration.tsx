import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ActionCreator } from 'typescript-fsa';

import { AppState } from '../store';
import {
  initAction,
  changeEmailAction,
  changeUrlAction,
  changeUserAction,
} from '../store/common/actions';
import {
  InitAction,
  ChangeEmailAction,
  ChangeUrlAction,
  ChangeUserAction,
} from '../store/common/types';

import { getEmail, getUser, getUrl } from '../store/common/selectors';

import { H2, Text1 } from './ui/text-default-styled';
import InputBorder from './ui/InputBorder';
import { ButtonLink } from './ui/ButtonLink';
import { Header } from './Header';
import { Footer } from './Footer';
import { InfoBlock } from './InfoBlock';
import { Title } from './Title';

const TextConditions = styled(Text1)`
  margin: 0 30px 15px;
`;

const InputBorderStyled = styled(InputBorder)`
  margin: 10px 10px 0;
`;

const Block = styled.div`
  font-family: 'Roboto-Light';
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fafafa;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 3px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
  max-width: 245px;
  align-self: stretch;
  min-height: 500px;
`;

const ButtonLinkStyled = styled(ButtonLink)`
  margin: 15px auto;
`;

interface Props extends Partial<MapStateToProps>, Partial<MapDispatchToProps> {}

interface MapStateToProps {
  user?: string;
  email?: string;
  url?: string;
}

interface MapDispatchToProps {
  initAction?: ActionCreator<InitAction>;
  changeEmailAction?: ActionCreator<ChangeEmailAction>;
  changeUrlAction?: ActionCreator<ChangeUrlAction>;
  changeUserAction?: ActionCreator<ChangeUserAction>;
}

class ScreenRegistration extends React.Component<Props> {
  changeUrl = (e: any): void => {
    this.props.changeUrlAction({ url: e.target.value });
  };

  changeEmail = (e: any): void => {
    this.props.changeEmailAction({ email: e.target.value });
  };

  changeUser = (e: any): void => {
    this.props.changeUserAction({ user: e.target.value });
  };

  render() {
    const { url, user, email } = this.props;

    return (
      <Block>
        <Header />
        <Main>
          <InfoBlock />
          <ColumnTwo>
            <Title />

            <InputBorderStyled
              key={'Input url'}
              placeholder='Введите ссылку на ваш аккаунт'
              onChange={this.changeUrl}
              defaultValue={url}
            />
            <InputBorderStyled
              key={'Input user'}
              defaultValue={user}
              placeholder='Имя и фамилия'
              onChange={this.changeUser}
            />
            <InputBorderStyled
              key={'Input email'}
              defaultValue={email}
              placeholder='Эл. Адрес'
              onChange={this.changeEmail}
            />
            <ButtonLinkStyled to={'/confirmation'}>Далее</ButtonLinkStyled>
            <TextConditions>Нажимая кнопку далее, вы принимаете наши условия.</TextConditions>
          </ColumnTwo>
        </Main>
        <Footer />
      </Block>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps): MapStateToProps => ({
  user: getUser(state),
  url: getUrl(state),
  email: getEmail(state),
});

const mapDispatchToProps = {
  initAction,
  changeEmailAction,
  changeUrlAction,
  changeUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenRegistration);
