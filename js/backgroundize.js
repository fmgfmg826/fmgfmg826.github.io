// 在手机端显示的背景图片链接
const mobileBgImageUrl = "url('source\images\【哲风壁纸】傲娇猫咪-宠物壁纸元素.png')";

// 在电脑端显示的背景图片链接
const desktopBgImageUrl = "url('source\images\【哲风壁纸】傍晚路灯-山脉-水面.png')";

// 在手机端设置背景图片
if (window.innerWidth < 768) {
  document.querySelector('#web_bg').setAttribute('style', `background-image: ${mobileBgImageUrl};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
} else {
  // 在电脑端设置背景图片
  document.querySelector('#web_bg').setAttribute('style', `background-image: ${desktopBgImageUrl};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
}

// 设置banner的背景图片为空
document.querySelector("#banner").setAttribute('style', 'background-image: none');

// 设置banner的.mask背景颜色透明
document.querySelector("#banner .mask").setAttribute('style', 'background-color: rgba(0,0,0,0)');