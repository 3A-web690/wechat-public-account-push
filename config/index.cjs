/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx2f6243b440fe8791',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '9ebd31e933a2fc3dddc48b975623c2ad',

  PROVINCE: '江西',
  CITY: '南昌',

  USERS: [
    {
      // 想要发送的人的名字
      name: '林炜杰',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o50nx7Hom_iRtYfop070EA_4BGcs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '8GE04SDwVtoyNgIor3Ttw_YETJGCZu2AqZpQGa22PPw	',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '测试1', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '测试2', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'RN3zlJ47riBNvFJWuYhzThp4P9t1CeXnJlHuC2EEQwk',

  CALLBACK_USERS: [
    {
      name: '开发者',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o50nx7PZOUm2TW1rrUiBU6YHplmg',
    }
  ],

}

module.exports = USER_CONFIG

