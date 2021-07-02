import Header from "./components/Header/Header";
import Article from "./components/Article/Article";
import User from "./components/User/User";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="content">
				<Article />
				<User />
			</div>
		</div>
	);
}

export default App;
