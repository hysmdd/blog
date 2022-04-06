/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","1df7087ba0d038cdc3f5ed2b474c4b3c"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","87218445df0baa85a25683e137ea4fce"],["E:/qinhao/hexo/public/AOP_1/index.html","7666150655eea77b0763ed445950b6c2"],["E:/qinhao/hexo/public/AOP_2/index.html","66e8ca44b66eef50f3cc7d334b3b3ef3"],["E:/qinhao/hexo/public/AOP_3/index.html","5d9acf45b9fbd0c453cb8559956f4c43"],["E:/qinhao/hexo/public/Algorithm_1/index.html","229d0df24174c1abe6dfee0f83eb3d68"],["E:/qinhao/hexo/public/Base/index.html","74cf42e53e74005725d94682ed136de5"],["E:/qinhao/hexo/public/ByteDanceVerify.html","45280f62d51bd7935c35b3a550465c45"],["E:/qinhao/hexo/public/CPU_Register/index.html","09262db7fa251e90fd83693823ae0785"],["E:/qinhao/hexo/public/C_Programming_1/index.html","70dfac7c5081dd3d56dfe4331c4c51ea"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","7009b598db51b7dfe191ce5ede6e047e"],["E:/qinhao/hexo/public/FileDownload/index.html","ce7e4a87220417f0aad8a27ac09c4040"],["E:/qinhao/hexo/public/Files_and_directories/index.html","b6eebf610053b17968715a20e11b3854"],["E:/qinhao/hexo/public/FixedTools/index.html","f53f4dd3b65a8e7f2700e9be84bcc0f1"],["E:/qinhao/hexo/public/GRE-VPN/index.html","bcd31ef9703ee947ee7fb4a3f0ce0d9f"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","805dd23847aa240a080ab91a12d6eb34"],["E:/qinhao/hexo/public/GSM/index.html","a0b2ab4031b40d60abc7e02b577ccc1b"],["E:/qinhao/hexo/public/ICIC/index.html","df85051499a02df1ddc577c1f467a00e"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","4bbe1fc54e9ab533b2b0240020f20a72"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","7613a19ce70d548026b82676a7229c75"],["E:/qinhao/hexo/public/JDBC/index.html","abfc71abf83a7f2b15cf27ef69a4dfa9"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","2438c335734e840ecfbb5504695560c5"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","e6ccea68587800678d86bbc7163f0167"],["E:/qinhao/hexo/public/LTE/index.html","21f5aacb20f10eb1253bb5f84439ff8e"],["E:/qinhao/hexo/public/Layer/index.html","f8e15ee36fc2b1635fe2cf8be70b93b3"],["E:/qinhao/hexo/public/Linux_often_use/index.html","b4afe12e45a35ed17f17854788a6ca02"],["E:/qinhao/hexo/public/MIMO/index.html","bec2e3438672ed11cc2807479dcca6dc"],["E:/qinhao/hexo/public/MySQL/index.html","94c273d0052834eb9af72cc5d3305bca"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","4fec37e96b5b09a5b829b5ea756782bb"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","66b6caa309a9823ec700fddbf678a6df"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","c363b7b20b0beace5728ff222d634eeb"],["E:/qinhao/hexo/public/NB-IoT/index.html","e523b8da58a684b5d20d2c79ef1e97cf"],["E:/qinhao/hexo/public/Network_Access/index.html","f2f4cfd7431c96e6eff26108c8b4575a"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","bd3982fd10f82e5fb7cfacd181da1f1d"],["E:/qinhao/hexo/public/OFDMA/index.html","d4c0909734400725a3c38d31c5398f61"],["E:/qinhao/hexo/public/OLT_command/index.html","7fbce16fac71af1aa48e5082d9ee248a"],["E:/qinhao/hexo/public/OverLoad_1/index.html","4e87d6c38387483953d0029c442251c1"],["E:/qinhao/hexo/public/PlatformTransactionManager/index.html","5d616a31f209915bf2b5ef33c217537c"],["E:/qinhao/hexo/public/Python-3/index.html","f82ab8518bfe8ad2932d222c229ebaba"],["E:/qinhao/hexo/public/Python-4/index.html","658026440d036731ba39afbda0d0bb05"],["E:/qinhao/hexo/public/Python-5/index.html","f0150c4bcfd3af6ef925a8461cbdf947"],["E:/qinhao/hexo/public/PythonUdp/index.html","0f5e0691689ded9b0fb2f769b427121c"],["E:/qinhao/hexo/public/Python_basic/index.html","7d95fbc628189f7418941f1a3ec7ca27"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","10738648c52830b0e368819bb3416247"],["E:/qinhao/hexo/public/Python_variable/index.html","acece49c7bfba4c85e18c795a6678705"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","1bbf504b0a8733a9567965dfba92a4ee"],["E:/qinhao/hexo/public/TCP/index.html","290ac6d3d324a038172fb9cd18c67f0d"],["E:/qinhao/hexo/public/TCP_client/index.html","e024353a151c88f4c7812156e7a927b3"],["E:/qinhao/hexo/public/TCP_server/index.html","922250a9f82e68a572d8776ef2e647bd"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","7b64fef9468a70b30d6d3fb2bd4e7ec0"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","402838550c3fbdb4d1e9cae7d233bf44"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","c28cbcbe6f5d6f507322e1e636298c46"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","a8edf6618190217eaeddef55c5dfc441"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","f1049ec4561c6ce1edb9b22ef45c1e12"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","5eae2027e66ef9337ffa276848e4dcf4"],["E:/qinhao/hexo/public/about/index.html","dc72aa6f4a2c81166aff94850a52111a"],["E:/qinhao/hexo/public/acl/index.html","03885339d090e59190be596b648e0d53"],["E:/qinhao/hexo/public/archives/2020/01/index.html","4dacd30edefe4fa782f2227e56959887"],["E:/qinhao/hexo/public/archives/2020/02/index.html","9bd54fd1e8a4b629b90db0b0330cd75b"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","3687985b8394a22cbb89b27158362db9"],["E:/qinhao/hexo/public/archives/2020/03/index.html","bc9fc671c98f87b22d1919f2b1851249"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","4be21be1187d62e059e55d0c9db89773"],["E:/qinhao/hexo/public/archives/2020/04/index.html","99c8780e58defc68ac8df598fbe2f558"],["E:/qinhao/hexo/public/archives/2020/05/index.html","0dac8fdd492fc85fa43d4d1ee6536742"],["E:/qinhao/hexo/public/archives/2020/06/index.html","3c66afa898b41dbede9958ff1504bdb2"],["E:/qinhao/hexo/public/archives/2020/07/index.html","db8cf38d4345a9de972834c915dbe082"],["E:/qinhao/hexo/public/archives/2020/08/index.html","6ffaeefdce08a6987c1be02babe225b1"],["E:/qinhao/hexo/public/archives/2020/10/index.html","21865f8b61bf7f87df6c87593e01790a"],["E:/qinhao/hexo/public/archives/2020/11/index.html","a4dbef243abbff50d62e0971a0a33d2c"],["E:/qinhao/hexo/public/archives/2020/index.html","c23db6a781c362a105f23ca5af4f93f1"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","b81860d252b474fa38a6fc8d9fc4b3db"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","3422413c2f35dffce413e6aae1a6c1ba"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","10138363401c3c7d1d5b9aa62656831d"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","98afd6aab8fb83dd82b27edff151ec08"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","7db1948628531871ea93316d8728e500"],["E:/qinhao/hexo/public/archives/2021/03/index.html","aa42d3f260abe3ac358d4fc87abbba9a"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","d53921cb188730e0e63a7610ed56d948"],["E:/qinhao/hexo/public/archives/2021/04/index.html","b11ffd840e7bd0bb821630018e5eb050"],["E:/qinhao/hexo/public/archives/2021/05/index.html","051f75fc4dead5d83959f081ba1845af"],["E:/qinhao/hexo/public/archives/2021/06/index.html","24ced6bb779d03e8dd86b6ba5e3f39e1"],["E:/qinhao/hexo/public/archives/2021/07/index.html","f9c7bdb96bbc96541f7ecc88e4fcf2ed"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","84b0a76be1cd3165a435d56a596d56f2"],["E:/qinhao/hexo/public/archives/2021/08/index.html","3d1fc3166e6055c146ef216e0d8ad796"],["E:/qinhao/hexo/public/archives/2021/09/index.html","91b225311ce78210a72677504866980f"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","ef771aef925573f734d233c36fa38953"],["E:/qinhao/hexo/public/archives/2021/10/index.html","8f151247f45e79ace1be44322038feb5"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","aee3b3cc1adc65a39f6b6ebf47e4f2fd"],["E:/qinhao/hexo/public/archives/2021/index.html","741a0bf0a1299992a4e75568f8eba5e7"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","7ae5e66d6c0bca25c62fabd9b96cb223"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","5da6422f866796ffc494a93e951f4a0c"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","30f4a42823396adb308d61f52e5681f7"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","bb696198fa5ee4e2a05abf468442789b"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","d791470c58505ff59106c0259bdbf07c"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","986b5c55a9e55140c0a190fac71251c3"],["E:/qinhao/hexo/public/archives/2022/01/index.html","f700b0808426d1f8334ac07e6549eb97"],["E:/qinhao/hexo/public/archives/2022/index.html","0c09622bbef6711a65ec3a1b1a3b13a4"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","c92d0f75bb3eedeadb8dd1ce80361cdd"],["E:/qinhao/hexo/public/archives/index.html","5f103d7e21bdd7cdedd1344c02ead2cd"],["E:/qinhao/hexo/public/archives/page/10/index.html","adc247d313ff3d8615d69d37695438f0"],["E:/qinhao/hexo/public/archives/page/11/index.html","adc247d313ff3d8615d69d37695438f0"],["E:/qinhao/hexo/public/archives/page/12/index.html","adc247d313ff3d8615d69d37695438f0"],["E:/qinhao/hexo/public/archives/page/13/index.html","94b92ec2b21a684a715f454a1c37dc07"],["E:/qinhao/hexo/public/archives/page/2/index.html","5f103d7e21bdd7cdedd1344c02ead2cd"],["E:/qinhao/hexo/public/archives/page/3/index.html","5f103d7e21bdd7cdedd1344c02ead2cd"],["E:/qinhao/hexo/public/archives/page/4/index.html","5f103d7e21bdd7cdedd1344c02ead2cd"],["E:/qinhao/hexo/public/archives/page/5/index.html","be9bba1efbcec29540c8d656d662653b"],["E:/qinhao/hexo/public/archives/page/6/index.html","be9bba1efbcec29540c8d656d662653b"],["E:/qinhao/hexo/public/archives/page/7/index.html","be9bba1efbcec29540c8d656d662653b"],["E:/qinhao/hexo/public/archives/page/8/index.html","be9bba1efbcec29540c8d656d662653b"],["E:/qinhao/hexo/public/archives/page/9/index.html","adc247d313ff3d8615d69d37695438f0"],["E:/qinhao/hexo/public/artitalk/index.html","338cee9170df6a90cc587b1a9b5f14e9"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","456189067a385ff0e7d50d342201e04a"],["E:/qinhao/hexo/public/bitwarden/index.html","61b99ff04d10d453f32b58392043fc3a"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","c1d5b2eba1bec0b63960035ac9007105"],["E:/qinhao/hexo/public/c-11/index.html","638d18c9a48c0c82c31ab336d5d8ee72"],["E:/qinhao/hexo/public/c_1/index.html","a6c820512cbd24933aaaec10a08ca4fb"],["E:/qinhao/hexo/public/c_10/index.html","24449cdac78e3a66531a5f57a368f867"],["E:/qinhao/hexo/public/c_2/index.html","f1bf7297c6cbb551794f3471895122fa"],["E:/qinhao/hexo/public/c_3/index.html","a930794bad5ea09f08a518bcec3ea76f"],["E:/qinhao/hexo/public/c_4/index.html","9fbb19e6094ee404c7045523afab3976"],["E:/qinhao/hexo/public/c_5/index.html","50327263f73921a1e128462f2b13eda9"],["E:/qinhao/hexo/public/c_6/index.html","854b052bdaf1656c8b2fe1414466a51d"],["E:/qinhao/hexo/public/c_7/index.html","d7724e3499f486e0fe7c1f91ccfdffa8"],["E:/qinhao/hexo/public/c_8/index.html","e5924d8ef09b90ff36d20d2225bdbdaf"],["E:/qinhao/hexo/public/c_9/index.html","c7ee194bc6a150c67dc125f7e46107ea"],["E:/qinhao/hexo/public/categories/C语言/index.html","24ed3fdcdde6e0cc8352e0c57e314b2d"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","34647a4a9834b096f593f455328b034f"],["E:/qinhao/hexo/public/categories/Java/index.html","0cc0549353bccfde1da950958f4a5032"],["E:/qinhao/hexo/public/categories/Java/page/2/index.html","872adce7779a031f9f1a98e40fdb9d56"],["E:/qinhao/hexo/public/categories/Linux/index.html","716652175749cf86e801d3e553d36afb"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","196d68999d1ee63ef439ec20c2f21c1c"],["E:/qinhao/hexo/public/categories/Python/index.html","a0de7f8f919839af87433a5623409691"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","5739f5d5c0506f90aeaccafdae701081"],["E:/qinhao/hexo/public/categories/交换机/index.html","7923a5d81084e48f9433bdd35e525fa1"],["E:/qinhao/hexo/public/categories/前端学习/index.html","ed13b3a2db8807b890f9f140ff3feb6b"],["E:/qinhao/hexo/public/categories/华为认证/index.html","27883e38fa6e00373838e909418aad6e"],["E:/qinhao/hexo/public/categories/小技巧/index.html","9d6349411c81d68af6dfe58c05f260f7"],["E:/qinhao/hexo/public/categories/操作系统/index.html","6cc1ced40dc8ad61c12a05510efe869b"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","500a74cfc9ed66cb6c8050cebd545cff"],["E:/qinhao/hexo/public/categories/数据库/index.html","6900e5ca054cc63158d4fcb3f7f166ee"],["E:/qinhao/hexo/public/categories/数据结构/index.html","bc36ece97ba060ad8275a9cb9c438f15"],["E:/qinhao/hexo/public/categories/服务器/index.html","8c8d2c06a2b53371b315b3ceccf4e7f0"],["E:/qinhao/hexo/public/categories/算法基础/index.html","4c857cd3693f2824e25d6e43466c5909"],["E:/qinhao/hexo/public/categories/网络安全/index.html","12c84c50bb7eb6434c82402747aef78a"],["E:/qinhao/hexo/public/categories/股票知识/index.html","dfab85dc297a32aa6602b5963c420c44"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","230e8a6a764b09a9fae648b384330546"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","04883a8e9b7000905a0974c445799866"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","cf55dd63380e84ba551fe09cd4092284"],["E:/qinhao/hexo/public/categories/软件破解/index.html","6e1b988b51153cb5bcc4028fadab3086"],["E:/qinhao/hexo/public/categories/通信技术/index.html","1aa885d0e7237f177c9f3185e2078acf"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","5d390bba33611e4b8480e7e7fd765436"],["E:/qinhao/hexo/public/category/index.html","80502f5cc12d00fdddf133f6ce52ea5e"],["E:/qinhao/hexo/public/cinemas/index.html","7de5a043b69918e9be66100aced1267c"],["E:/qinhao/hexo/public/color/index.html","052f8b09685b8fc3051fed1345401a42"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","374d421025ec8f219ee1ba2ee1eda718"],["E:/qinhao/hexo/public/computer_network_basics/index.html","67e8d09931b0cfdf62700aa2bbe95c6a"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","591961a295323ee497bb8f74fc6a4327"],["E:/qinhao/hexo/public/dataStructure-1/index.html","027d7799357a14c2f733b24e3c6a1c23"],["E:/qinhao/hexo/public/dataStructure-2/index.html","f4800dd640ed2f4ec211c4b90086b470"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","0dd8c02dbe3f0d582b1a52a1a00ed8af"],["E:/qinhao/hexo/public/donate/drinks/script.js","516bc286d1c162bf09c806066fda4171"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","12257cdd87244e6f517e5283e50f6c14"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","85c8c06bbd84b09cfaffd63bf13fec61"],["E:/qinhao/hexo/public/friends/index.html","81584d584f68471a8bb00891233550fc"],["E:/qinhao/hexo/public/gallery/index.html","b52fb8e415245d29eef65a4df9c99c36"],["E:/qinhao/hexo/public/gallery/myphotos/index.html","d974b8c127e44a9acd23dc3731e55348"],["E:/qinhao/hexo/public/gallery/reset/index.html","cdae19eb677f2e727646f80372c7048c"],["E:/qinhao/hexo/public/gcc/index.html","efea6a50f0c59831c1a0590e883567eb"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","1099e0e6cc0e50901eb83623b0407c1b"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","210d6e6f98b9da48a51c745d1d207a8b"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","2c082327002836dea179aff285d6ee27"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","27edb56190c25de8444e67072d114900"],["E:/qinhao/hexo/public/linux/index.html","bd878a12630105f388248f05bf29951e"],["E:/qinhao/hexo/public/login_demo/index.html","20d43f195fd8105d2622db42e5d77c6c"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","ea5b4ff5dabe4b2bcdffb3163d28a760"],["E:/qinhao/hexo/public/memory_save_number/index.html","6a0dbe5c94789edf2f18742e7205a15f"],["E:/qinhao/hexo/public/mobile_communication/index.html","db25155a9e6465a73f43af7dc38ec494"],["E:/qinhao/hexo/public/movies/index.html","40ad7fa0849d36ea6abbac46a7d52449"],["E:/qinhao/hexo/public/mylist/index.html","c459f12ac89bdda2ca105459bcaf4395"],["E:/qinhao/hexo/public/myphotos/index.html","a900910bea36e26e3d751e59f1cc4fbd"],["E:/qinhao/hexo/public/mysql-install/index.html","02fa4a35b64597640a75798a26d09f1a"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","f908b304ed5d93965ec0a86f6b2a4084"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","8f148ea6cd7d846a7b0ff3bc1038f570"],["E:/qinhao/hexo/public/mysql_question_1/index.html","5cb6fd13631db6ab505a0be1ba0c8f8c"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","91de4977098b21ff57b9d5c224737287"],["E:/qinhao/hexo/public/not-allow-F12/index.html","23c2e66413482fa7e9d6cac7b6e0b66d"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","ae9cbd2f190b381ce057a0348214eefc"],["E:/qinhao/hexo/public/page/10/index.html","a778c764739b32ee90bae479599a50d3"],["E:/qinhao/hexo/public/page/11/index.html","f85a37e48e21e38996fabcd2875bbe7c"],["E:/qinhao/hexo/public/page/12/index.html","6803b56b9cf5a17348ccf12bbabb6303"],["E:/qinhao/hexo/public/page/13/index.html","44c4e893d5b0a5265802641231cb7ac9"],["E:/qinhao/hexo/public/page/2/index.html","00bef5ac83cecb9afdeb2f6779372454"],["E:/qinhao/hexo/public/page/3/index.html","a12aba7f2442ed3201f6fa0f04660c25"],["E:/qinhao/hexo/public/page/4/index.html","5a270176aafa5f4aec8217cd4e93e2a3"],["E:/qinhao/hexo/public/page/5/index.html","12e69a6524eb29d3eb3759553ac3f18d"],["E:/qinhao/hexo/public/page/6/index.html","36d965125040ee288e89ceb0395f9ebb"],["E:/qinhao/hexo/public/page/7/index.html","a848a068610ccbb01deb151cacff6a7d"],["E:/qinhao/hexo/public/page/8/index.html","d967ce1bf5a9e4e8dc9e97c826722757"],["E:/qinhao/hexo/public/page/9/index.html","487ec1c552e604aafb071f90911ca00b"],["E:/qinhao/hexo/public/python-2/index.html","78b14d6be945bebf0b83e4977c39ce12"],["E:/qinhao/hexo/public/ssh/index.html","d30bebd3323f1b12e5f0f87788b7de92"],["E:/qinhao/hexo/public/stock_1/index.html","ede45adf65eaa362ce4c4530d61b112f"],["E:/qinhao/hexo/public/stock_10/index.html","538e7b7de942d3dd76e134818095213a"],["E:/qinhao/hexo/public/stock_11/index.html","cd84ff5f0a983a3d2b15f3fd716ed0e2"],["E:/qinhao/hexo/public/stock_12/index.html","4b3e785029932f15dd009a7371af0624"],["E:/qinhao/hexo/public/stock_13/index.html","bf97d90a1cc1a5a3c740e57a7599312b"],["E:/qinhao/hexo/public/stock_14/index.html","52aa1de764931ffe6db6aa111e4c81da"],["E:/qinhao/hexo/public/stock_15/index.html","adab1c74cc040359f6412a3fe722c059"],["E:/qinhao/hexo/public/stock_2/index.html","2d02cdb06fdb589b1fba4a82ffad03ff"],["E:/qinhao/hexo/public/stock_3/index.html","3e18d00624787d2bbbdfca3e12c04c15"],["E:/qinhao/hexo/public/stock_4/index.html","319f52e997c509ae195f043762df3aa1"],["E:/qinhao/hexo/public/stock_5/index.html","dd15773003af54f42f759fd28c3e40c0"],["E:/qinhao/hexo/public/stock_6/index.html","9ef51abdec3d9625eb74e125e2a24765"],["E:/qinhao/hexo/public/stock_7/index.html","a633b96a8d9ce8098034898c26c85c43"],["E:/qinhao/hexo/public/stock_8/index.html","548edb7c1d3263ce8374471684e202cd"],["E:/qinhao/hexo/public/stock_9/index.html","17188abf80ef0293d23740139d54b6fb"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","5af9a0db46bfb2fb3c9630c9f02c574b"],["E:/qinhao/hexo/public/sw-register.js","11066a014ee2a80f1c8507c2cc608584"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","b9ca1069feb2ee312b1928cde949f12d"],["E:/qinhao/hexo/public/system1/index.html","6511d5f5590a8a0947bbf0988c582d04"],["E:/qinhao/hexo/public/system10/index.html","b9b039ba1056b3d799f2ffa1e201ce4d"],["E:/qinhao/hexo/public/system11/index.html","e0ec763c7f0fbde55b1a286ba8306f17"],["E:/qinhao/hexo/public/system12/index.html","9283ea554123908e7a2853006cc6722c"],["E:/qinhao/hexo/public/system2/index.html","5ac7bb7dfa5920329f16d14b38646a2c"],["E:/qinhao/hexo/public/system3/index.html","4bbda369cdef5549847a21fa512a5824"],["E:/qinhao/hexo/public/system4/index.html","d68943cca3b342094d6e2c58f88dd957"],["E:/qinhao/hexo/public/system5/index.html","13d4ceab5cc43a4735a755ae3426764c"],["E:/qinhao/hexo/public/system6/index.html","85c139fcc2ea74a90e480930387fe993"],["E:/qinhao/hexo/public/system7/index.html","f625af2d539271d7bb72a966fb14e897"],["E:/qinhao/hexo/public/system8/index.html","11920f411c537ab6435e223943964695"],["E:/qinhao/hexo/public/system9/index.html","b604361184645eddf385ec6568acd48e"],["E:/qinhao/hexo/public/system_info/index.html","00d9533cb6b26469807acfb35ac376ae"],["E:/qinhao/hexo/public/tags/index.html","f6653edeeaf8bd0a5443dd7a7e4f7a5c"],["E:/qinhao/hexo/public/transactionManager/index.html","8c70376b7c21cdbee3d8feed206fc47b"],["E:/qinhao/hexo/public/utils/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","ecce2a27746857ab730c616aa46e1402"],["E:/qinhao/hexo/public/wireless_radio/index.html","d25b172129809684a59de233ae0585c7"],["E:/qinhao/hexo/public/wireless_word/index.html","beec97431577877bc25f3ce12d9b0d94"],["E:/qinhao/hexo/public/xml/index.html","e855071d791fdd73987c2597d2ea9a8a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







