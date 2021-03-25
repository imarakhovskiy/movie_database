import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux'

import Router from './router'
import store from './app/store'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false }
  }
});

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Router />
    </Provider>
  </QueryClientProvider>
);
