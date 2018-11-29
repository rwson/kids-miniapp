export default class IndexPage {

    data = {
        list: []
    }

    static useComponent(component) {
    }

    onShow() {
        wx.request({
            url: 'https://cnodejs.org/api/v1/topics',
            success (res) {
                console.log(res.data)
            }
        });
    }

};