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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","7a5734b5c49516e01bbfbf30a15f141f"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","3a99a70cc87777b35ef3d29ff039da19"],["E:/qinhao/hexo/public/AOP_1/index.html","52556cf829ec87b9286dd19c41aa9950"],["E:/qinhao/hexo/public/AOP_2/index.html","e218f0a4bf6622a5b3c80096bfaaf407"],["E:/qinhao/hexo/public/AOP_3/index.html","b0341b3c7270df0e550ad5ea3e55eb6d"],["E:/qinhao/hexo/public/Algorithm_1/index.html","1dbac8730c69532fbbbf87ed4c20d235"],["E:/qinhao/hexo/public/Base/index.html","f79f7ce5bfeb9b9f17fdc77cc1986ed7"],["E:/qinhao/hexo/public/ByteDanceVerify.html","19774437f26739bb08273b0f58dd695d"],["E:/qinhao/hexo/public/CPU_Register/index.html","64eb66d31db8c5a210a2ca4722eee391"],["E:/qinhao/hexo/public/C_Programming_1/index.html","9bbd3cf26d93b0efa9b02741d6227852"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","e600ce2f91972718b9a9e8e472c773d3"],["E:/qinhao/hexo/public/FileDownload/index.html","2c9f6732c1f35e2db79f48ed096f9b30"],["E:/qinhao/hexo/public/Files_and_directories/index.html","bd83f05ff0526c1a3250d967557d1c07"],["E:/qinhao/hexo/public/FixedTools/index.html","efd8a2423a990f66c45baad14f975125"],["E:/qinhao/hexo/public/GRE-VPN/index.html","be34058e8be7220b90536460b0f9bfc6"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","56b767298488604559cdeb9f707bed67"],["E:/qinhao/hexo/public/GSM/index.html","3a7816ac5021a841b240575e622ffb71"],["E:/qinhao/hexo/public/ICIC/index.html","3ffa38200806bd8dc028ca6785d00b15"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","a8e6269b4ece4690ec0ebb9f6dbc1f65"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","1140de4c2b4f12377ccbe5d50c414de4"],["E:/qinhao/hexo/public/JDBC/index.html","bffcb6b140dade473971e670e73f864c"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","cabbde2ec7e3919c2140c47b42d91901"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","e634c40889cc8d191a8a6a18447f3930"],["E:/qinhao/hexo/public/LTE/index.html","949ffd952904411c85e3673e086c2ff9"],["E:/qinhao/hexo/public/Layer/index.html","902587bf8e87751a6f08d8d4a72093b6"],["E:/qinhao/hexo/public/Linux_often_use/index.html","637142b3017cf139ab16151f3dd2bac5"],["E:/qinhao/hexo/public/MIMO/index.html","0fdc33a965e1596ee92fbef121a96a4a"],["E:/qinhao/hexo/public/MySQL/index.html","c2d470cd2911ac43e81a594995718b8b"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","46826dfdafd078170fb4e3027f402329"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","47ae2e9cd851ca2e7cfd566a14a8d059"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","d34c9e0753a971d4bab1c3de942fe277"],["E:/qinhao/hexo/public/NB-IoT/index.html","a2ecd6e8f23e8f60e931fbf62981cd40"],["E:/qinhao/hexo/public/Network_Access/index.html","8f6cd177db50a69b3a414eb7aea449aa"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","bbd9ff2f5c845924b82d23d627ecec67"],["E:/qinhao/hexo/public/OFDMA/index.html","08f711bfa3a9561a9f3852bc1b74c4fd"],["E:/qinhao/hexo/public/OLT_command/index.html","0dcae313384ee0c3d8ea904c31302b41"],["E:/qinhao/hexo/public/OverLoad_1/index.html","b81f6ad3b94df113fab9ff46d717d7d4"],["E:/qinhao/hexo/public/PlatformTransactionManager/index.html","2052b7cd2aa412fade022dfc4e27795e"],["E:/qinhao/hexo/public/Python-3/index.html","4524997a83852bb365ff01e42a69d9b2"],["E:/qinhao/hexo/public/Python-4/index.html","a29f85df31c1eedf5bd29af88493a8df"],["E:/qinhao/hexo/public/Python-5/index.html","36ec4115d236812b3f91dacfd56ccd91"],["E:/qinhao/hexo/public/PythonUdp/index.html","4f79d71c974eed6088a37d49f720f23b"],["E:/qinhao/hexo/public/Python_basic/index.html","b629d322a0e84f0d159f5d290f09a311"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","90417f1e0e1c99d1121f07df5dea7d8c"],["E:/qinhao/hexo/public/Python_variable/index.html","bd29c1915c9c456d08f9f8f4125024a3"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","4a1b824d45feb1588fc5f06ef07e4476"],["E:/qinhao/hexo/public/TCP/index.html","002f25ab1af32b4ae0aca71da925a691"],["E:/qinhao/hexo/public/TCP_client/index.html","5918b2806471e9e439a84f0e5293ad7d"],["E:/qinhao/hexo/public/TCP_server/index.html","ba6a6dc549c336c6897aae046fc5d702"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","c943e29c1a50972cac5ed6d573e64d6e"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","ece3caf94e4e082169c9912cee5d82e1"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","e3361c2269a4c5695c23c627386960cb"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","967a6e7e1671b00a748026c726e36a5a"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","4d6f39334dc43725e4e9468699f9c9b0"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","9004e864accca84fca9f96d577f57480"],["E:/qinhao/hexo/public/about/index.html","2b85f80a1afe5503df15af3b6e03ca0d"],["E:/qinhao/hexo/public/acl/index.html","9baa7b9b5fc3beb8de92ebb0f49bab2e"],["E:/qinhao/hexo/public/archives/2020/01/index.html","454afa68e47d889e737dc1949649d1c4"],["E:/qinhao/hexo/public/archives/2020/02/index.html","fd3a745dc0c57b1c6912414335d6321c"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","509c4ed7cc08fa630fa0a2d5eb49545f"],["E:/qinhao/hexo/public/archives/2020/03/index.html","1da18df09e6a6879ed48f452a725fc95"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","35d5610a4f380de3d6728dbcd7a19307"],["E:/qinhao/hexo/public/archives/2020/04/index.html","bd7afde0d467b31698af784093f7f3fd"],["E:/qinhao/hexo/public/archives/2020/05/index.html","c610d9d890215ac8c15733b2e8400c68"],["E:/qinhao/hexo/public/archives/2020/06/index.html","afba166305559fe7835207d251ba0c98"],["E:/qinhao/hexo/public/archives/2020/07/index.html","438c8bc85710b62a5ebc233bddf816f2"],["E:/qinhao/hexo/public/archives/2020/08/index.html","6dae71cd5e5b59eb8834cf2bc2fa209f"],["E:/qinhao/hexo/public/archives/2020/10/index.html","4c94aca425ca08e2737b14f72219b7db"],["E:/qinhao/hexo/public/archives/2020/11/index.html","87ade088a0e4705e371eea6b7ad7899d"],["E:/qinhao/hexo/public/archives/2020/index.html","9c3010e27caeeea2d387a9cb92bf24d9"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","6df8a35010e4514a4d54832fec6cf81b"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","b93b0e0b1887dd91b376a9ee401ff811"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","63ae38a670ede4f5565f5ef8ebb727af"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","529cd568430c97845ecf9907698f7574"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","869976f0dda1f787b422de4809641abd"],["E:/qinhao/hexo/public/archives/2021/03/index.html","f6eb012421c6dae5d1fe5d449f7abd4c"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","5dba8662ba8ebcfaee1ca19afd7492d2"],["E:/qinhao/hexo/public/archives/2021/04/index.html","3be46c4c6f73721c34f9997a24ede2f5"],["E:/qinhao/hexo/public/archives/2021/05/index.html","4e216f347057dde280736d425ea5f61c"],["E:/qinhao/hexo/public/archives/2021/06/index.html","f484ca6000d5a8414872ab08128dd2e6"],["E:/qinhao/hexo/public/archives/2021/07/index.html","2f46b6763b8b8950fb463bbabc66415e"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","f99bca7a969323189c1dbed3dd1f9852"],["E:/qinhao/hexo/public/archives/2021/08/index.html","3007f924cd1e78f87040c6d055906642"],["E:/qinhao/hexo/public/archives/2021/09/index.html","3cc307c599e80e6eb29da65a3c129c49"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","6f024d1fc486bc13b2d5b012a4b096a1"],["E:/qinhao/hexo/public/archives/2021/10/index.html","dbd6fb21bedfc2a5d23f3adf4961ea4d"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","270a1ec1d9b65ef204208723aae894b1"],["E:/qinhao/hexo/public/archives/2021/index.html","b09aeeb1b6f4cc20e4b031e328e26bdf"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","1ad5e6ddfda5667b7452443940ddb9f5"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","54fba21515d21ff5fc703e8253a39881"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","be9106ff1cff6c100c43f0a1d63bb4a4"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","770e14cdc299b37866a7f389e935a441"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","b9a203f91d0dc68c407724037ab17fe3"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","fe16d510e5e3728d32b2291e1073fb61"],["E:/qinhao/hexo/public/archives/2022/01/index.html","b23582913b62b93ff5ccfde4a6f05c7a"],["E:/qinhao/hexo/public/archives/2022/index.html","85de145973072ffb9655b1fffdf1a849"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","3675943dc4ddc62fd881e3e1ca708c53"],["E:/qinhao/hexo/public/archives/index.html","e3cd091c90cbdcc92ca7f906b8ed776a"],["E:/qinhao/hexo/public/archives/page/10/index.html","b5019f195cf685bf0422a6aedfcaf67f"],["E:/qinhao/hexo/public/archives/page/11/index.html","b81dfbec43d98d6984d20d38fa2435ef"],["E:/qinhao/hexo/public/archives/page/12/index.html","b81dfbec43d98d6984d20d38fa2435ef"],["E:/qinhao/hexo/public/archives/page/13/index.html","b81dfbec43d98d6984d20d38fa2435ef"],["E:/qinhao/hexo/public/archives/page/2/index.html","9c4b286ae78dfad12667d355c27de4e8"],["E:/qinhao/hexo/public/archives/page/3/index.html","e3cd091c90cbdcc92ca7f906b8ed776a"],["E:/qinhao/hexo/public/archives/page/4/index.html","13ae687aa6fdee36205a72ff191fe5b0"],["E:/qinhao/hexo/public/archives/page/5/index.html","b81dfbec43d98d6984d20d38fa2435ef"],["E:/qinhao/hexo/public/archives/page/6/index.html","13ae687aa6fdee36205a72ff191fe5b0"],["E:/qinhao/hexo/public/archives/page/7/index.html","e3cd091c90cbdcc92ca7f906b8ed776a"],["E:/qinhao/hexo/public/archives/page/8/index.html","e3cd091c90cbdcc92ca7f906b8ed776a"],["E:/qinhao/hexo/public/archives/page/9/index.html","e3cd091c90cbdcc92ca7f906b8ed776a"],["E:/qinhao/hexo/public/artitalk/index.html","53e5721357291f487f5288a35e4a6a2a"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","7e6edb215f5e0a32187563df129b08e5"],["E:/qinhao/hexo/public/bitwarden/index.html","62b7096a34e9bdd3fbd8acde5bee4d1d"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","1752964b9a27b56891c2e7ed1c6eab48"],["E:/qinhao/hexo/public/c-11/index.html","0db863243c88fb5a025221237c8b57a7"],["E:/qinhao/hexo/public/c_1/index.html","c54274f95801d51fa8dfccf29bc0257e"],["E:/qinhao/hexo/public/c_10/index.html","1262840577d9d431b3a9986b95ef9161"],["E:/qinhao/hexo/public/c_2/index.html","3371856cceddc7bc909bcf70b0333d40"],["E:/qinhao/hexo/public/c_3/index.html","3f207ec231a8180cadc15f0be8783db6"],["E:/qinhao/hexo/public/c_4/index.html","7840909be951fe4c2fd374305989e326"],["E:/qinhao/hexo/public/c_5/index.html","0a83ff3cea4ce21bf9981e796f9c1ccf"],["E:/qinhao/hexo/public/c_6/index.html","0aa5468c903d44ee2ce41e3d61ada5cc"],["E:/qinhao/hexo/public/c_7/index.html","c6b8765107dce255d3e673c37e856586"],["E:/qinhao/hexo/public/c_8/index.html","9ce6af488553daf6526273a290098b09"],["E:/qinhao/hexo/public/c_9/index.html","f5f6ca6be76bc5d306dc73630e1c50d3"],["E:/qinhao/hexo/public/categories/C语言/index.html","587f2a090b15cfdf29edff6fb3c6d3bc"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","c97705cfd3703bbf79afbc087019d90e"],["E:/qinhao/hexo/public/categories/Java/index.html","7bc9fb5e9cf6fda395df0498527f8823"],["E:/qinhao/hexo/public/categories/Java/page/2/index.html","0b531af881178b0f6a0d06171c9a50db"],["E:/qinhao/hexo/public/categories/Linux/index.html","2c0e4dbfb0086939f8a63934cbae96f8"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","4474de9d953ab5ce3b9154197df5f952"],["E:/qinhao/hexo/public/categories/Python/index.html","e594069129d40bce3be38a4cb008e7b5"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","9b9014f92b8586a08ccd6807c872b1c9"],["E:/qinhao/hexo/public/categories/交换机/index.html","c82351385c94a34990346335ddd0bcae"],["E:/qinhao/hexo/public/categories/前端学习/index.html","ef3167c4a8a45de0bb10eee9db14545a"],["E:/qinhao/hexo/public/categories/华为认证/index.html","a997f18f5e680e7466433ac95c41f118"],["E:/qinhao/hexo/public/categories/小技巧/index.html","0d1a9edae15c1c95a10ac7d92b6043bd"],["E:/qinhao/hexo/public/categories/操作系统/index.html","80a0aaf2614f5f0f26aa7a09d29a7675"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","4f1b3b8c4d662e919d6fb08db9b9d293"],["E:/qinhao/hexo/public/categories/数据库/index.html","b2344720ecd7fcec9a0c2f6fb199de9c"],["E:/qinhao/hexo/public/categories/数据结构/index.html","af5f0b5befa1f5ac4f742aa5d3aec36b"],["E:/qinhao/hexo/public/categories/服务器/index.html","eec8e2222f386722dbd236ca5079c3c5"],["E:/qinhao/hexo/public/categories/算法基础/index.html","341a1accfd92d680973f6f7b00f5244b"],["E:/qinhao/hexo/public/categories/网络安全/index.html","556bab664125bf24664a1602beac4d46"],["E:/qinhao/hexo/public/categories/股票知识/index.html","e7f8bc20999f58334cabc6eae67623f6"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","0720bd46c23e0e1b4abe1545c325a048"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","f9fbae88d52853f942d03aea1456eb85"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","eb79a46806e25ea28cb3cc7f17a32620"],["E:/qinhao/hexo/public/categories/软件破解/index.html","7dee33bd116d3183a09b3a232935ab66"],["E:/qinhao/hexo/public/categories/通信技术/index.html","48388050ae58d22cd4057bf65712ee3a"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","2ad391f886145743d6cfd333fda92aa0"],["E:/qinhao/hexo/public/category/index.html","49de5e6dae8be871f89337821308bd17"],["E:/qinhao/hexo/public/cinemas/index.html","ee2807b66494d5bdaf5a747d1d942764"],["E:/qinhao/hexo/public/color/index.html","6b7476b492ecc283f1ef452aefe21c6c"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","58276d04a90b5effa067df29d100ee19"],["E:/qinhao/hexo/public/computer_network_basics/index.html","6bcd543ee31592c7c620953f4f8e2144"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","30276ae22ea17e84623299d8c9cda7e7"],["E:/qinhao/hexo/public/dataStructure-1/index.html","e91d8c2845d423e64ff5f4e452c8a8c7"],["E:/qinhao/hexo/public/dataStructure-2/index.html","301e32d2b5e58957fb08b71c12c16076"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","0dd8c02dbe3f0d582b1a52a1a00ed8af"],["E:/qinhao/hexo/public/donate/drinks/script.js","516bc286d1c162bf09c806066fda4171"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","12257cdd87244e6f517e5283e50f6c14"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","ef6a56d34053b58878907aa130337902"],["E:/qinhao/hexo/public/friends/index.html","e7fd087610f9cefa59a5f72f5ce5aaef"],["E:/qinhao/hexo/public/gallery/index.html","315ff0e4967cbe2dad95331afe5f91da"],["E:/qinhao/hexo/public/gallery/myphotos/index.html","34deb079509a4e2ac5895b2bcb689e52"],["E:/qinhao/hexo/public/gallery/reset/index.html","8a131fd96439297a3dcd1873a4f5df10"],["E:/qinhao/hexo/public/gcc/index.html","f7930e613b0fcbf5b8296bda75c94b0b"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","5bd9ba6785e85a8d4c226e56caf3db28"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","6a07bc40738d9324e50c14f19b398fae"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","4c8c38ebf9e3745e911dfc1924f31980"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","2945cf476bcd8b73b39849e7833ec803"],["E:/qinhao/hexo/public/linux/index.html","001fadbab0c9e014562cb11f34e504b0"],["E:/qinhao/hexo/public/login_demo/index.html","8455f9fee28643ab272190b6e0647378"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","a95e84ce4b1eefe162089b2cc627259b"],["E:/qinhao/hexo/public/memory_save_number/index.html","64de582e8aeb521d0534ad39c6b24e42"],["E:/qinhao/hexo/public/mobile_communication/index.html","f8c6539b7baa20f314f75a6430609683"],["E:/qinhao/hexo/public/movies/index.html","49558f6533f15355e0bac4a2a7ab1c72"],["E:/qinhao/hexo/public/mylist/index.html","70b17c99473b0b1d4ae9277cbbf9d65a"],["E:/qinhao/hexo/public/myphotos/index.html","456393c1c1bb0e8ebe7320ae1ee8e572"],["E:/qinhao/hexo/public/mysql-install/index.html","8ffc5cbf2165dfcf4964ca446c59ac4c"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","a07dca5433da98bfee98ab66daafdf21"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","a6817f9c89d690a824cf6cd6322dfa7c"],["E:/qinhao/hexo/public/mysql_question_1/index.html","bb0e9edf28373512d849731538093116"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","75749e0052a6ee57530d2c5963302908"],["E:/qinhao/hexo/public/not-allow-F12/index.html","6e2cef7eecd0df6184d52eca5ddf3460"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","a29444734ef74e7d654bef2d5a6c9fb5"],["E:/qinhao/hexo/public/page/10/index.html","7b0622d77664dbc833b0104e3d253d4f"],["E:/qinhao/hexo/public/page/11/index.html","5d9b37cce25950255297624dde29016a"],["E:/qinhao/hexo/public/page/12/index.html","acc3252b1b150d6dac030ebf84e08680"],["E:/qinhao/hexo/public/page/13/index.html","b46133afe5d0c85529994cbcecd2762f"],["E:/qinhao/hexo/public/page/2/index.html","d2d4fd7d352fcc295de560f05d57c4ea"],["E:/qinhao/hexo/public/page/3/index.html","88e4400fd4549b0afcc90f4845057f08"],["E:/qinhao/hexo/public/page/4/index.html","500def79d43d7fa711b0fca413329532"],["E:/qinhao/hexo/public/page/5/index.html","630beceb23a7c9196f116fb6e84b812a"],["E:/qinhao/hexo/public/page/6/index.html","59b39f3dfbe7f006c28f7a02da66c594"],["E:/qinhao/hexo/public/page/7/index.html","5fc04a31f442d583dea4eb4de25b103e"],["E:/qinhao/hexo/public/page/8/index.html","713a0368862c071af02ab47da8b2c131"],["E:/qinhao/hexo/public/page/9/index.html","bab9dde294f585dcacf77537eb3951a7"],["E:/qinhao/hexo/public/python-2/index.html","c130e398bfacb69a192240efa3b8f84d"],["E:/qinhao/hexo/public/ssh/index.html","b8f1842048b3cf55c2437337a4c3052c"],["E:/qinhao/hexo/public/stock_1/index.html","a1829b589cd65a28193d824c1496c77b"],["E:/qinhao/hexo/public/stock_10/index.html","a7c89c3b83d48321a65e53f9d04f17fc"],["E:/qinhao/hexo/public/stock_11/index.html","d1f8f56963a3dc309852dcaa3ba911ee"],["E:/qinhao/hexo/public/stock_12/index.html","8d6b241932b0a96b09bf7358a0cfa874"],["E:/qinhao/hexo/public/stock_13/index.html","40f85238592373bc02aafa668892757c"],["E:/qinhao/hexo/public/stock_14/index.html","3f353e87e244373dc3c3dd42969ef89a"],["E:/qinhao/hexo/public/stock_15/index.html","40ca77e2ce57831daef7c463a3848d02"],["E:/qinhao/hexo/public/stock_2/index.html","1e78acf2a1549c998f87d19d74adb456"],["E:/qinhao/hexo/public/stock_3/index.html","1fb8bbf303457facf05b20509514b3bb"],["E:/qinhao/hexo/public/stock_4/index.html","770290b361c00c58684847cc679785c6"],["E:/qinhao/hexo/public/stock_5/index.html","ba68b0f0f3f985a6a7396b404acf4c6d"],["E:/qinhao/hexo/public/stock_6/index.html","a555d9b7af2da1f2ef5196a65b01a7cb"],["E:/qinhao/hexo/public/stock_7/index.html","924581d3b0de2c21edd3038e41ae5501"],["E:/qinhao/hexo/public/stock_8/index.html","ffbdf23d9c721835ff362bb94c3c8130"],["E:/qinhao/hexo/public/stock_9/index.html","85471afd5a3e1d47c866340c54c4ee50"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","428f87b1556c78e5cd59ecf86bee7227"],["E:/qinhao/hexo/public/sw-register.js","097a1bbbdbfaa2afb3f7505768b84e91"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","554966f170b877d5d741ace555084524"],["E:/qinhao/hexo/public/system1/index.html","d006b32827912b29b0182b2cd7c227db"],["E:/qinhao/hexo/public/system10/index.html","deb3cccd19e8aa8f96b187e109cab788"],["E:/qinhao/hexo/public/system11/index.html","443ea6ad17b5cdeb639d38897aa7d9f2"],["E:/qinhao/hexo/public/system12/index.html","520d2a31059cccd0615c7ee883c0b891"],["E:/qinhao/hexo/public/system2/index.html","65d5cdffe884dba04a79e6dbaa5b63ab"],["E:/qinhao/hexo/public/system3/index.html","9ae0ab7cbb188fa442fba093d9747d16"],["E:/qinhao/hexo/public/system4/index.html","679494c0ff6e6cd9b49a98b241cba1d0"],["E:/qinhao/hexo/public/system5/index.html","b15d8fbc74fb5aed06a1ca791e1ed402"],["E:/qinhao/hexo/public/system6/index.html","eeed7a41ea217db8bfd5ffca6d1c0495"],["E:/qinhao/hexo/public/system7/index.html","076bc0ba9eabb3dc030e1bcf6909b530"],["E:/qinhao/hexo/public/system8/index.html","3a8684b758aae548629a96b21e8dd6f3"],["E:/qinhao/hexo/public/system9/index.html","0613299e6f0eef841267585a133b2086"],["E:/qinhao/hexo/public/system_info/index.html","506f64dea62682b6fe637b2360838a52"],["E:/qinhao/hexo/public/tags/index.html","59b67c532bf185583fc85266d9b18b57"],["E:/qinhao/hexo/public/transactionManager/index.html","644420ca2cd0c4eb487bc6f9bbb82f90"],["E:/qinhao/hexo/public/utils/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","062736d9e111629fee69620912530f22"],["E:/qinhao/hexo/public/wireless_radio/index.html","207c86d9cca8344fe9ef7acd0c54bf06"],["E:/qinhao/hexo/public/wireless_word/index.html","5df2150b71f3149596f99dc9b1373add"],["E:/qinhao/hexo/public/xml/index.html","fd7d274d41e2d95faa9587dbffee6d06"]];
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







