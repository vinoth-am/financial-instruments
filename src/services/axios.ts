import axios from "axios";
import { IApiService } from "../app/components/Table/types";

export default class ApiService {
  public get<T = void>(): Promise<T> {
    const instance = this.getAxiosInstance();
    return new Promise<T>(async (resolve, reject) => {
      try {
        const result: IApiService = await instance.get("./sampleData.json");
        resolve(result.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  private getAxiosInstance() {
    const instance = axios.create();
    return instance;
  }
}
