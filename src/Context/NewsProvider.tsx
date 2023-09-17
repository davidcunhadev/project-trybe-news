import { NewsProviderType } from '../types';
import NewsContext from './NewsContext';

function NewsProvider({ children }: NewsProviderType) {
  const context = {
    // feuncoes aq
  };
  return (
    <NewsContext.Provider value={ context }>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
