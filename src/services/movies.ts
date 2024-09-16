import { Movies } from "../models/movies.models";
import { QueryParams, ResultWithPagination } from "../models/pagination.models";
import http from "./config/index";

export class MoviesRest {
  async getAll(params: QueryParams, type: string = "all"): Promise<ResultWithPagination<Movies>> {
    const result = await http.get(`trending/${type}/day`, { params });
    return result.data;
  }
}
