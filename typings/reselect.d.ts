declare module Reselect {
    function defaultMemoize(func: Function, equalityCheck: any): any;
    function getDependencies(getDependencies: Function[]): any;
    function createSelectorCreator(memoize: any, ...memoizeOptions: any[]);
    function createSelector(...args: any[]): any;
    function createStructuredSelector(selectors: any, selectorCreator: any): any;
}

declare module "reselect" {
    export = Reselect;
}
