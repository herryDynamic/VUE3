export const GETTREEDATA = function (e: any) {
    return req("post", "/251280/123", { qwe: e });
  };
  
  export const three = function (e: string) {
    return req("get", "/251280/12345?qwe=" + e);
  };
  