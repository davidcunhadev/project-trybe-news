export type ContextType = {
  newsResults: ItemsType[],
  releaseResults: ItemsType[]
  handleFavoriteNews: (news: ItemsType) => void
  favorites: ItemsType[]
};

export type NewsProviderType = {
  children: React.ReactNode;
};

export type NewsType = {
  count: number
  items: ItemsType[]
  nextPage: number
  page: number
  previousPage: number
  showingFrom: number
  showingTo: number
  totalPages: number
};

export type ItemsType = {
  data_publicacao: string
  destaque: boolean
  editorias: string
  id: number
  imagens: string
  introducao: string
  link: string
  produto_id: number
  produtos: string
  produtos_relacionados: string,
  tipo: string
  titulo: string
};

export type CardProps = {
  news: ItemsType
  handleFavoriteNews: (news: ItemsType) => void
};
