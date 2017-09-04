import Mock from 'mockjs'; // mockjs 不用请求后端
import {API_ROOT} from '../config';

var Random = Mock.Random;

Random.cname();
Random.image('200x100');
Random.cparagraph(1, 2);
Random.cparagraph();

Mock.mock(API_ROOT + '/index', 'get', {
  'code': '200',
  'msg': 'success',
  'data|6-10': [{
    'title': '@cparagraph(1, 2)',
    'category|+1': ['分类1', '分类2', '分类3', '分类4'],
    'created': '@datetime',
    'text': '@cparagraph()',
    'cover': '@image',
    'pid|+1': 1,
    'look|1-10000': 1
  }]
}).mock(API_ROOT + '/p/1', 'get', {
  'code': '200',
  'msg': 'success',
  'data': {
    'title': '@cparagraph(1, 2)',
    'category|+1': ['分类1', '分类2', '分类3', '分类4'],
    'created': '@datetime',
    'text': '@cparagraph()',
    'cover': '@image',
    'pid|+1': 1,
    'look|1-10000': 1
  }
});

Mock.setup({
  timeout: '500-1200'
});

export default Mock;
