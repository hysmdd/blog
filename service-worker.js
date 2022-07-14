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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","7b623fa56eefa042198e4ac7641696cf"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","115a79edef6dc5aa0a6426d03c3a92ce"],["E:/qinhao/hexo/public/AOP_1/index.html","f2c080cfa3af13eb6db3abc3de7095c3"],["E:/qinhao/hexo/public/AOP_2/index.html","3d09c6394f38f145b3f0df3c3170a3f6"],["E:/qinhao/hexo/public/AOP_3/index.html","53a5f190909eb5a377de57592441904d"],["E:/qinhao/hexo/public/Algorithm_1/index.html","82f001b756aa3e8ae91e03c838aaf3a7"],["E:/qinhao/hexo/public/Base/index.html","49c117614bc3e4e8bcedbd71390cf658"],["E:/qinhao/hexo/public/ByteDanceVerify.html","a33a94c8247d90e7488fd0e69585ffcd"],["E:/qinhao/hexo/public/CPU_Register/index.html","ea57b75b0f71a74f93ed3e4e687dfeba"],["E:/qinhao/hexo/public/C_Programming_1/index.html","906dad67263c70992eec5c8d6a3b812e"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","c9b4556f52ff7172eaea554406ebf896"],["E:/qinhao/hexo/public/FileDownload/index.html","659aef5a2aaafc296c144bb6dc0b362d"],["E:/qinhao/hexo/public/Files_and_directories/index.html","7d08bdf09c55a0b6fc4720ff96936ef4"],["E:/qinhao/hexo/public/FixedTools/index.html","2e469e6003e7aa00e477cc4ed9f321d8"],["E:/qinhao/hexo/public/GRE-VPN/index.html","80c77ea1d3df5e72dcb21b2bec39ed63"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","3fcf85cd80cc96ac6a1709715f29eaab"],["E:/qinhao/hexo/public/GSM/index.html","1e9cb929c97284d786d0a3c58971e281"],["E:/qinhao/hexo/public/ICIC/index.html","a9242ffb1f8dc4c3cef436ba0e5f5a3e"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","fbf5c96fbb64293a233db8b235b240d0"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","1a5ce3212f9c01dc58255e98bead5bee"],["E:/qinhao/hexo/public/JDBC/index.html","ccf6ecda5c32297bb7e96e67a180a0cc"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","07ddb9ae1e04407baaf3dd86fc1bc827"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","7516db07a1a02a189c6cc4d3f44f7124"],["E:/qinhao/hexo/public/LTE/index.html","90de03ef626af5249fd7e20895e89010"],["E:/qinhao/hexo/public/Layer/index.html","b799aec8cea56c8104850e5df65f1956"],["E:/qinhao/hexo/public/Linux_often_use/index.html","2d0dd17d49e749b28f35e8ecedd77eaa"],["E:/qinhao/hexo/public/MIMO/index.html","903e5bdc66f3a32e523758ef30258265"],["E:/qinhao/hexo/public/MySQL/index.html","9f19cdb74b67d7db81ed0e82d000497c"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","2098b0a3c6bf59b6617b23611429b371"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","2cd8f8bab82d166bfc66c971f90f4d69"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","2ed6f0cb83c8eacfec04096b9f273253"],["E:/qinhao/hexo/public/NB-IoT/index.html","4f34c2e3c99eb0986d88cf978402be63"],["E:/qinhao/hexo/public/Network_Access/index.html","d488e55babb7bf75b7291b03274d6fc7"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","699c7bbd983cb64f3a584cb421b1c1a5"],["E:/qinhao/hexo/public/OFDMA/index.html","7c871597be44632ad65006223867c3ff"],["E:/qinhao/hexo/public/OLT_command/index.html","b034ebec20e42cee0731c04ea15e2534"],["E:/qinhao/hexo/public/OverLoad_1/index.html","78964061346cd2641755006feb26a5d7"],["E:/qinhao/hexo/public/PlatformTransactionManager/index.html","37f3f9876a36cda8879ad778807df16c"],["E:/qinhao/hexo/public/Python-3/index.html","1bf0fdb04b8a32fcc24b3e2ed15c2a53"],["E:/qinhao/hexo/public/Python-4/index.html","eff83d44fc0ca6698f2a5ceb2a9adf95"],["E:/qinhao/hexo/public/Python-5/index.html","3c4b98553614ad0bd44dd1f9eaed407f"],["E:/qinhao/hexo/public/PythonUdp/index.html","578ff0436d6808955a4f5f249f2a64d5"],["E:/qinhao/hexo/public/Python_basic/index.html","e3970413d55c82e7f725a3b40bd3cd34"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","0cf46893f69fd231c27ece0ccd7a31c1"],["E:/qinhao/hexo/public/Python_variable/index.html","a7d53f5967bdcb7552c0ac9275700186"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","ed5f15fe3b313bae91d1771d6a09af64"],["E:/qinhao/hexo/public/TCP/index.html","2373f45dd962cf561a65c97628b9434b"],["E:/qinhao/hexo/public/TCP_client/index.html","631069d79bdbcef2377f30d4b0472686"],["E:/qinhao/hexo/public/TCP_server/index.html","c7c6ed3645a1a7f1f6458a77e92ee071"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","686c3fc19ad550037839d762eaa63401"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","09c1d21a7a5ca5023f71414651ccb902"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","c38704fc933a6316d30e25701875ee9d"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","c25ea7131925db7475ef987eea1e8a5f"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","79b63dc4ac45c118e7e49a291b38db8b"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","f4483082ff30ca4c5b631e8ad4dfbb27"],["E:/qinhao/hexo/public/about/index.html","4c7a45f8d7ba87a9f6c61341802a521b"],["E:/qinhao/hexo/public/acl/index.html","9b12f81e8319bd43feb19a82e4dede51"],["E:/qinhao/hexo/public/archives/2020/01/index.html","ab478137c091e79de786d9c50f1957fe"],["E:/qinhao/hexo/public/archives/2020/02/index.html","092beb0be7bde47c55047cc23de9ab8e"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","ff3d5dd7929efb5aaa257dde1d587f93"],["E:/qinhao/hexo/public/archives/2020/03/index.html","7ab36dbf37e39b35c3a42d2026012ad2"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","82f93cfd80cae956010db178d52e558c"],["E:/qinhao/hexo/public/archives/2020/04/index.html","0d2fe2e6bfa1145c8ebece8cf5730b1b"],["E:/qinhao/hexo/public/archives/2020/05/index.html","08518e80619ba82dd5d2ce1b7d3edd5b"],["E:/qinhao/hexo/public/archives/2020/06/index.html","dfef7ab897e92d945347ad5fc4193a74"],["E:/qinhao/hexo/public/archives/2020/07/index.html","4f70c2ca884a909fc3a04f06bd31d703"],["E:/qinhao/hexo/public/archives/2020/08/index.html","47c28416a998e959d47fc00408a22905"],["E:/qinhao/hexo/public/archives/2020/10/index.html","2c05f65cfc99e6d1cc822de15bc20e83"],["E:/qinhao/hexo/public/archives/2020/11/index.html","62c9b22de8fb6ed33991ccdc2393a7e1"],["E:/qinhao/hexo/public/archives/2020/index.html","9dcde4f2579fb636b40959531e93e16c"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","0eca1d048efa37d1227aedb3fcc14681"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","9e9e49207ea547b2a192b8bdd475cf18"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","2d170add1df7b386b87191fbf37c36ee"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","f5f25d950537248eb766db5fcfb16cb9"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","c70b60e0f4db84a62991532528220715"],["E:/qinhao/hexo/public/archives/2021/03/index.html","504d6e93b35b7451530af60c91ccb0d0"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","818fdae58f8b6f382297e1bf95150930"],["E:/qinhao/hexo/public/archives/2021/04/index.html","4aec3c4fe6451f04c278e5fbe3c962b1"],["E:/qinhao/hexo/public/archives/2021/05/index.html","2495477591625bd1f9ca5397b1340b42"],["E:/qinhao/hexo/public/archives/2021/06/index.html","42be86fc3181b6f64fe76dac6e489d8f"],["E:/qinhao/hexo/public/archives/2021/07/index.html","3b0e5878b6110913d9c493497578ef95"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","af48bec24da3f667b7b847f1f2be52fa"],["E:/qinhao/hexo/public/archives/2021/08/index.html","dc03889a5d9f5e9898672b41fa26a559"],["E:/qinhao/hexo/public/archives/2021/09/index.html","0934a96ce32f38c622c0c500c9b81c2e"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","b68adc7dc88840cfa6346a8dc470a6c2"],["E:/qinhao/hexo/public/archives/2021/10/index.html","84e97f003946ad6762a3e8ec255d8be5"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","95e14a1c4ec185d7275b430ba6150f5e"],["E:/qinhao/hexo/public/archives/2021/index.html","2ce32c853488b0281d28579f7ffda03e"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","d5fecbf5b0d829b9c581480742badcdb"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","3092b5529d6546849bd5dfaf41dfbd90"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","284e346a0042e168b5a4305ff0a16fad"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","7c6435e3c8e354894aee0ec4eb2889fe"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","a21f7e8e798170fd999d8c8feec752d7"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","bb9fe09902bd6da878628c82b5dc6e86"],["E:/qinhao/hexo/public/archives/2022/01/index.html","0fe0c8f1a612701d86d122760271bfbd"],["E:/qinhao/hexo/public/archives/2022/index.html","9788bd397d8770b5b28de91547ddde08"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","7d8428320693f5c4b11d8c319e1ee5f6"],["E:/qinhao/hexo/public/archives/index.html","a64ba5e26930c48793d86ad0a8fc5b67"],["E:/qinhao/hexo/public/archives/page/10/index.html","bc86051714318e1b691ac672625e3373"],["E:/qinhao/hexo/public/archives/page/11/index.html","bc86051714318e1b691ac672625e3373"],["E:/qinhao/hexo/public/archives/page/12/index.html","bc86051714318e1b691ac672625e3373"],["E:/qinhao/hexo/public/archives/page/13/index.html","bc86051714318e1b691ac672625e3373"],["E:/qinhao/hexo/public/archives/page/2/index.html","a64ba5e26930c48793d86ad0a8fc5b67"],["E:/qinhao/hexo/public/archives/page/3/index.html","a64ba5e26930c48793d86ad0a8fc5b67"],["E:/qinhao/hexo/public/archives/page/4/index.html","a64ba5e26930c48793d86ad0a8fc5b67"],["E:/qinhao/hexo/public/archives/page/5/index.html","6460d4113fb56776d30733c39c8238a6"],["E:/qinhao/hexo/public/archives/page/6/index.html","a64ba5e26930c48793d86ad0a8fc5b67"],["E:/qinhao/hexo/public/archives/page/7/index.html","6460d4113fb56776d30733c39c8238a6"],["E:/qinhao/hexo/public/archives/page/8/index.html","6460d4113fb56776d30733c39c8238a6"],["E:/qinhao/hexo/public/archives/page/9/index.html","6460d4113fb56776d30733c39c8238a6"],["E:/qinhao/hexo/public/artitalk/index.html","509e0c2b116005a6bc3397fe876ef90c"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","e07d9297e48740ccf482b9390e39d6e1"],["E:/qinhao/hexo/public/bitwarden/index.html","556fedc481fd7a977e5e2d0091940e41"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","00191564063bc8076f6d8c46119ec8ad"],["E:/qinhao/hexo/public/c-11/index.html","56bd0490579e9e418295a5b177238638"],["E:/qinhao/hexo/public/c_1/index.html","84e1aa7a8e149f230c839a5e439d14b0"],["E:/qinhao/hexo/public/c_10/index.html","1a1cd18ba607ba4957ec6851e09daf11"],["E:/qinhao/hexo/public/c_2/index.html","fd168afa6eaabe07e2d96adb82df8ab5"],["E:/qinhao/hexo/public/c_3/index.html","11af50fb3184609f77fff777397ed6b2"],["E:/qinhao/hexo/public/c_4/index.html","331c75954fe2315401ade775f926ecb9"],["E:/qinhao/hexo/public/c_5/index.html","15033c4d3066740589570ca1093f3054"],["E:/qinhao/hexo/public/c_6/index.html","a20f93b6ded1158269f46bb6614d8859"],["E:/qinhao/hexo/public/c_7/index.html","8334f3d83dc438127f96f1ebaf7d8611"],["E:/qinhao/hexo/public/c_8/index.html","b5578dc654afbd6ed92c0a49557fe8f2"],["E:/qinhao/hexo/public/c_9/index.html","e0e1de1118603639beb1b3d81509324c"],["E:/qinhao/hexo/public/categories/C语言/index.html","138df7566cd3854c1998d98b21b9115f"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","9e73dd3418506adc75eda90306aa0084"],["E:/qinhao/hexo/public/categories/Java/index.html","5f956eee58d6d0a1e14863a79c1e7c05"],["E:/qinhao/hexo/public/categories/Java/page/2/index.html","2ea1f312160abd3ad2c069388eee0e73"],["E:/qinhao/hexo/public/categories/Linux/index.html","87c1826ead08c2feecc4d1b2805da22b"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","5e0ba57bbf59970a91cf892a985e1074"],["E:/qinhao/hexo/public/categories/Python/index.html","39f1668ad5bb1dac32ba4878e1dddf78"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","39d4f93c91ee5d84bf2088a1bc9a3912"],["E:/qinhao/hexo/public/categories/交换机/index.html","c8d7ad7a5f3867c19026f3a689516d34"],["E:/qinhao/hexo/public/categories/前端学习/index.html","214015b759727b4818101c92e3a26129"],["E:/qinhao/hexo/public/categories/华为认证/index.html","c723524448bd9f23844516b0b1576b27"],["E:/qinhao/hexo/public/categories/小技巧/index.html","90336a4d70403a343bd22c8bb82481a2"],["E:/qinhao/hexo/public/categories/操作系统/index.html","5f75697c65643187342273fa859c4916"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","35fd3f7bd1ee0767a390acc03d6f6d46"],["E:/qinhao/hexo/public/categories/数据库/index.html","e70b8ea4c28f72943abdccaf4380bbc1"],["E:/qinhao/hexo/public/categories/数据结构/index.html","2296d2767ea9d1bb16db6dbdcd4dd999"],["E:/qinhao/hexo/public/categories/服务器/index.html","99dee3d455ab62749f193ee5b5abf07e"],["E:/qinhao/hexo/public/categories/算法基础/index.html","d495541990a9371b309b17b376c799c2"],["E:/qinhao/hexo/public/categories/网络安全/index.html","ea6fa24b8d56e76a840f3830bc847c7e"],["E:/qinhao/hexo/public/categories/股票知识/index.html","8d9c14e454c3470fe448d3f26ab218b9"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","415e0d00a0b76013e642b1d8538fd398"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","738611efbf9815de5de186252851b921"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","0853739cab25e18fd9a50d79599fd21f"],["E:/qinhao/hexo/public/categories/软件破解/index.html","2e1a738e42bdd62cbb02bc604e7c0ce5"],["E:/qinhao/hexo/public/categories/通信技术/index.html","cb4590af488f3593e8b58cf5660c4ab2"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","22f2528c37f98090c74043fc94c7b7eb"],["E:/qinhao/hexo/public/category/index.html","2c04495c9ca60a2043cf91dfc0cc9b4d"],["E:/qinhao/hexo/public/cinemas/index.html","42f5681b3443aea05147dc6b21e72a31"],["E:/qinhao/hexo/public/color/index.html","f04a63434cb1b4ff8f0c19728f7016a0"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","897614580f049eb2b465c55e05d20a63"],["E:/qinhao/hexo/public/computer_network_basics/index.html","660870f6d7e550655392792a46f329c0"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","531f79ee3a63e192d1baff7c44b0e418"],["E:/qinhao/hexo/public/dataStructure-1/index.html","16e45d1761d7152f42040ada5df3457c"],["E:/qinhao/hexo/public/dataStructure-2/index.html","21a9eca3ec9c552d960e9590f3ef595c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","0dd8c02dbe3f0d582b1a52a1a00ed8af"],["E:/qinhao/hexo/public/donate/drinks/script.js","516bc286d1c162bf09c806066fda4171"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","12257cdd87244e6f517e5283e50f6c14"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","44fd991ae96767c70439f730ce34261a"],["E:/qinhao/hexo/public/friends/index.html","d728fd18063d28d711190c5ecc8b492d"],["E:/qinhao/hexo/public/gallery/index.html","cf996a34bedd22d6a84885252703de41"],["E:/qinhao/hexo/public/gallery/myphotos/index.html","343a19459f99bdd7d7fa94cb4e0111bd"],["E:/qinhao/hexo/public/gallery/reset/index.html","3cb163928c0ff92bc802ba22dceeec34"],["E:/qinhao/hexo/public/gcc/index.html","9e3505c07add76408179dd586920e7de"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","79219685dc268da99714b586ad356529"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","e43a480cf701c81681e2a5e64f2cf6ee"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","337ce5aa66e733fa3640899bb5501afe"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","6050786bab875bc1f586e53083bac5d2"],["E:/qinhao/hexo/public/linux/index.html","c97d9dafd68c97d0c62c6ac295340082"],["E:/qinhao/hexo/public/login_demo/index.html","d11149a1cfdfe3cc02a06df521e73234"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","d854f39df204caa3445404fab972d6b9"],["E:/qinhao/hexo/public/memory_save_number/index.html","aa7d1f95015b75a42a869bb66a398d86"],["E:/qinhao/hexo/public/mobile_communication/index.html","e1aa1760c5c07f90f1f6c3cb983170fa"],["E:/qinhao/hexo/public/movies/index.html","23c3a378f0e74f56a161639b1a0954e8"],["E:/qinhao/hexo/public/mylist/index.html","c2cc2ae07a723c525d0c75dd877c7539"],["E:/qinhao/hexo/public/myphotos/index.html","630ae79e6ca63c697a209375299443c5"],["E:/qinhao/hexo/public/mysql-install/index.html","5390a010cd695826fa2b431056699b57"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","84a2e2873b0c75c58199c6e5c8490a21"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","31bfa688277849e8f69bc818f89a0839"],["E:/qinhao/hexo/public/mysql_question_1/index.html","b68d073afde28a3ba9a9b86f5dea46f7"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","2054a9665b1c84ef6fe8c8fa72eb9a8c"],["E:/qinhao/hexo/public/not-allow-F12/index.html","ebd63d2f03c03e4d31ad4b50549f0fa1"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","0dcbb02740858d84a716e2729c3a2282"],["E:/qinhao/hexo/public/page/10/index.html","f2dd26c14fb8b53f582d385ddc6a14ca"],["E:/qinhao/hexo/public/page/11/index.html","a647562e94b9171b4ab3268004a1a90f"],["E:/qinhao/hexo/public/page/12/index.html","d29e739015dbfa46b20420c0ed3727fa"],["E:/qinhao/hexo/public/page/13/index.html","a507c4d13c96284b6019791b1714bd53"],["E:/qinhao/hexo/public/page/2/index.html","2de069d8093decad41ea996d61e887c9"],["E:/qinhao/hexo/public/page/3/index.html","32039867b5e45a9273e4d3fb2bc1718e"],["E:/qinhao/hexo/public/page/4/index.html","dbc4e345fa1015d6b23d7e5582625668"],["E:/qinhao/hexo/public/page/5/index.html","86e507a5554c56d844c95464a5841b0a"],["E:/qinhao/hexo/public/page/6/index.html","5c56587b629f9f0769538496e9c467cd"],["E:/qinhao/hexo/public/page/7/index.html","9ce6d7299b46510c195ae957c085b49b"],["E:/qinhao/hexo/public/page/8/index.html","55c898f2c38d64530bd887199a8d57c3"],["E:/qinhao/hexo/public/page/9/index.html","7ec45e9b6f5772f861400aed1bc81639"],["E:/qinhao/hexo/public/python-2/index.html","864bb735866234e8707eff9662623cb1"],["E:/qinhao/hexo/public/ssh/index.html","be28bae1031638008430c2c2374ffacb"],["E:/qinhao/hexo/public/stock_1/index.html","c6bfebf892b7e8944922cbbbaa2eab86"],["E:/qinhao/hexo/public/stock_10/index.html","76380ee66af7ba161d655fe6b5df2896"],["E:/qinhao/hexo/public/stock_11/index.html","62b25d8028d4b51a1c1bf3a370fea997"],["E:/qinhao/hexo/public/stock_12/index.html","849594ed2ef2f90689e12c9f4e5d85e9"],["E:/qinhao/hexo/public/stock_13/index.html","bd783d418dd9ad0ffeecefa12a71e6f7"],["E:/qinhao/hexo/public/stock_14/index.html","22a0a569291189f82ea5e56a0a7a679c"],["E:/qinhao/hexo/public/stock_15/index.html","49f520eaa8e9fa2c7bc61bcaf934432f"],["E:/qinhao/hexo/public/stock_2/index.html","dbc773a42caf678a05a3b2965d73893c"],["E:/qinhao/hexo/public/stock_3/index.html","0b90752f6d6427d5cddc511f5e0cc3bd"],["E:/qinhao/hexo/public/stock_4/index.html","cb6148c5c265c9bd1fb366d064f7a7b8"],["E:/qinhao/hexo/public/stock_5/index.html","994ea37ba4da9fb79435be477c00d8c4"],["E:/qinhao/hexo/public/stock_6/index.html","b9d0442bbc8bacfaac6f6641d8e3e6b7"],["E:/qinhao/hexo/public/stock_7/index.html","c486a201e8f0d557df01f0fdb48bb31b"],["E:/qinhao/hexo/public/stock_8/index.html","9a8d159d3a3fcebef5df420bfd2084b7"],["E:/qinhao/hexo/public/stock_9/index.html","6728f9c69890801e4b8b16e067af99ce"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","58ff395e6bda0efe6ec625578a57e11a"],["E:/qinhao/hexo/public/sw-register.js","9cc0d319a9b0f6c42e3234e271532dd1"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","fbee24bf4fb06c6f3bc526ea93736629"],["E:/qinhao/hexo/public/system1/index.html","2122a99af12940245dad991bf3fefcd1"],["E:/qinhao/hexo/public/system10/index.html","2802315bbb524dfde146c3f40aa57c28"],["E:/qinhao/hexo/public/system11/index.html","2ea12939002e2bab5e462790049b4af8"],["E:/qinhao/hexo/public/system12/index.html","a4bf40845bd5c9993d08aa102875eb8f"],["E:/qinhao/hexo/public/system2/index.html","622e0cdc66058333a24962611ab5fac4"],["E:/qinhao/hexo/public/system3/index.html","3352ab51898aaa1a862c10b29a8257dd"],["E:/qinhao/hexo/public/system4/index.html","709095cc40556b24976b8f7283e3a222"],["E:/qinhao/hexo/public/system5/index.html","7a01e974519c2800acfef0b349b23838"],["E:/qinhao/hexo/public/system6/index.html","812c187d9636ae86af7c8a14f43d9dca"],["E:/qinhao/hexo/public/system7/index.html","cf580c6d9756501c816f4b3665779c86"],["E:/qinhao/hexo/public/system8/index.html","629af0ed5393fbd1c6aaeb17c00eb1b9"],["E:/qinhao/hexo/public/system9/index.html","c4cb3c5fa347c34bcedd926b8032adb1"],["E:/qinhao/hexo/public/system_info/index.html","1cd150a37b741cb861655cd0da1cd1e0"],["E:/qinhao/hexo/public/tags/index.html","dac7566097675971bd7facb89e951134"],["E:/qinhao/hexo/public/transactionManager/index.html","dc01a172271d3606bc3b421a4e236558"],["E:/qinhao/hexo/public/utils/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","28e6d0cdd3cf2a50b955438a6155c21d"],["E:/qinhao/hexo/public/wireless_radio/index.html","6f29285f604dc6368a17b6082d1d6d0b"],["E:/qinhao/hexo/public/wireless_word/index.html","e7a08bcb188fc5c5a2bdbe85ceda0e0d"],["E:/qinhao/hexo/public/xml/index.html","e863b575e678d438320d788376240dbb"]];
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







