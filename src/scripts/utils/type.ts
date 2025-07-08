export type TDataCurrency = {
  conversion_rates: Record<string, number>;
  time_last_update_utc: string;
};
export type TResponseCurrency = {
  data: TDataCurrency;
};

export type TNewsDataArticles = {
  content: string;
  description: string;
  title: string;
  urlToImage: string;
  url: string;
};

export type TArrayNewsData = {
  articles: TNewsDataArticles[];
};

export type TNewsData = {
  data: TArrayNewsData
};
