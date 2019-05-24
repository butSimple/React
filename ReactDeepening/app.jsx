import {ThemeContext, themes} from './theme-context';
import ThemeButton from './themed-button';

function Toolbar(props){
  return(
    <ThemeButton onClick ={props.changeTheme}>
      Change Theme
    </ThemeButton>
  );
}


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // ThemeProvider 안에 있는 ThemedButton은 state로부터 theme 값을 읽지만
    // Provider 밖에 있는 ThemedButton는 기본값인 dark를 사용합니다.
    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('ex1'));
