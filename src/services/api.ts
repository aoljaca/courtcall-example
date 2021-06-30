import { environment } from "@/environments/environment";
import axios, { AxiosRequestConfig } from "axios";

export default class API {
  // Control requests, authetication and headers

  static get baseURL(): string {
    return environment.baseURL;
  }

  static get headers() {
    // TODO: Not yet implemented
    return null;
  }

  static get requestOptions(): AxiosRequestConfig {
    // TODO: Not yet implemented
    return {
      headers: this.headers,
    };
  }

  static formatURL(url: string): string {
    return `${this.baseURL}/${url}`;
  }

  static async Get<T>(url: string): Promise<T> {
    // TODO: Not yet implemented
    return await axios.get(this.formatURL(url), this.requestOptions);
  }

  static async Post<T>(url: string, body: any): Promise<T> {
    // TODO: Not yet implemented
    return await axios.post(this.formatURL(url), body, this.requestOptions);
  }

  static async Put<T>(url: string, body: any): Promise<T> {
    // TODO: Not yet implemented
    return await axios.put(this.formatURL(url), body, this.requestOptions);
  }

  static async Delete(url: string): Promise<void> {
    // TODO: Not yet implemented
    return await axios.delete(this.formatURL(url), this.requestOptions);
  }
}
