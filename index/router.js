/**
 * Created by zhaods on 2017/3/8 0008.
 */
function route(handle,pathname) {
    console.log('About to route a request for'+pathname);
    if(typeof handle[pathname]==='function'){
        handle[pathname]();
    }else {
        console.log('No request for'+pathname);
    }
}
exports.route=route;