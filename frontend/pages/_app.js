import { createClient, Provider } from 'urql';
import '../styles/globals.css';

const client = createClient({ url: process.env.NEXT_PUBLIC_API_URL });

function MyApp({ Component, pageProps }) {
	return (
		<Provider value={client}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
