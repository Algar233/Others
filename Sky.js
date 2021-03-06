const url = `https://mgbsdk.matrix.netease.com/ma75/sdk/query_product?platform=ios&ff_channel=app_store`;
const method = `POST`;
const headers = {
'Accept' : `*/*`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/json`,
'Host' : `mgbsdk.matrix.netease.com`,
'User-Agent' : `Sky-iOS-Gold/187758 CFNetwork/1378.1 Darwin/22.0.0`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'X-Client-Sign' : `7c4d3acd0bfe8444a8909930c70356ae3b5c44e0df5f4eeb93c70b7f5b2ebcdb`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
