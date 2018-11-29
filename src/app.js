export default {
    "pages": [
      "pages/index/index",
    ],
    "window": {
      "navigationBarTextStyle": "black",
      "navigationBarTitleText": "FUCK",
      "navigationBarBackgroundColor": "#F8F8F8",
      "backgroundColor": "#F8F8F8"
    },
    "tabBar": {
      "color": "#7A7E83",
      "selectedColor": "#3cc51f",
      "borderStyle": "black",
      "backgroundColor": "#ffffff",
      "list": [{
        "pagePath": "pages/index/index",
        "iconPath": "image/icon_component.png",
        "selectedIconPath": "image/icon_component_HL.png",
        "text": "组件"
      }, {
        "pagePath": "pages/index/index",
        "iconPath": "image/icon_API.png",
        "selectedIconPath": "image/icon_API_HL.png",
        "text": "接口"
      }]
    },
    "networkTimeout": {
      "request": 10000,
      "connectSocket": 10000,
      "uploadFile": 10000,
      "downloadFile": 10000
    },
    "debug": false
  }
  