/**
 * Created by zhaods on 2017/3/7 0007.
 */
var server=require('./server');
var router=require('./router');
var requestHandlers=require('./requestHandlers');

var handle={};
handle['/']=requestHandlers.start;
handle['/start']=requestHandlers.start;
handle['/upload']=requestHandlers.upload;

server.start(router.route,handle);
