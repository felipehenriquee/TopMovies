export class Movies {
    constructor(
      public backdrop_path: string,
      public id: number,
      public title: string,
      public original_title: string,
      public name: string,
      public original_name: string,
      public overview: string,
      public poster_path: string,
      public media_type: string,
      public adult: boolean,
      public original_language: string,
      public genre_ids: number[],
      public popularity: number,
      public release_date: string,
      public first_air_date: string,
      public video: boolean,
      public vote_average: number,
      public vote_count: number
    ) {}
  }
  