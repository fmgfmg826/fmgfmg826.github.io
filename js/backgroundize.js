// 在手机端显示的背景图片链接
const mobileBgImageUrl = "url('您的移动端背景图片URL')";
// 在电脑端显示的背景图片链接
const desktopBgImageUrl = "url('您的桌面端背景图片URL')";

// 根据设备设置背景图片
if (window.innerWidth < 768) {
  document.querySelector('#web_bg').setAttribute('style', `background-image: ${mobileBgImageUrl};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
} else {
  document.querySelector('#web_bg').setAttribute('style', `background-image: ${desktopBgImageUrl};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
}

// 设置banner背景
document.querySelector("#banner").setAttribute('style', 'background-image: none');
document.querySelector("#banner .mask").setAttribute('style', 'background-color: rgba(0,0,0,0)');