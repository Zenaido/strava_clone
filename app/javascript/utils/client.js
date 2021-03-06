import { ApolloClient } from 'apollo-client';
// cache
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';
import { InMemoryCache } from 'apollo-cache-inmemory';
// links
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, Observable,  } from 'apollo-link';
export const createCache = () => {
  const cache = new InMemoryCache();
  // if (process.env.NODE_ENV === 'development') {
  //   window.secretVariableToStoreCache = cache;
  // }
  return cache;
};

// getToken from meta tags
const getToken = () =>
  document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const token = getToken();
const setTokenForOperation = async operation =>
  operation.setContext({
    headers: {
      'X-CSRF-Token': token,
    },
  });
// link with token
const createLinkWithToken = () =>
  new ApolloLink(
    (operation, forward) =>
      new Observable(observer => {
        let handle;
        Promise.resolve(operation)
          .then(setTokenForOperation)
          .then(() => {
            handle = forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            });
          })
          .catch(observer.error.bind(observer));
        return () => {
          if (handle) handle.unsubscribe();
        };
      })
  );

const logError = (error) => console.error(error);
// create error link
const createErrorLink = () => onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    logError(`GraphQL - Error, ${{
      errors: graphQLErrors,
      operationName: operation.operationName,
      variables: operation.variables,
    }}`);
  }
  if (networkError) {
    logError(`'GraphQL - NetworkError' ${networkError}`);
  }
})

// app/javascript/utils/apollo.js
//...
// http link
const httpLink = new HttpLink({
    uri: '/graphql',
    credentials: 'include',
  })

  // export const schema = async () => {
  //   const schema = await introspectSchema(httpLink);
  
  //   const executableSchema = makeRemoteExecutableSchema({
  //     schema,
  //     link: httpLink,
  //   });
  
  //   return executableSchema
  // }
  export const createClient = (cache) => {
    return new ApolloClient({
      link: ApolloLink.from([
        createErrorLink(),
        createLinkWithToken(),
        httpLink,
      ]),
      cache,
    });
  };
  const client =  createClient(createCache());
 
  export default client;