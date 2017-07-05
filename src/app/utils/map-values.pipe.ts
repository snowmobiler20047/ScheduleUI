import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'mapValues'})
export class MapValuesPipe implements PipeTransform {
    transform(value: any, args?: any[]): Object[] {
        if(value == undefined)
            return;
        let keyArr: any[] = Object.keys(value),
            dataArr = [],
            keyName = args[0];

        keyArr.forEach((key: any) => {
            value[key][keyName] = key;
            dataArr.push(value[key])
        });

        if(args[1]) {
            dataArr.sort((a: Object, b: Object): number => {
                return a[keyName] > b[keyName] ? 1 : -1;
            });
        }

        return dataArr;
        // let returnArray = [];
        // if(value == undefined)
        //     return;
        // value.forEach((entryVal, entryKey) => {
        //     returnArray.push({
        //         key: entryKey,
        //         val: entryVal
        //     });
        // });

        // return returnArray;
    }
}