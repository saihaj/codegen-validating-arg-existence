export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: { input: any; output: any; }
};

/** Base connection for paginated results */
export type Connection = {
  /** Edges of current page */
  edges: Array<Maybe<Edge>>;
  /** Pagination helpers information */
  pageInfo: PageInfo;
};

/** Container of Node and the Cursor from the Node */
export type Edge = {
  /** Cursor to be used for pagination */
  cursor: Scalars['String']['output'];
  /** Node entity */
  node: Node;
};

/** Base node */
export type Node = {
  /** Node identifier */
  id: Scalars['ID']['output'];
};

/** Pagination helper information */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Cursor shorthand of the last node from current page */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Does the current connection have a next page */
  hasNextPage: Scalars['Boolean']['output'];
  /** Does the current connection have a previous page */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Cursor shorthand of the first node from current page */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetch a Release Chart by its UUID */
  releaseChart?: Maybe<ReleaseChart>;
};


export type QueryReleaseChartArgs = {
  id: Scalars['ID']['input'];
};

/** Release chart entity */
export type ReleaseChart = Node & {
  __typename?: 'ReleaseChart';
  /** Chart ranks of release chart */
  chartRanks: ReleaseChartRankConnection;
  /** UUID of Release chart entity */
  id: Scalars['ID']['output'];
};


/** Release chart entity */
export type ReleaseChartChartRanksArgs = {
  pagination?: ReleaseChartRankCursorConnectionArgs;
};

/** Release chart rank entity */
export type ReleaseChartRank = Node & {
  __typename?: 'ReleaseChartRank';
  /** Current ranking of release */
  currentRank: Scalars['Int']['output'];
  /** UUID of Release chart entity */
  id: Scalars['ID']['output'];
  /** Last ranking of release */
  rankLast?: Maybe<Scalars['Int']['output']>;
  /** Peak ranking of release */
  rankPeak?: Maybe<Scalars['Int']['output']>;
  /** Trending streak of release */
  trendingStreak: Scalars['Int']['output'];
};

/** Paginated connection of Release Chart Ranks */
export type ReleaseChartRankConnection = Connection & {
  __typename?: 'ReleaseChartRankConnection';
  /** Edges of current page */
  edges: Array<ReleaseChartRankConnectionEdge>;
  /** Pagination helpers information */
  pageInfo: PageInfo;
};

/** Edge of Release Chart Rank Connection */
export type ReleaseChartRankConnectionEdge = Edge & {
  __typename?: 'ReleaseChartRankConnectionEdge';
  /** Cursor to be used for pagination */
  cursor: Scalars['String']['output'];
  /** Release Chart Rank node */
  node: ReleaseChartRank;
};

/** Pagination paramaters for release chart ranks */
export type ReleaseChartRankCursorConnectionArgs = {
  /** Start forwards pagination since "after" cursor */
  after?: InputMaybe<Scalars['String']['input']>;
  /** Start backwards pagination since "before" cursor */
  before?: InputMaybe<Scalars['String']['input']>;
  /** Limit the amount of nodes to be fetched, to be used with "after", with a maximum of 51 nodes. */
  first?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  /** Limit the amount of nodes to be fetched, to be used with "before", with a maximum of 51 nodes. */
  last?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type AQueryVariables = Exact<{ [key: string]: never; }>;


export type AQuery = { __typename?: 'Query', releaseChart?: { __typename?: 'ReleaseChart', chartRanks: { __typename?: 'ReleaseChartRankConnection', edges: Array<{ __typename?: 'ReleaseChartRankConnectionEdge', node: { __typename?: 'ReleaseChartRank', id: string } }> } } | null };
