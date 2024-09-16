export class QueryParams {
  constructor(
    public page: number,
    public sort_by: string = "popularity.desc"
  ) {}
}

export class ResultWithPagination<T> {
  constructor(
    public page: number,
    public results: T[] = [],
    public total_pages: number,
    public total_results: number
  ) {}
}
