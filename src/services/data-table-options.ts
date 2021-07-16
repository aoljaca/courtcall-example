export interface FooterDataOptions {
  page: number;
  itemsPerPage: number;
  sortBy: string[];
  sortDesc: boolean[];
  groupBy: string[];
  groupDesc: boolean[];
  multiSort: boolean;
  mustSort: boolean;
}
export interface FooterPaginationOptions {
  page: number;
  itemsPerPage: number;
  pageStart: number;
  pageStop: number;
  pageCount: number;
  itemsLength: number;
}
export interface DataTableFooterOptions {
  disableItemsPerPage?: boolean;
  disablePagination?: boolean;
  firstIcon?: string;
  itemsPerPageAllText?: string;
  itemsPerPageOptions?: number[];
  lastIcon?: string;
  nextIcon?: string;
  options?: FooterDataOptions;
  pageText?: string;
  pagination?: FooterPaginationOptions;
  prevIcon?: string;
  showCurrentPage?: boolean;
  showFirstLastPage?: boolean;
}

class DataTableOptionsService {
  getFooterOptions(): DataTableFooterOptions {
    return {
      itemsPerPageOptions: [5, 10, 15, 20, 25],
    };
  }
}

export default new DataTableOptionsService();
