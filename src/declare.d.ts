import * as React from 'react';

export declare class Character {
    cid: string;
    showing: string;
    enabled: boolean;
    column: number;
    row: number;
}

export declare interface BaseProps extends React.Props<any>{
    key?: string | number;
    className?: string;
}
