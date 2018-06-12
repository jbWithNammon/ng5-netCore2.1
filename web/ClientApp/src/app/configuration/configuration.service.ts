import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { IConfiguration } from '../models/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigurationService {
	private readonly configUrlPath: string = 'ClientConfiguration';
	private configData: IConfiguration;
	constructor(
		private http: HttpClient,
		@Inject('BASE_URL') private originUrl: string) {}

	loadConfigurationData(): Promise<IConfiguration> {
		return this.http.get(`${this.originUrl}${this.configUrlPath}`)
			.toPromise()
			.then((response: Response) => {
				this.configData = <IConfiguration>response;
				return this.configData;
			})
			.catch(err => {
				return Promise.reject(err);
			});
	}

	get config(): IConfiguration {
		return this.configData;
	}
}