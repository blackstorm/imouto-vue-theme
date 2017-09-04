// import api from '../api';

// 保存文章下用户的评论
export const savePostCommentAction = ({dispatch, commit}, commentData) => {
  dispatch('setBtnDisableValueAction', '提交中...');
  console.log(commentData);
  console.log('请求服务器');
  dispatch('setSuccessTimeOutInitBtn', {second: 60, btnValue: '评论'});
  // dispatch('setBtnDisableValueAction', '提交中...').then(() => {
  //   console.log('ko');
  // });
};
