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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","66f7f4d319e3fcf44e941589ea6cee54"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","34d188f04158d4931d9bab7e4eec4ea9"],["E:/qinhao/hexo/public/AOP_1/index.html","3a3063c22c2125b8088f694181e5a505"],["E:/qinhao/hexo/public/AOP_2/index.html","5b252b48da707767f54beeffd85483e1"],["E:/qinhao/hexo/public/AOP_3/index.html","9d5b8a850d14e7fca0a448a31fadd839"],["E:/qinhao/hexo/public/Algorithm_1/index.html","ca360849fa176e199f86060e76d898d1"],["E:/qinhao/hexo/public/Base/index.html","5e1cdc2e66e5b656bc411969de3fb367"],["E:/qinhao/hexo/public/ByteDanceVerify.html","e444dfe9d12383f898439dab62100847"],["E:/qinhao/hexo/public/CPU_Register/index.html","1e95884306d2d9784a4ba5fd4918e18a"],["E:/qinhao/hexo/public/C_Programming_1/index.html","d58dd4f9385bac8b0c4691fb9b40218a"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","f121ccc21834ec948411268971848d3d"],["E:/qinhao/hexo/public/FileDownload/index.html","e11a9978ab1bd931e6ecd75a2e5f34c9"],["E:/qinhao/hexo/public/Files_and_directories/index.html","9b6725335bfc229c6cdfda3df4ef7a20"],["E:/qinhao/hexo/public/FixedTools/index.html","03f6778ad82c25f3ab02e373eeca2709"],["E:/qinhao/hexo/public/GRE-VPN/index.html","a15fdda7737f0f72b38304a59b101ecc"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","a0c602bbb265962395ec598bc09152d5"],["E:/qinhao/hexo/public/GSM/index.html","08df15d5deeb17346675cd212ded204a"],["E:/qinhao/hexo/public/ICIC/index.html","5d33e1787745af92284244aaeef0fa7d"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","6549dc070ac9c02bdb38d0c83a87f565"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","c032919093e9efeba4de3eb844e6a1ea"],["E:/qinhao/hexo/public/JDBC/index.html","28abc3976dadb019dc08a7a1eb850768"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","6e4d32542688fc9260f7eae2bead8c2e"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","171f84fa33e99c650ee27d88c5cf667d"],["E:/qinhao/hexo/public/LTE/index.html","1e238cc3e67edba5509dc806ce9ab281"],["E:/qinhao/hexo/public/Layer/index.html","d2b1ce78ac685142823aa30484082d75"],["E:/qinhao/hexo/public/Linux_often_use/index.html","3dd2a6d8e199d5a10f0985ba96183fa1"],["E:/qinhao/hexo/public/MIMO/index.html","dd2d30f919c873313b335736537f1e5f"],["E:/qinhao/hexo/public/MySQL/index.html","b5c51a6447536e13d48f67f3aa9e0ee6"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","e2759c1a7a6ef49d157c22eddebedc5f"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","ed6972e26ef1c7e576570596ee2a346c"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","3e2053b92782b33e73791124f5aadc11"],["E:/qinhao/hexo/public/NB-IoT/index.html","868c0c45165b162b4cfb3f31d9d379c2"],["E:/qinhao/hexo/public/Network_Access/index.html","58193a6145ca6932ed506dc0296333dd"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","7961c421559680c0eb9ccb6864843093"],["E:/qinhao/hexo/public/OFDMA/index.html","a7c938ee010aa2160250f7d0f36d3fec"],["E:/qinhao/hexo/public/OLT_command/index.html","ddf90c6dd66e9891eed528c9f64c56c5"],["E:/qinhao/hexo/public/OverLoad_1/index.html","bf136f72d317027c68873314df0a3b26"],["E:/qinhao/hexo/public/PlatformTransactionManager/index.html","29b71aebcf10e60e3ade64416bd038b7"],["E:/qinhao/hexo/public/Python-3/index.html","38901334032c60934c3e4ab6c61e2304"],["E:/qinhao/hexo/public/Python-4/index.html","d0d546f5f153fa6d5dbe0b9497798f09"],["E:/qinhao/hexo/public/Python-5/index.html","0e2adb91b0f8574731ae2aa1cdbdb558"],["E:/qinhao/hexo/public/PythonUdp/index.html","d7d066b4bf07a8b8a9c3354366f6f4c7"],["E:/qinhao/hexo/public/Python_basic/index.html","5684bb4ee49e4ad2685328f04e03fcf1"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","9ed143a7cdb243cecf121fa0b494dd87"],["E:/qinhao/hexo/public/Python_variable/index.html","816f94440e35a676c5e6742dcf499617"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","396f4ce90abdea7e904871cfb5970810"],["E:/qinhao/hexo/public/TCP/index.html","14fd761b6987aeefecb3d910c426a38e"],["E:/qinhao/hexo/public/TCP_client/index.html","858ee0b2dac8a277a36d142ea4a88e31"],["E:/qinhao/hexo/public/TCP_server/index.html","f60d0118df187bf2780eb225f0b37ff9"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","b26d153afe988dbe68abb3c089e8eab2"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","6dde53d8767c1553517f3080a3848505"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","67e2960d0a90ee746636bdc4eb380b12"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","31670ab71d1116e2282d54ae1a54e339"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","83a9f8f7c0baad7571de86fe95e9c32d"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","2ed38b2e202941bf19bb1ee82ff21c3f"],["E:/qinhao/hexo/public/about/index.html","1fd495b061a0ea96047a9eef1c7be0b6"],["E:/qinhao/hexo/public/acl/index.html","63df19c1ca95281018e7817c355bfae6"],["E:/qinhao/hexo/public/archives/2020/01/index.html","c98f5faec2ee3d9e603217130ac79fa1"],["E:/qinhao/hexo/public/archives/2020/02/index.html","75151e1ce4c4538aec04c2e620ae6ce5"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","b19c85632f1f425f97e65888b66714e2"],["E:/qinhao/hexo/public/archives/2020/03/index.html","133cf0e21410bf07e7438a8eb42b00c2"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","126566417aecf1c387377789304442c9"],["E:/qinhao/hexo/public/archives/2020/04/index.html","938d310216a14c054bf14f8a0d9918d0"],["E:/qinhao/hexo/public/archives/2020/05/index.html","baabafe668bfea1e64b335c8aebe6b25"],["E:/qinhao/hexo/public/archives/2020/06/index.html","00077489a8adf06e02590a635231b98d"],["E:/qinhao/hexo/public/archives/2020/07/index.html","2350a6ef500fe0fc7f1b77ede7e6f6e1"],["E:/qinhao/hexo/public/archives/2020/08/index.html","55675842bab8dbc8d8c3818276d97679"],["E:/qinhao/hexo/public/archives/2020/10/index.html","a4be854895084a75085cbe22743756cc"],["E:/qinhao/hexo/public/archives/2020/11/index.html","ebb4d9cc706b2ade923c2a34180d6ddc"],["E:/qinhao/hexo/public/archives/2020/index.html","d8b09f23fb9589284cc8cc2352ce4c7e"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","da68ba972e2ec48d1edd8378c123c408"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","28f20d5ee4250ba266d5de7adf463c5d"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","5c21dba134a5b7192f737022b43aef78"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","60820202f99d8daa2e50a5c5cdc02e40"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","b23682bc60cd8e535b2539ae7764bd59"],["E:/qinhao/hexo/public/archives/2021/03/index.html","558dbe4cff47d7097a69ca4d6ab6da00"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","897634fe89fba80c6d334fe8a1e76c35"],["E:/qinhao/hexo/public/archives/2021/04/index.html","7b47620db0d93eb9841bdc7ede24700c"],["E:/qinhao/hexo/public/archives/2021/05/index.html","3a986b1bed6960b9629cc4e1777883e2"],["E:/qinhao/hexo/public/archives/2021/06/index.html","9cd822b2a7660102928786613f6fc9e1"],["E:/qinhao/hexo/public/archives/2021/07/index.html","13c1be236873ec352144af8bd676cf79"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","99d611eb06c618addf8dbedaa808b1f4"],["E:/qinhao/hexo/public/archives/2021/08/index.html","77f44adcfb054edde5da74507110b276"],["E:/qinhao/hexo/public/archives/2021/09/index.html","4ef7b321ee5856e76492110cb634db69"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","c3d5e57c23ee11c6d3a6fee4834b7efd"],["E:/qinhao/hexo/public/archives/2021/10/index.html","4395845b87a075c06b5d7178a5e39587"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","a1ef0c59987fd7805120690a066d0514"],["E:/qinhao/hexo/public/archives/2021/index.html","56fb0fb9d5b58d3f2b638cd061eef497"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","1319f041710bd6d19dfb5b429c4db935"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","a5b74f4484ce19f987817c5de97450f9"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","ed5a6c1ed3708752bda4cb90ad03ba45"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","3e84190b3fdd6999d1626fb38cb13e8f"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","3bcb9362b79637eeecf1c96bf97d1e0c"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","92ebccc11b45e77b7fa757c2482371b6"],["E:/qinhao/hexo/public/archives/2022/01/index.html","ea3db9c6d5306262cd02d2183501f0b0"],["E:/qinhao/hexo/public/archives/2022/index.html","16e0c2234943d424137717b24ec71df6"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","f2faa0305c2cb7cd4d415e2ca97e707c"],["E:/qinhao/hexo/public/archives/index.html","47287bad9a20eb512018ffbf36706685"],["E:/qinhao/hexo/public/archives/page/10/index.html","26b6f60506dccbc1e0663c58a3492f23"],["E:/qinhao/hexo/public/archives/page/11/index.html","26b6f60506dccbc1e0663c58a3492f23"],["E:/qinhao/hexo/public/archives/page/12/index.html","26b6f60506dccbc1e0663c58a3492f23"],["E:/qinhao/hexo/public/archives/page/13/index.html","26b6f60506dccbc1e0663c58a3492f23"],["E:/qinhao/hexo/public/archives/page/2/index.html","12ccb079869678690cc73560f60657bf"],["E:/qinhao/hexo/public/archives/page/3/index.html","47287bad9a20eb512018ffbf36706685"],["E:/qinhao/hexo/public/archives/page/4/index.html","47287bad9a20eb512018ffbf36706685"],["E:/qinhao/hexo/public/archives/page/5/index.html","47287bad9a20eb512018ffbf36706685"],["E:/qinhao/hexo/public/archives/page/6/index.html","12ccb079869678690cc73560f60657bf"],["E:/qinhao/hexo/public/archives/page/7/index.html","12ccb079869678690cc73560f60657bf"],["E:/qinhao/hexo/public/archives/page/8/index.html","12ccb079869678690cc73560f60657bf"],["E:/qinhao/hexo/public/archives/page/9/index.html","12ccb079869678690cc73560f60657bf"],["E:/qinhao/hexo/public/artitalk/index.html","334c84ae98d647ce5a2c49bd5c761704"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","a7b9c6ea600aeafc7d2616133ab30385"],["E:/qinhao/hexo/public/bitwarden/index.html","dd908645c366c09499485151613d9eae"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","561ede49804e92287692384cc6a98ac5"],["E:/qinhao/hexo/public/c-11/index.html","8d8990e0aff78c236253b53462511970"],["E:/qinhao/hexo/public/c_1/index.html","bc27875ac245ac6cf35504cd6c7fafe2"],["E:/qinhao/hexo/public/c_10/index.html","df34e9eb0df7e4cbe0eb2acfb3193612"],["E:/qinhao/hexo/public/c_2/index.html","cac65a71e787c34e36d59e1051c03d82"],["E:/qinhao/hexo/public/c_3/index.html","b8eb874b27c89eb53c51e1d7ece5298d"],["E:/qinhao/hexo/public/c_4/index.html","860b99c932b06b391d467c87283464e0"],["E:/qinhao/hexo/public/c_5/index.html","e03df996eb43b6ba65ed4fd211463e0c"],["E:/qinhao/hexo/public/c_6/index.html","27a091b5caf2356b1be1d59847f4c6c8"],["E:/qinhao/hexo/public/c_7/index.html","d6f07831263e472bc77ed5cbf3040cb7"],["E:/qinhao/hexo/public/c_8/index.html","f06b23c026120007fe15c49c5debaec7"],["E:/qinhao/hexo/public/c_9/index.html","25f0757b650c2fedc0d6863672532adc"],["E:/qinhao/hexo/public/categories/C语言/index.html","65e66d7ddf7b83efe7fe3cc0600a38c1"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","48e20accd006dc3f5cb45b4b64a6fc1f"],["E:/qinhao/hexo/public/categories/Java/index.html","de52ce4a2bb3266eb9ed09a21cbbfbdf"],["E:/qinhao/hexo/public/categories/Java/page/2/index.html","b4ab60428092e654372feb0f2feffe23"],["E:/qinhao/hexo/public/categories/Linux/index.html","1b9bee8b71fb32a662b06a2ccc4f850a"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","b4134a86d61c89090e39bfd498cfee23"],["E:/qinhao/hexo/public/categories/Python/index.html","2191916dbdf0bc6551ccd0b11531e96d"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","3bc9933c39accf6685461d6c5d17f75e"],["E:/qinhao/hexo/public/categories/交换机/index.html","3464a67841053b9e20deed9f97f516f9"],["E:/qinhao/hexo/public/categories/前端学习/index.html","d62285e5c0d196aedcfa4bff61bfb7b5"],["E:/qinhao/hexo/public/categories/华为认证/index.html","0015ca6c3ddd9fb7a98a071291b0956d"],["E:/qinhao/hexo/public/categories/小技巧/index.html","293210f8ef02ce74b277961d29826f63"],["E:/qinhao/hexo/public/categories/操作系统/index.html","3874caf7b4b4082c66dc105e8a59715c"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","0281f75e98c8e2aa61826d13201f0528"],["E:/qinhao/hexo/public/categories/数据库/index.html","758c7412ac1757709471ef53c4fd0658"],["E:/qinhao/hexo/public/categories/数据结构/index.html","4d263e93045b3f0c34dd0173535e243c"],["E:/qinhao/hexo/public/categories/服务器/index.html","5dbee4833c4cb6b43843663aa4374c0b"],["E:/qinhao/hexo/public/categories/算法基础/index.html","8a2dc9af4e0e526549209930c10bcb5e"],["E:/qinhao/hexo/public/categories/网络安全/index.html","d3700f40a50cf4a44901be501b05b812"],["E:/qinhao/hexo/public/categories/股票知识/index.html","38794687277abda545b30fe3725c4bec"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","cdb31cf48a4bfac493b26bb1b0e2d2b3"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","e00ba109755f7201d9f2e2838cee08b3"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","8e2519b558d55d636baf0e6475946165"],["E:/qinhao/hexo/public/categories/软件破解/index.html","ff3f2d458540e332cf9cacc76e851b94"],["E:/qinhao/hexo/public/categories/通信技术/index.html","938a130f7472fa9de18b3263c8593ab9"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","c46947ef411501b38ff2b1497a223314"],["E:/qinhao/hexo/public/category/index.html","92f9ca8c537ae19c0a4ed6f52a68e68f"],["E:/qinhao/hexo/public/cinemas/index.html","97f83df2f14b26aad2aaf50876b22491"],["E:/qinhao/hexo/public/color/index.html","3b723eb27664231692f77b4ffe4f3011"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","a98042e5c544c553af95ec92ea14b077"],["E:/qinhao/hexo/public/computer_network_basics/index.html","6634bb50a51ed79492a88da18c0c2c67"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","fd946c5dd6f04921a7482323091d2598"],["E:/qinhao/hexo/public/dataStructure-1/index.html","f4d07fad14d3d582bd6a9418a3b673f3"],["E:/qinhao/hexo/public/dataStructure-2/index.html","ed63f6b3e048522c0785694181289ba1"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","0dd8c02dbe3f0d582b1a52a1a00ed8af"],["E:/qinhao/hexo/public/donate/drinks/script.js","516bc286d1c162bf09c806066fda4171"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","12257cdd87244e6f517e5283e50f6c14"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","3f853c734a91d913d3fba3466a16ad92"],["E:/qinhao/hexo/public/friends/index.html","c75d1915208211a4ab235bc643c43a86"],["E:/qinhao/hexo/public/gcc/index.html","f822d2dfe89cffd5934b29feb8eb7d98"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","09d861d356bb79188dad9462de93a91e"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","db1fc9e4e9536594aff4ece2213854a6"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","14007fa0b3377360518ac73aed05da11"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","94343d1db4e0630c131d6e30816f0f4c"],["E:/qinhao/hexo/public/linux/index.html","eefd6ffe07f461bcda9c744a0540c00e"],["E:/qinhao/hexo/public/login_demo/index.html","8879fbb5730225b5fbe20f6f7bdc9f9b"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","45e8814ac2204a30b9ed8580b8963eb6"],["E:/qinhao/hexo/public/memory_save_number/index.html","276b5aa7865c6fc4ebe7948862a3d2f1"],["E:/qinhao/hexo/public/mobile_communication/index.html","afd4b0137d9ee543fc72221b2dcb7e42"],["E:/qinhao/hexo/public/movies/index.html","cd7fa5988be6e212a4e337118d8e1918"],["E:/qinhao/hexo/public/mylist/index.html","21061cd40ef4eddc0f6f2570e69c2dde"],["E:/qinhao/hexo/public/myphotos/index.html","15e253fe0233e34b591e8be50b1b2c10"],["E:/qinhao/hexo/public/mysql-install/index.html","adabf7a51226f839e26ae13975e7f457"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","f8eaa38ee6069e4883b56a9d77adc102"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","33d4b428a83d0105d2faf543f4c00b02"],["E:/qinhao/hexo/public/mysql_question_1/index.html","71e2fba2bcdc0114a115a7dda2ce4b8d"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","3ab469c30ec0018b6dde4237f9a3cd17"],["E:/qinhao/hexo/public/not-allow-F12/index.html","870483bef1d9573cfafb6431899adf5f"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","02d540535dc4aa47ba8ea8575bd54466"],["E:/qinhao/hexo/public/page/10/index.html","f4686a884015c99a9eafe0f1833ffea7"],["E:/qinhao/hexo/public/page/11/index.html","ef6036cd2d9c4d93f35a997345fa608a"],["E:/qinhao/hexo/public/page/12/index.html","016d6183b51bf6e9160345ce3df4f10d"],["E:/qinhao/hexo/public/page/13/index.html","5ac46559957b08a175cc6846a7f145e2"],["E:/qinhao/hexo/public/page/2/index.html","84f94c8fe03b8585f6e37a76069c42b7"],["E:/qinhao/hexo/public/page/3/index.html","07e0bb2ed36ce51d4b7094359fca9301"],["E:/qinhao/hexo/public/page/4/index.html","2573697d356221bfd8e36b386739905f"],["E:/qinhao/hexo/public/page/5/index.html","087a7aea4d6ede35701e2d1d8546cda1"],["E:/qinhao/hexo/public/page/6/index.html","a68042205d3917827087643c77a4107d"],["E:/qinhao/hexo/public/page/7/index.html","783f0c64af5fd9305ef2277cf87a99dd"],["E:/qinhao/hexo/public/page/8/index.html","c273f2405fe138bab3c0b00f63dc5b81"],["E:/qinhao/hexo/public/page/9/index.html","cf892eced800662430964f65aea02e62"],["E:/qinhao/hexo/public/python-2/index.html","e127bcb8b90c79d62c5664783ccee42e"],["E:/qinhao/hexo/public/ssh/index.html","30fac12cbc4177f2853ab43533e7f43a"],["E:/qinhao/hexo/public/stock_1/index.html","1ac8f22786faa595de720a715e3c0e26"],["E:/qinhao/hexo/public/stock_10/index.html","d50eaa2bd6285d239e39ebfa84fd5ac2"],["E:/qinhao/hexo/public/stock_11/index.html","b9a333b5e7c85983e9e28828ed02c870"],["E:/qinhao/hexo/public/stock_12/index.html","4e181a317520303461f589e82f85e17c"],["E:/qinhao/hexo/public/stock_13/index.html","184a34b1029fafdb94c627ab2104cc23"],["E:/qinhao/hexo/public/stock_14/index.html","05aedb939bb39286d4da6dd8e77b7440"],["E:/qinhao/hexo/public/stock_15/index.html","7176ed61e2c9609addb6e44f52714b4f"],["E:/qinhao/hexo/public/stock_2/index.html","83e3ecfe7e4da4b030404bdadb23c44f"],["E:/qinhao/hexo/public/stock_3/index.html","d51395feb371445df81f078ddbaea801"],["E:/qinhao/hexo/public/stock_4/index.html","c19845dfbaa34fc867f3f494e5b1877a"],["E:/qinhao/hexo/public/stock_5/index.html","eb99d32d4c999ee8ba54fcd76f31f057"],["E:/qinhao/hexo/public/stock_6/index.html","1caa8c0aaa9531dcdc2a95d5eef50265"],["E:/qinhao/hexo/public/stock_7/index.html","5bff00b4f3419d87b3dfb43671a18a01"],["E:/qinhao/hexo/public/stock_8/index.html","48117118058296a630ac35b13bc93a67"],["E:/qinhao/hexo/public/stock_9/index.html","6e24c6a24b43f1e2bdf1ce4b4fe682db"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","075227389c361d0182bd6b42fe03a429"],["E:/qinhao/hexo/public/sw-register.js","ee6c5021b904fe214d193752f9f319c2"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","a2e1b592e70ef31f6d32cf399e9a63a5"],["E:/qinhao/hexo/public/system1/index.html","c719a9d0718d0f995cedd1d8a872436a"],["E:/qinhao/hexo/public/system10/index.html","ed657627c6a0934bbbcb044172cf2036"],["E:/qinhao/hexo/public/system11/index.html","02051f39f3811c9c61eacd39dc1d050e"],["E:/qinhao/hexo/public/system12/index.html","41c9e594f14eadf1c7411097e3ff34e1"],["E:/qinhao/hexo/public/system2/index.html","cc44cf9c3dfdbe27ccf62b519e30da6c"],["E:/qinhao/hexo/public/system3/index.html","e048a0eff244896772038126faa4587f"],["E:/qinhao/hexo/public/system4/index.html","ff90b2134223d0e0d5a6186be6bb2d15"],["E:/qinhao/hexo/public/system5/index.html","9e208b4ce097c805b6c7d08739d6c908"],["E:/qinhao/hexo/public/system6/index.html","1f0b39379cbc5a983c512acea0ed0047"],["E:/qinhao/hexo/public/system7/index.html","8be36f02ccffb16221347d91451d1ad5"],["E:/qinhao/hexo/public/system8/index.html","fec81816616d111ca6709fdf78073804"],["E:/qinhao/hexo/public/system9/index.html","9f3c0c73499bb0d8117e40c38a6b9f35"],["E:/qinhao/hexo/public/system_info/index.html","1ba3200520be95a859f1116d944001ca"],["E:/qinhao/hexo/public/tags/index.html","39b93f5a78eee5c3a029ca0f1b9ebf80"],["E:/qinhao/hexo/public/transactionManager/index.html","af629df7ec36d3425b5631066dc22857"],["E:/qinhao/hexo/public/utils/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","c8925860372369728e006ab8d14818f5"],["E:/qinhao/hexo/public/wireless_radio/index.html","2b288d469e0ca1544d0f9f6544f6a1f8"],["E:/qinhao/hexo/public/wireless_word/index.html","c5df434169de10c7f7fcb9a93a803bfa"],["E:/qinhao/hexo/public/xml/index.html","8797071c1b5d47f4eb77582b63da6520"]];
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







