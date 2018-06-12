import { Pipe, PipeTransform } from '@angular/core';
import { ConfigurationService } from '../../configuration/configuration.service';

@Pipe({
    name: 'languagePipe',
    pure: false
})

export class LanguagePipe implements PipeTransform {
    constructor(private configService: ConfigurationService) {
    }
    transform(items: any[], selector: string): string {
        let configId: number = parseInt(this.configService.config.languageIndex) - 1;
        let languageId: number;
        if (selector == undefined || selector == '') {
            languageId = configId;
        } else {
            languageId = parseInt(selector) - 1;
        }

        if (items[languageId] == undefined || items[languageId] == '') {
            return items[configId];
        } else {
            return items[languageId];
        }
    }

}