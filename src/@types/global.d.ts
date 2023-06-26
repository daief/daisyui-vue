declare const VERSION: string;
declare const CLASSNAME_UNIQUE: string;

interface __C {
  (template: TemplateStringsArray): string;
  (...args: Array<string | Record<string, any>>): Array<
    string | Record<string, any>
  >;
}

// compiled by babel plugin
declare const __c: __C;
