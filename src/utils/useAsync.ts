import * as React from 'react';

import { log } from '@utils/log';

export const useAsync = (func: (...[]) => Promise<any>, fetchParam: any[], inputs: any[]): void => {
    React.useEffect(() => {
        func(...fetchParam).catch(log);
    }, inputs);
};